const anime = require('../../node_modules/animejs/lib/anime.min.js');

anime({
    targets: ".library",
    translateX: {
        value: 300,
        duration: 6000,
    },
    translateY: {
        value: 200,
        duration: 6000,
    },
    scale: {
        value: 1.9,
        duration: 6000,
    },
  });