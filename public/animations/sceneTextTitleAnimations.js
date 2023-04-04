const anime = require('../../node_modules/animejs/lib/anime.min.js');


function sceneTitle (target, duration = 5000) {
anime.set(".sceneTitle", {opacity:0})

anime({
    targets: target,
    opacity: 1,
    duration: duration,
    color: {
      value: '#FF0000',
      duration: 20000
    }
  });
}

sceneTitle();