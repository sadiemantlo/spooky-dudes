const anime = require('../../node_modules/animejs/lib/anime.min.js');

anime.set("#groupName", { opacity: 0 });
anime.set("#title", { opacity: 0 });
anime.set("#start", { opacity: 0 });
anime.set("#login", { opacity: 0 });

anime.timeline({
    targets: "#groupName",
    opacity: {
      value: 1,
      duration: 20000,
    }
})
.add({
    targets: "#title",
    width: {
        value: ["0vw", "100vw"],
        duration: 150000,
    },
    opacity: {
    value: 1,
    }
})
anime({
    targets: "#ghostHome",
    translateX: [
          { value: -1000, duration: 3000, delay: 500 },
          { value: 0, duration: 3000, delay: 500 },
        ],
})

anime({
    targets: "#start",
    opacity: {
    value: 1,
    delay: 8000,
    duration: 3000,
    },
})

anime ({
    targets: "#login",
    opacity: {
    value: 1,
    delay: 9000,
    duration: 3000,
  },
});