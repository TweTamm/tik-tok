const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    videos: [
        {
            avatar: './assets/img/img1.jpg',
            name: 'bee_are_beeble',
            subname: 'Bee_are_beeble',
            comment: 'Công nghệ phát triển quá',
            tag: '#xh',
            source: 'https://www.tiktok.com/music/DDU-DU-DDU-DU--JP-Ver--6973892626206427138?is_from_webapp=1&sender_device=pc',
            music: 'nhạc nền - 𝑩𝒆𝒆_𝒂𝒓𝒆_𝑩𝒆𝒆𝒃𝒍𝒆 ♡ - Bee_are_Beeble ♡',
            video: './assets/video/vid1.mp4',
            button: 'Follow',
            classname: 'user__info-img user__info-img--big',
            heart: '2500',
            comments: '500',
            share: '2.5k',
            follow: '1.5M',
            like: '5M',
            follower: 'Follower',
            likes: 'Likes',
            footer: 'New world',
        },
        {
            avatar: './assets/img/img2.jpg',
            name: 'dangminh3101',
            subname: '🍉Min Min🍉',
            comment: 'Remix xong như 1 bài khác luôn',
            tag: '#fyp #story #stt #remix',
            source: 'https://www.tiktok.com/music/Thấm-Thía-Remix-7082250106976750362?is_from_webapp=1&sender_device=pc',
            music: 'nhạc nền - 🍉Min Min🍉',
            video: './assets/video/vid2.mp4',
            button: 'Follow',
            classname: 'user__info-img user__info-img--big',
            heart: '1505',
            comments: '100',
            share: '2k',
            follow: '1.5M',
            like: '5M',
            follower: 'Follower',
            likes: 'Likes',
            footer: 'LOVE SICK GIRL',
        },
        {
            avatar: './assets/img/img3.jpg',
            name: 'emilyta269',
            subname: 'emilyta',
            comment: 'So cuteeeeeeee',
            tag: '#extraordinaryattorneywoo',
            source: 'https://www.tiktok.com/music/Energy-Music-Vol-4DVT-7102398923515841307?is_from_webapp=1&sender_device=pc',
            music: 'original sound - Gracies Corner',
            video: './assets/video/vid3.mp4',
            button: 'Follow',
            classname: 'user__info-img user__info-img--big user__info-img--big-three',
            heart: '1200',
            comments: '200',
            share: '1k',
            follow: '1.5M',
            like: '5M',
            follower: 'Follower',
            likes: 'Likes',
            footer: 'Love pet',
        },
        {
            avatar: './assets/img/img4.jpg',
            name: 'orinn090998',
            subname: 'Orinn 🌿(秋香',
            comment: 'So happy',
            tag: '#stt',
            source: 'https://www.tiktok.com/music/Love-Yourself-Drill-Remix-7064884950239070977?is_from_webapp=1&sender_device=pc',
            music: 'Luv Letters - frad',
            video: './assets/video/vid4.mp4',
            button: 'Follow',
            classname: 'user__info-img user__info-img--big user__info-img--big-four',
            heart: '400',
            comments: '250',
            share: '1.2k',
            follow: '1.5M',
            like: '5M',
            follower: 'Follower',
            likes: 'Likes',
            footer: 'Happy together',
        },
        {
            avatar: './assets/img/img5.jpg',
            name: 'engfa32',
            subname: 'ENGFA',
            comment: 'Hài ghê',
            tag: '#stt',
            source: 'https://www.tiktok.com/music/Tình-KaLofi-ver-7041883041370753793?is_from_webapp=1&sender_device=pc',
            music: 'เฮอร์ไมโอน้อง dance ver. - thechanisara',
            video: './assets/video/vid5.mp4',
            button: 'Follow',
            classname: 'user__info-img user__info-img--big user__info-img--big-five',
            heart: '1220',
            comments: '1k',
            share: '2.8k',
            follow: '1.5M',
            like: '5M',
            follower: 'Follower',
            likes: 'Likes',
            footer: 'Cuộc sống hài hước',
        },
        {
            avatar: './assets/img/img6.jpg',
            name: 'dinomango0206',
            subname: 'ⒺⓃ',
            comment: 'Khám phá trà sữa rẻ',
            tag: '#blackpink #chaelisa',
            source: 'https://www.tiktok.com/music/Tình-KaLofi-ver-7041883041370753793?is_from_webapp=1&sender_device=pc',
            music: 'nhạc nền - ⒺⓃ🐰🐻🐿️🐥',
            video: './assets/video/vid6.mp4',
            button: 'Follow',
            classname: 'user__info-img user__info-img--big user__info-img--big-six',
            heart: '1266',
            comments: '5k',
            share: '2.5k',
            follow: '1.8M',
            like: '5.5M',
            follower: 'Follower',
            likes: 'Likes',
            footer: 'Tín đồ ăn uống',
        },
    ],


    render: function () {
        const htmls = this.videos.map(video => {
            return `
            <div class="user user--main">
            <div class="${video.classname}">
                <img src="${video.avatar}"
            </div>
        
        
            <div class="content">
                <div class="content__text">
                    <div class="content__text-name">
        
                        <div class="content__text-name-author">${video.name}</div>
                        <div class="content__text-more">${video.subname}</div>
                    </div>

                    <div class="user__info-short hidden">
                    <div class="user__info-top">
    
                        <div class="user__info-img">
                            <img src="${video.avatar}"
                                alt="avatar">
                        </div>
    
                        <div class="btn-follow">
                            <button class="content__btn">${video.button}</button>
                        </div>
    
                    </div>
    
                    <div class="user__info-between">
                        <div class="content__text-name-author">${video.name}</div>
                        <div class="content__text-more">${video.subname}</div>
                    </div>
    
                    <div class="user__info-bottom">
                        <div class="user__info-follow">
                            <p class="user__info-number">${video.follow}</p>
                            <p class="user__info-text">${video.follower}</p>
                        </div>
    
                        <div class="user__info-follow">
                            <p class="user__info-number">${video.like}</p>
                            <p class="user__info-text">${video.likes}</p>
                        </div>
    
                    </div>
    
                    <div class="user__info-footer">
                        <p>${video.footer}</p>
                    </div>
                </div>
        
                    <div class="content__text-tag--one">
                        <p>${video.comment}</p>
                        <div class="content__text-tag--name">
                            <a
                                href="">${video.tag}
                            </a>
                        </div>
                    </div>
        
                    <div class="content__text-tag--three">
                        <span class="iconify" data-icon="bi:music-note-beamed"></span>
                        <a
                            href="${video.source}">
                            ${video.music}
                        </a>
                    </div>
                  
                </div>
       
                <div class="content-video-main">
        
                    <div class="content-video">
        
                        <video autoplay muted controls loop disablepictureinpicture
                            controlslist="nodownload noplaybackrate" src="${video.video}"
                            loop type="video/mp4"></video>     
                    </div>

                    <div class="content-btn">
                    <div class="content-btn--heart">
    
                        <div class="fa-solid fa-heart"></div>
                        <p class="number-heart">${video.heart}</p>
    
                    </div>
    
    
                    <div class="content-btn--comments">
    
                        <div class="btn-icon">
                            <span class="iconify" data-icon="fa6-solid:comment-dots"></span>
                        </div>
                        <p>${video.comments}</p>
                    </div>
    
    
    
                    <div class="content-btn--share">
    
                        <div class="btn-icon">
                            <span class="iconify" data-icon="icon-park-solid:share-two"></span>
                        </div>
                        <p>${video.share}</p>
    
                        <div class="content-arrow">
                            <span class="iconify" data-icon="bxs:down-arrow"></span>
                        </div>    
    
                        <div class="content-btn--share-menu hidden">

                        <div class="content-btn--share-menu-show">
                            <ul>
                                <li class="item-text">
                                    <span class="iconify"
                                        data-icon="ph:brackets-angle"></span>
                                    <p class="content-menu--text">Dip</p>
                                </li>

                                <li class="item-text">
                                    <span class="iconify"
                                        data-icon="mdi:send-circle-outline"
                                        style="color: red;"></span>
                                    <p class="content-menu--text">Share with friends</p>
                                </li>

                                <li class="item-text">
                                    <span class="iconify"
                                        data-icon="akar-icons:facebook-fill"
                                        style="color: blue;"></span>
                                    <p class="content-menu--text">Share with Facebook</p>
                                </li>

                                <li class="item-text"><span class="iconify"
                                        data-icon="ic:twotone-whatsapp"
                                        style="color: rgba(112, 239, 39, 0.92);"></span>
                                    <p class="content-menu--text">Share with Whatsapp</p>
                                </li>

                                <li class="item-text">
                                    <span class="iconify"
                                        data-icon="icon-park-outline:copy-link"
                                        style="color: red;"></span>
                                    <p class="content-menu--text">Copy Link</p>
                                </li>

                            </ul>
                        </div>

                        <div class="iconify--arrow hidden">
                            <span class="iconify iconify--arrow-btn"
                                data-icon="dashicons:arrow-down-alt2"></span>
                        </div>

                        <div class="content-btn--share-menu-hidden hidden">
                            <ul>
                                <li class="item item-change">
                                    <span class="iconify"
                                        data-icon="ant-design:twitter-circle-filled"
                                        style="color: blue;"></span>
                                    <p class="content-menu--text">Share with Twitter/p>
                                </li>

                                <li class="item item-change">
                                    <span class="iconify"
                                        data-icon="entypo-social:linkedin-with-circle"
                                        style="color: blue;"></span>
                                    <p class="content-menu--text">Share with LinkedIn</p>
                                </li>

                                <li class="item item-change">
                                    <span class="iconify" data-icon="akar-icons:reddit-fill"
                                        style="color: orange;"></span>
                                    <p class="content-menu--text">Share with Reddit</p>
                                </li>

                                <li class="item item-change">
                                    <span class="iconify" data-icon="fontisto:telegram"
                                        style="color: rgba(60, 196, 226, 0.3);"></span>
                                    <p class="content-menu--text">Share with Telegram</p>
                                </li>

                                <li class="item item-change">
                                    <span class="iconify"
                                        data-icon="clarity:email-line"></span>
                                    <p class="content-menu--text">Share with Email</p>
                                </li>

                                <li class="item item-change">
                                    <span class="iconify" data-icon="cib:line"
                                        style="color: green;"></span>
                                    <p class="content-menu--text">Share with Line</p>
                                </li>

                                <li class="item item-change">
                                    <span class="iconify"
                                        data-icon="akar-icons:pinterest-fill"
                                        style="color: red;"></span>
                                    <p class="content-menu--text">Share with Pinterest </p>
                                </li>


                            </ul>
                        </div>

                    </div>
                   </div>
    
    
                </div>
                 
                </div>     
        
            </div>
        
            <div class="btn-follow">
                <button class="content__btn-right">${video.button}</button>
            </div>

</div>

</div>

        
        `
        })

        $('.right_content').innerHTML = htmls.join('')
    },

    scroll: function () {
        let videos = $$('video')
        videos.forEach(video => {
            let playPromise = video.play()
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    let observer = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                            video.muted = false
                            if (entry.intersectionRatio !== 1 && !video.paused) {
                                video.pause()
                            } else if (entry.intersectionRatio > 0.5 && video.paused) {
                                video.play()
                            }
                        })
                    }, { threshold: 0.5 })
                    observer.observe(video)
                })
            }
        })
    },

    info: function () {
        let imgBigs = $$('.user__info-img--big > img')
        let info = $$('.user__info-short')
        let contentTexts = $$('.content__text-name')

        imgBigs.forEach((img, index) => {
            const infoShort = info[index]

            img.onmouseenter = function () {
                infoShort.classList.remove('hidden')
            }

            infoShort.onmouseleave = function () {
                infoShort.classList.add('hidden')
            }

            document.addEventListener('click', function (e) {
                if (e.target.closest('infoShort'))
                    return
                infoShort.classList.add('hidden')
            })
        })


        contentTexts.forEach((text, index) => {
            const infoShort = info[index]

            text.onmouseenter = function () {
                infoShort.classList.remove('hidden')
            }

            infoShort.onmouseleave = function () {
                infoShort.classList.add('hidden')
            }
        })

    },

    heart: function () {
        let hearts = $$('.fa-heart')

        hearts.forEach((heart) => {
            heart.onclick = function (e) {
                var heartClick = e.target;
                if (heart.classList.contains('on')) {
                    heart.classList.remove('on')
                    var input = heartClick.parentElement.children[1]
                    var inputValue = input.innerHTML
                    var newValue = parseInt(inputValue) - 1
                    input.innerHTML = newValue
                } else {
                    heart.classList.add('on')
                    var input = heartClick.parentElement.children[1]
                    var inputValue = input.innerHTML
                    var newValue = parseInt(inputValue) + 1
                    input.innerHTML = newValue
                }
            }
        })

    },

    share: function () {
        let iconShares = $$('.content-btn--share')
        let shareMenus = $$('.content-btn--share-menu')
        let btnShows = $$('.iconify--arrow')
        let hiddenMenus = $$('.content-btn--share-menu-hidden')

        iconShares.forEach((icon, index) => {
            const shareMenu = shareMenus[index]
            const hiddenMenu = hiddenMenus[index]
            const btnShow = btnShows[index]

            icon.onmouseenter = function () {
                shareMenu.classList.remove('hidden')
                btnShow.classList.remove('hidden')
                hiddenMenu.classList.add('hidden')
            }

            icon.onmouseleave = function () {
                shareMenu.classList.add('hidden')
            }
            shareMenu.onmouseleave = function () {
                shareMenu.classList.add('hidden')
            }

            btnShows.forEach((arrow, index) => {
                const hiddenMenu = hiddenMenus[index]

                arrow.onclick = function () {
                    arrow.classList.add('hidden')
                    hiddenMenu.classList.remove('hidden')
                }
            })


        })
    },

    btn: function () {
        const btnFollows = $$('.content__btn-right')
        const btnFollowsShorts = $$('.content__btn')

        btnFollows.forEach((btn, index) => {
            const btnFollowsShort = btnFollowsShorts[index]
            btn.onclick = function () {
                if (btn.classList.contains('content__btn-right') ) {
                    btn.classList.remove('content__btn-right');
                    btn.classList.add('content__btn-following')
                    btn.innerHTML = 'Following'
                    btnFollowsShort.classList.add('content__btn-following')
                    btnFollowsShort.innerHTML = 'Following'
                } else {
                    btn.classList.remove('content__btn-following')
                    btn.classList.add('content__btn-right')
                    btn.innerHTML = 'Follow'
                    btnFollowsShort.classList.remove('content__btn-following')
                    btnFollowsShort.classList.add('content__btn')
                    btnFollowsShort.innerHTML = 'Follow'
                }

            }
        })

    },

    start: function () {
        this.render()
        this.scroll()
        this.info()
        this.heart()
        this.share()
        this.btn()
    }
}
app.start()


