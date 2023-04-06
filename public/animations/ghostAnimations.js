const anime = require('../../node_modules/animejs/lib/anime.min.js');

anime.set(".ghostfoyer", { opacity: 0 });

anime({
  targets: ".ghostfoyer",
  opacity: {
    value: 1,
  },
  translateX: [
    { value: 450, duration: 5000, delay: 1000 },
    { value: -425, duration: 4000, delay: 1000 },
  ],
  scaleX: [
    { value: 3, duration: 100, delay: 1000, easing: "easeOutExpo" },
    { value: 1, duration: 900 },
    { value: 3, duration: 100, delay: 5000, easing: "easeOutExpo" },
    { value: 1, duration: 900 },
  ],
  rotate: {
    value: 360,
    duration: 2000,
    easing: "linear",
  },
  complete: function () {
    anime({
      targets: ".ghost",
      opacity: 0,
      duration: 2000,
    });
  },
});