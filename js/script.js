
$(document).ready(function () {

    $('.header__burgerIco').click(function(event) {
        $('.header__burgerIco').toggleClass('header__burgerIco_act');
        $('.burger-fullmenu').toggleClass('burger-fullmenu_disp-none');
        // console.log('burger clicked')
        }
    )

})



// accordeon-start

let footerColumn  = document.getElementsByClassName("footer-column-ul");

// console.log(footerColumn);

for (let i = 0; i < footerColumn.length-1; i++) {
    footerColumn[i].onclick = function () {
        if (footerColumn[i].classList.contains('accordeon-footer-active')) {
            // console.log('condition1_ActiveAccordeonClassHere') ;
            let arrowVarD2R = document.querySelector('.accordeon-footer-active .footer-column__title__arrow')
            arrowVarD2R.src='img/svg/arrow-right.svg';
            footerColumn[i].classList.remove("accordeon-footer-active")

            // console.log(arrowVarD2R) ;

        } else {
            // console.log('condition2_noActiveAccordeonClassHere') ;
            for (let j = 0; j < footerColumn.length-1; j++) {
                footerColumn[j].classList.remove("accordeon-footer-active");
                // console.log('removing all active classes ')

            }
            // console.log(document.getElementsByClassName('footer-column__title__arrow'))
            let arrOfAllArrows = document.getElementsByClassName('footer-column__title__arrow')
            // console.log('arrOfAllArrows = ' + arrOfAllArrows);
            //all arrows to right
            for (let z = 0; z < arrOfAllArrows.length-1; z++) {
                arrOfAllArrows[z].src='img/svg/arrow-right.svg'
            }

            footerColumn[i].classList.add("accordeon-footer-active");
            let arrowVarR2D = document.querySelector('.accordeon-footer-active .footer-column__title__arrow')
            // console.log(arrowVarR2D) ;
            arrowVarR2D.src='img/svg/arrow-bottom.svg';

            // console.log($(footerColumn[i]).children('h3'))
            // footerColumn[i].classList.toggle('footer-column__title_underlined');


        }
    }
}
// accordeon-end


