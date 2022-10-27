let videos = document.querySelectorAll('video')
videos.forEach(video => {
    let playPromise = video.play()
    if(playPromise !== undefined) {
        playPromise.then(() => {
            let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    video.muted = false;
                    if(entry.intersectionRatio !== 1 && !video.paused) {
                        video.pause()
                    } else if (entry.intersectionRatio > 0.5 && video.pause){
                        video.play()
                    }
                })
            }, {threshold: 0.5})
            observer.observe(video)
        })
    }
})


videos.forEach(video => {
    let playPromise = video.play()

    if(playPromise !== undefined){
        playPromise.then(() =>{
            let observer = new IntersectionObserver(entries =>{
                entries.forEach(entry =>{
                    if(entry.intersectionRatio !== 1 && !video.paused) {
                        video.pause()
                    } else if (entry.intersectionRatio > 0.5 && video.pause) {
                        video.play()
                    }
                })
            }, {threshold: 0.5})
            
        })
    }
})