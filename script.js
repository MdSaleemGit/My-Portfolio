const openbtn = document.querySelector('.open_btn');
const closebtn = document.querySelector('.close_btn');
const wraps = document.querySelectorAll('.wrap');
const my_divs = document.querySelectorAll('.my_divs');


openbtn.addEventListener('click',function(){
    for (let index = 0; index < wraps.length; index++) {
        wraps[index].classList.add('visible');
        
    }
        for (let index = 0; index < my_divs.length; index++) {
        my_divs[index].classList.add('expand');
        
    }
})

closebtn.addEventListener('click',function(){
    for (let index = 0; index < wraps.length; index++) {
        wraps[index].classList.remove('visible');
        
    }

            for (let index = 0; index < my_divs.length; index++) {
        my_divs[index].classList.remove('expand');
        
    }
})



// *************************************************************

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');


let arrow1 = document.querySelector('#arrow1');
let arrow2 = document.querySelector('#arrow2');
let arrow3 = document.querySelector('#arrow3');
let arrow4 = document.querySelector('#arrow4');

arrow1.addEventListener('click',function(){
    btn1.click();
})

arrow2.addEventListener('click',function(){
    btn2.click();
})

arrow3.addEventListener('click',function(){
    btn3.click();
})

arrow4.addEventListener('click',function(){
    btn4.click();
})
