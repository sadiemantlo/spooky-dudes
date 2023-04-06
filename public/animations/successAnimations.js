// Animate the transition from image1 to image2
document.addEventListener('DOMContentLoaded', () => {
async function treasure() {
    
  if (window.location.pathname === '/story/11') {

anime.set("#treasureopen", { opacity: 0 });
anime.set(".congratsText", { opacity: 0 });

anime({
      targets: "#treasureopen",
      scale: [
        { value: [2, 1], duration: 3000}
    ],
      opacity: 1,
      duration: 3000,
      complete: function (){
        anime({
          targets: ".congratsText",
          delay: 2000,
          opacity: 1,
          duration: 2000,
          translateX: 250,
          translateY: 300,
          scaleY: 1.8,
        });
      }
    });
  } else {
    console.log("image not found");
  }
} 
treasure()
});

