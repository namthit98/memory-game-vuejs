new Vue({
  el: "#game",
  data: {
    cards: [
      "angularjs-original.svg",
      "babel-original.svg",
      "backbonejs-original.svg",
      "chrome-original.svg",
      "d3js-original.svg",
      "firefox-original.svg",
      "html5-original.svg",
      "ie10-original.svg",
      "jquery-original.svg",
      "mongodb-original.svg",
      "nodejs-original.svg",
      "typescript-original.svg",
      "webpack-original.svg",
      "javascript-original.svg",
      "bootstrap-plain.svg",
      "react-original.svg",
      "css3-original.svg",
      "docker-original.svg",
      "electron-original.svg",
      "foundation-original.svg"
    ],
    card1: null,
    card2: null,
    right: 0,
    isLockBoard: false
  },
  computed: {
    processCards: function() {
      return this.cards.concat(this.cards);
    },
    isWin: function() {
      return this.right === 20;
    }
  },
  methods: {
    randomOrder: function() {
      var num = Math.floor(Math.random() * 100);

      return {
        order: num
      };
    },
    clickOnCard: function(event) {
      if(this.isLockBoard === true) return;
      
      var target = event.target;
      var parent = target.parentElement;
      var card = target.nextElementSibling;
      var vm = this;

      parent.classList.add("active");

      if(card === null) return;

      if (this.card1 === null) {
        this.card1 = card;
      } else {
        this.isLockBoard = true;

        this.card2 = card;

        if(this.card1.dataset.key === this.card2.dataset.key) {
          setTimeout(function(){
            vm.card1.parentElement.classList.add("right");
            vm.card2.parentElement.classList.add("right");
            
            vm.card1.parentElement.classList.remove("active");
            vm.card2.parentElement.classList.remove("active");

            vm.card1 = null;
            vm.card2 = null;
            vm.right++;

            vm.isLockBoard = false;
          }, 300);
        } else {      
          setTimeout(function() {
            vm.card1.parentElement.classList.remove("active");
            vm.card2.parentElement.classList.remove("active");

            vm.card1 = null;
            vm.card2 = null;

            vm.isLockBoard = false;
          }, 700);
        }
      }
    }
  }
});
