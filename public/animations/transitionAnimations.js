const anime = require('../../node_modules/animejs/lib/anime.min.js');
const Scene  = require('../../models/Scene');

async function transitionIn(id, duration = 4000, easing = 'linear') {
  const scene = await Scene.findByPk(id);
  console.log(scene);

  if (!scene) {
    throw new Error(`Scene with id ${id} not found`);
  }
  const imgID = `#${scene.id}`;
  console.log(imgID);

  //transition in
  anime.set(imgID, { opacity: 0 });
  return anime({
    targets: imgID,
    opacity: 1,
    duration: duration,
    easing: easing,
  });

}
transitionIn()


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

