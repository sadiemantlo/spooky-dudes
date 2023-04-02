//transition in
anime.set(".kitchen", { opacity: 0 });

anime({
  targets: ".kitchen ",
  opacity: 1,
  duration: 4000,
  easing: "linear",
});


//transition out
anime({
  targets: ".kitchen",
  opacity: {
    value: 0,
    delay: 1000,
    duration: 10000,
  },
});


//code reuseable code
import anime from 'animejs';

//transition IN
export function fadeIn(target, duration = 4000, easing = 'linear') {
  anime.set(target, { opacity: 0 });

  return anime({
    targets: target,
    opacity: 1,
    duration: duration,
    easing: easing,
  });
}

//transition OUT
export function fadeOut(target, duration = 10000, delay = 1000) {
    return anime({
      targets: target,
      opacity: {
        value: 0,
        duration: duration,
        delay: delay,
      },
    });
  }

