async function homePageAnimations() {
  if (window.location.pathname === '/') {

anime.set("#groupName", { opacity: 0 });
anime.set("#title", { opacity: 0 });
anime.set("#start", { opacity: 0 });
anime.set("#login", { opacity: 0 });
anime.set("#comments", { opacity: 0 });

anime.timeline({
    targets: "#groupName",
    opacity: {
      value: 1,
      duration: 20000,
    }
})
.add({
    targets: "#title",
    scale: {
        value: [0, 0.9],
        duration: 8000,
        easing: 'linear',
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
          rotate: {
          delay: 5500,
          value: 360,
          duration: 5000,
        }
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
anime({
  targets: "#comments",
  opacity: {
  value: 1,
  delay: 10000,
  duration: 3000,
  },
})
}
}

document.addEventListener('DOMContentLoaded', () => {
  homePageAnimations();
});
