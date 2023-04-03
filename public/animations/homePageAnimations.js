anime.set('#groupName', { opacity: 0 });
anime.set('#title', { opacity: 0 });
anime.set('#start', { opacity: 0 });
anime.set('#login', { opacity: 0 });

anime.timeline({
    targets: '#groupName',
    opacity: 1,
    duration: 4000,
    easing: 'linear',
})
    .add({
        targets: '#title',
        width: {
            value: ["0vw", "100vw"],
            delay: 1000,
        },
        opacity: 1,
        duration: 15000,
    })

anime({
    targets: '#start',
    opacity: {
        delay: 8000,
        value: 1,
        duration: 4000,
    },
    complete: function () {
        anime({
            targets: '#login',
            opacity: {
                value: 1,
                duration: 4000,
            },
        })
    }
})
