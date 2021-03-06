var app = new Vue({
  el: '#meet-hens',
  data: {
    message: 'Hello Vue!',
    breeds: Chickens,
    selectedBreed: null,
    displayTitle: '',
    displayText: 'select one of the breeds to learn more',
    displayImage: 'assets/outline.gif',
    displayActive: false,
    isFaded: false
  },
  methods: {
    selectBreed: function (selected) {
      if (this.displayActive === false) {
        this.displayActive = true;
      };
      this.isFaded = true;
      setTimeout(() => {
        this.selectedBreed = selected;
        this.displayTitle = this.breeds[selected].breed;
        this.displayText = this.breeds[selected].details;
        this.displayImage = this.breeds[selected].img;
        this.isFaded = false;
      }, 200);
    }
  }
});