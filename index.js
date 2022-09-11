'use strict';

{
    const bargarOpen = document.getElementById(('bargar-open'));
    const overlay = document.querySelector('.overlay');
    const bargarClose = document.getElementById('bargar-close')

    bargarOpen.addEventListener('click', () => {
        overlay.classList.add('show');
        bargarOpen.classList.add('hide');
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
}