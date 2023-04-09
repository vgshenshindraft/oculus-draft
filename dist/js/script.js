"use strict";

const wrapperButtons = document.querySelector('.tabs__btn');
const btns = document.querySelectorAll('.tabs__btn-item');
const contents = document.querySelectorAll('.tabs__content-item');

const toggleBtn = () => {
    wrapperButtons.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName == 'BUTTON') {
            btns.forEach(btn => {
                btn.classList.remove('tabs__btn-item-active');
            });

            e.target.classList.add('tabs__btn-item-active');

            contents.forEach(cont => {
                cont.classList.remove('tabs__content-item-active');
            //     if (e.target.getAttribute('data-button') == cont.id) {
            //         cont.classList.add('tabs__content-item-active');
            //     }
            });
            const dataAtr = e.target.getAttribute('data-button');
            document.querySelector(`#${dataAtr}`).classList.add('tabs__content-item-active');


        }
    });
}

toggleBtn();

// burger menu

const burgerMenu = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

const toggleBurgerMenu = () => {
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
    });
}

toggleBurgerMenu();