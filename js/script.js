
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
            let x = footerColumn[i].querySelector('.footer-column__title');
            console.log('click'+x)
            x.classList.add("footer-column__title_underlined")
            // console.log(arrowVarD2R) ;

        } else {
            // console.log('condition2_noActiveAccordeonClassHere') ;
            for (let j = 0; j < footerColumn.length - 1; j++) {
                footerColumn[j].classList.remove("accordeon-footer-active");

                // console.log('removing all active classes ')
            }
            //to all titles add underlines start
            let y = document.querySelectorAll('.footer-column__title');
            console.log(y);
            for (let g=0; g<y.length-1;g++){
                y[g].classList.add('footer-column__title_underlined');
            }
            //to all titles add underlines end

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
            let z = footerColumn[i].querySelector('.footer-column__title_underlined');
            console.log('click'+z)
            z.classList.remove("footer-column__title_underlined")
            // console.log($(footerColumn[i]).children('h3'))
            // footerColumn[i].classList.toggle('footer-column__title_underlined');


        }
    }
}
// accordeon-end


