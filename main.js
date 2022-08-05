const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


var colorNumber = document.getElementsByClassName('fa-heart')

for (var i = 0; i < colorNumber.length; i++) {
    var heartButton = colorNumber[i];
    heartButton.addEventListener('click', function (e) {
        var heartClick = e.target;
      if (heartClick.classList.contains('on')){
          heartClick.classList.remove('on');
          heartClick.classList.add('off');
        var input = heartClick.parentElement.children[1];
        var inputValue = input.innerHTML;
        var newValue =  parseInt(inputValue) - 1;
        input.innerHTML = newValue;

        }else{
          heartClick.classList.remove('off');
          heartClick.classList.add('on');
         var input =heartClick.parentElement.children[1];
         var inputValue = input.innerHTML;
         var newValue =  parseInt(inputValue) + 1;
         input.innerHTML = newValue;
        }
    })
}
   

// -----------------------Change colors left--------------------------------

const btns = $$('.btn-item');

btns.forEach((btn) => {

    btn.onclick = function() {
        $('.btn-item.active').classList.remove('active');
        this.classList.add('active')
    }
})

// -------------hover to show info short---------------

const imgBigs = $$('.user__info-img--big')
const infoShorts = $$('.user__info-short')
const contentTexts = $$('.content__text-name')

imgBigs.forEach((img, index) => {
    const infoShort = infoShorts[index]

    img.onmouseenter = function() {
        infoShort.classList.add('active')
        // this.classList.add('active')
        
}
     img.onmouseleave = function() {
        $('.user__info-short.active').classList.remove('active')
        
    }
     }
)

contentTexts.forEach((text, index) => {
    const infoShort = infoShorts[index]
    
    text.onmouseenter = function() {
        infoShort.classList.add('active')
        // this.classList.add('active')


    text.onmouseleave = function() {
        $('.user__info-short.active').classList.remove('active')
    }
    }
})




// CHưa tối ưu
// ------------------show + hidden + click --------------------------------
// const icons = document.querySelectorAll('.content-btn--share')

const shareMenus = $$('.content-btn--share-menu');
const btnShows = $$('.iconify--arrow');
const hiddens = $$('.content-btn--share-menu-hidden');

for(const shareMenu of shareMenus){
    for(const hidden of hiddens){
        for(const btnShow of btnShows){

            shareMenu.addEventListener('mouseleave', () => {
                   shareMenu.classList.contains("show")
                   shareMenu.classList.remove("show")
                   shareMenu.classList.add("unshow")
        
                   hidden.classList.contains("show")           
                   hidden.classList.remove("show")
                   hidden.classList.add("unshow")
            
                   btnShow.classList.contains("unshow")
                   btnShow.classList.remove("unshow")
                   btnShow.classList.add("show")
        
                 }
         )}
    
    }    
        }    


for (const btnShow of btnShows) {
    for (const hidden of hiddens){
        btnShow.addEventListener('click', () => {
            hidden.classList.contains('unshow')
                hidden.classList.remove('unshow');   
                hidden.classList.add('show')
                btnShow.classList.add('unshow')
      })
    }

    }


// -------------------------------------





