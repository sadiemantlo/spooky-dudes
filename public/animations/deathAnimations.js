document.addEventListener('DOMContentLoaded', () => {
    async function deathScene() {

        // if (window.location.pathname === '/story/10') {


            anime.set(".sceneTitle9", { scale: 0 });
            anime({
                targets: ".sceneTitle9",
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
    
    deathScene()
})