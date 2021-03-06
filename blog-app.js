var app = new Vue({
  el: '#blog-list',
  data: {
    blogPosts: [],
    totalNumberOfPosts: null,
    currentFetch: 0
  },
  mounted: function () {
    //get first 2 posts
    this.getNumberOfPosts();
    this.fetchPosts(0);
  },
  methods: {
    expand: function (id) {
      let newBlogPostsState = this.blogPosts.map((post) => {
        if (post._id === id) {
          post.expanded = !post.expanded;
        }
        return post;
      });
      this.blogPosts = newBlogPostsState;
    },
    imageUrlMaker: function (url, h, w) {
      let baseURL = 'https://cdn.sanity.io/images/ksrgjbn5/news/';
      let fileType = url.slice(-3);
      var regexImage = /image-/gi;
      let main = url.replace(regexImage, '').split("").slice(0, -4).join("");
      let height;
      let width;
      if (h || w) {
        height = h || null;
        width = w || null;
      }
      if (height) {
        height = `h=${height}`;
      }
      if (width) {
        width = `w=${width}`;
      }
      var imageString = baseURL + main + '.' + fileType;

      if (height) {
        imageString += `?${height}`;
        if (width) {
          imageString += `&${width}`
        }
        return imageString;
      } else if (width) {
        imageString += `?${width}`;
        return imageString; 
      } else {
        return imageString;
      };
    },
    debug: function (event, text) {
      console.log(text, event)
    },
    fetchPosts: function (range) {
      const loRange = range === 0 ? range : range * 2;
      const hiRange = loRange + 1;

      return fetch (`https://ksrgjbn5.api.sanity.io/v1/data/query/news?query=*[_type == "post"]| order(_createdAt desc)[${loRange}..${hiRange}]`)
      .then(resBuff => resBuff.json())
      .then(res => {
        if (res.result.length === 0) {
          return;
        }
        let resultWithSnippet = res.result.map(item => {
          let arrayOfBlocks = item.body;
          let firstTextBlock;
          for (var i = 0; i < arrayOfBlocks.length; i ++) {
            if (arrayOfBlocks[i]._type === "block" && typeof firstTextBlock === 'undefined') {
              firstTextBlock = arrayOfBlocks[i];
            }
          };
          let snippetSplit = firstTextBlock.children[0].text.split(" ");
          let snippet;
          if (snippetSplit.length > 30) {
            snippet = snippetSplit;
            snippet.length = 30;
            snippet.push(". . .");
            snippet = snippet.join(" ");
          } else {
            snippet = snippetSplit;
            snippet.push(". . .");
            snippet = snippet.join(" ");
          };
          item.snippet = snippet;
          item.expanded = false;
          let dateObj = new Date(item._createdAt);
          item.dateString = dateObj.toDateString();
          return item;
        });
        this.blogPosts = this.blogPosts.concat(resultWithSnippet);
        this.currentFetch = this.currentFetch + 1;
      })
      .catch(err => {
        console.log({error: err});
      })
    },
    getNumberOfPosts: function () {
      return fetch (`https://ksrgjbn5.api.sanity.io/v1/data/query/news?query=count(*[_type == "post"])`)
      .then(resBuff => resBuff.json())
      .then(res => {
        this.totalNumberOfPosts = res.result;
      })
      .catch(err => {
        console.log({error: err});
      })
    } 
  }
});