$(function(){
    
    $('header').load('inc.html header > div',nav);
    $('footer').load('inc.html footer > div');

    function nav(){
        const menuIc = document.querySelector('.menu_trigger');
        const menu = document.querySelector('nav > div');
            menuIc.addEventListener('click',function(){
            menuIc.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
});



