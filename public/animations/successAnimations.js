const anime = require('../../node_modules/animejs/lib/anime.min.js');

  // Set up the initial state of the images
  anime.set(".treasureopen", { opacity: 0 });
  anime.set(".congratsText", { opacity: 0 });


  // Animate the transition from image1 to image2
  anime({
    targets: ".treasureclosed",
    opacity: 0,
    duration: 2000,
    easing: "linear",
    complete: function () {
      anime({
        targets: ".treasureopen",
        scale: [
          { value: [2, 1], duration: 3000}
      ],
        opacity: 1,
        duration: 3000,
      });
      anime({
        targets: ".congratsText",
        delay: 2000,
        opacity: 1,
        duration: 2000,
        translateX: 50,
        translateY: 120,
        scaleY: 1.8,
      });

    let emojiPath = anime.path('#treasurecircle');
    anime({
        targets: '.goldcoinpng',
        translateX: emojiPath('x'),
        translateY: emojiPath('y'),
        easing: 'easeInOutQuart',
        duration: 2000,
        loop: true,
        delay: anime.stagger(200),
        direction: 'alternate'
  });
    },
  });

