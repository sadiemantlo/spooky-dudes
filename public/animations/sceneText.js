async function textAnimations(text) {
const element = document.getElementsByClassName("storyText")[0];
element.innerHTML = element.textContent.replace(/\S/g,'<span class="letter">$&</span>');

anime.timeline({loop:false})
.add({
  targets:'.storyText .letter',
  opacity:[0,1],
  translateZ:0,
  duration:1000,
  easing:"easeOutBounce",
  delay:(elem, index) => index*30
})
}

document.addEventListener('DOMContentLoaded', async () => {
    const sceneData = [
        {
          id: "id",
          image: "image",
          title: "title",
          text: "text",
          choice1:["",""],
          choice2:["",""],
          choice3:["",""]
        },
      ];
 
  const scene = sceneData;
  const text = scene.text;

  await textAnimations(text);
});

