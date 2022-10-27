// ----------------Open messageMenu-------------------
const messageMenu = $('.navbar__message--menu')
const img = $('.navbar__message--top')
const messageText = $('.navbar__message--content-one')

img.onclick = function () {
    if (messageMenu.classList.toggle('active')) {
        messageText.classList.add('hidden')
        infoMenu.classList.remove('active')
    }
}
img.onmouseenter = function () {
    messageText.classList.remove('hidden')
}
img.onmouseleave = function () {
    messageText.classList.add('hidden')
}

// ----------------Open infoMenu-------------------

const infoMenu = $('.navbar__info--menu')
const infoImg = $('.navbar__info')

infoImg.onclick = function () {
    if (infoMenu.classList.toggle('active')) {
        messageMenu.classList.remove('active')
    }
}

// ----------------Change colors left-------------------

const btns = $$('.btn-item');

btns.forEach((btn) => {

    btn.onclick = function () {
        $('.btn-item.active').classList.remove('active');
        this.classList.add('active')
    }
})

//-------------------------See All--------------------------------

const btn = $('.user__text-one')
const list = $('.user_hidden')

btn.onclick = function () {
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden')
        btn.innerHTML = 'Hide'
    } else {
        list.classList.add('hidden')
        btn.innerHTML = 'See all'
    }

}

//-------------------------See More--------------------------------

const btnn = $('.user__text-two')
const listt = $('.user_following-hidden')

btnn.onclick = function () {
    if (listt.classList.contains('hidden')) {
        listt.classList.remove('hidden')
        btnn.innerHTML = 'Hide'
    } else {
        listt.classList.add('hidden')
        btnn.innerHTML = 'See more'
    }
}

