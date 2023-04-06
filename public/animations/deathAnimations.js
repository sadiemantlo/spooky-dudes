// Animate the transition from image1 to image2
document.addEventListener('DOMContentLoaded', () => {
    async function deathScene() {

        // if (window.location.pathname === '/story/10') {


            anime.set(".zombiehand", { scale: 0 });
            anime({
                targets: ".zombiehand",
                scale: [
                    { value: [1, 2], duration: 1000 },
                    { value: [1], duration: 5000 }
                ],
                // scaleY: [
                //     { value: [2, 1], duration: 3500 }
                // ],
                skew: [
                    { value: [30, -20], duration: 5000 }
                ],
            });
        }
    }
    deathScene()
})