 //transition in
document.addEventListener('DOMContentLoaded', () => {
  async function transitionIn() {
   
    anime.set(".transitionIn", { opacity: 0 });

    anime({
      targets: ".transitionIn",
      opacity: 1,
      duration: 4000,
      easing: "linear",
    });
  }  

  transitionIn();
});

// //transition out
// function transitionOut(target, duration = 10000, delay = 1000) {
//   anime({
//     targets: target,
//     opacity: {
//       value: 0,
//       duration: duration,
//       delay: delay,
//     },
//   });
// }

// transitionOut()

