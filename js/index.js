'use strict';

{
    const bargarOpen = document.getElementById(('bargar-open'));
    const overlay = document.querySelector('.overlay');
    const bargarClose = document.getElementById('bargar-close')

    bargarOpen.addEventListener('click', () => {
        overlay.classList.add('show');
        bargarOpen.classList.add('hide');
        console.log("hello");
    });

    bargarClose.addEventListener('click', () => {
        overlay.classList.remove('show');
        bargarOpen.classList.remove('hide');
    });


    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', () => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
    });


    const menuItems = document.querySelectorAll('.menu li a');
    const contents = document.querySelectorAll('.content');

    menuItems.forEach(clickedItem => {
        clickedItem.addEventListener('click', e => {
            e.preventDefault();

            menuItems.forEach(item => {
                item.classList.remove('active')
            })
            clickedItem.classList.add('active');


            contents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(clickedItem.dataset.id).classList.add('active');
        });
    });



    const dts = document.querySelectorAll('dt');
    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.parentNode.classList.toggle('appear');

            dts.forEach(el => {
               if (dt !== el) {
                el.parentNode.classList.remove('appear');
               } 
            });
        });
    });
}