var app = new Vue({
  el: '#blog-list',
  data: {
    blogPosts: []
  },
  mounted: function () {
    return fetch ('https://ksrgjbn5.api.sanity.io/v1/data/query/news?query=*[_type == "post"]')
      .then(resBuff => resBuff.json())
      .then(res => {
        let resultWithSnippet = res.result.map(item => {
          let snippetSplit = item.body[0].children[0].text.split(" ");
          let snippet;
          if (snippetSplit.length > 30) {
            snippet = snippetSplit;
            snippet.length = 30;
            snippet.push("...");
            snippet = snippet.join(" ");
          } else {
            snippet = snippetSplit.push("...").join(" ");
          };
          item.snippet = snippet;
          item.expanded = false;
          let dateObj = new Date(item._createdAt);
          item.dateString = dateObj.toDateString();
          return item;
        })
        this.blogPosts = resultWithSnippet;
      })
      .catch(err => {
        console.log({error: err});
      })
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
    debug: function (event) {
      console.log(event)
    }

  }
});