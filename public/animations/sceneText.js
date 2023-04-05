async function textAnimations(text) {
var element = document.getElementsByClassName("storyText")[3];
element.innerHTML = element.textContent.replace(/\S/g,'<span class="letter">$&</span>');

anime.timeline({loop:false})
.add({
  targets:'.storyText .letter',
  scale:[3,1],
  opacity:[0,1],
  translateZ:0,
  duration:1000,
  easing:"linear",
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
          choices: "choices"
        },
      ];
 
  const scene = sceneData;
  const text = scene.text;

  await textAnimations(text);
});

