//Khi click vào Hiển thị thêm
const sliderBtn = $('#item-js');
const itemChange = $$('.item-change');
const btnDownToUp = $('.bx-chevron-down');
const btnClickHtt = $('.btn_click-htt');

sliderBtn.onclick = () => {
    itemChange.forEach((item) => {
        item.classList.toggle('on');   
    });
    btnDownToUp.classList.toggle('btn-arrow-up'); 

    //Kiểm tra nếu có class btn-arrow-up thì inner 'Ẩn bớt" nếu không có --> thì inner 'Hiển thị thêm'
    const btn_icon_fix = $('.btn-arrow-up')
    if(btn_icon_fix) {
        btnClickHtt.innerHTML = 'Ẩn bớt';
    }else {
        btnClickHtt.innerHTML = 'Hiển thị thêm'             
    };
}



