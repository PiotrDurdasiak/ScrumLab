document.addEventListener("DOMContentLoaded",function(){
    let prev = document.querySelectorAll('.carousel_bnt_sign')[0];
    let next = document.querySelectorAll('.carousel_bnt_sign')[1];
    let screens = document.querySelectorAll('.carousel_screen_element');
    let index = 0;

    screens[index].classList.add('visible');

    prev.addEventListener('click',function(){
        screens[index].classList.remove('visible');
        index -= 1;
        if (index<0){
            index=screens.length - 1;
        }
        screens[index].classList.add('visible');
    });

    next.addEventListener('click',function(){
        screens[index].classList.remove('visible');
        index += 1;
        if (index >= screens.length){
            index=0;
        }
        screens[index].classList.add('visible');
    });
});
