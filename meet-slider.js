var app = new Vue({
  el: '#card-slides',
  data: {
    message: 'Hello Vue!',
    breeds: Chickens,
    selectedBreed: 0,
    displayTitle: '',
    displayText: ''
  },
  mounted: function () {
    this.displayText =this.breeds[this.selectedBreed].details;
    this.displayTitle = this.breeds[this.selectedBreed].breed;
    console.log(this.displayText)
    console.log(this.displayTitle)
  },
  methods: {
    selectBreed: function (selected) {
      this.selectedBreed = selected;
      this.displayTitle = this.breeds[selected].breed;
      this.displayText = this.breeds[selected].details;
      console.log(this.selectedBreed)
      console.log(this.displayTitle)
        console.log(this.displayText)
    }
  }
});
