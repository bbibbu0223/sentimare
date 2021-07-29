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

        const header = document.querySelector('header');
        const headerHeight = header.getBoundingClientRect().height;

        window.addEventListener("scroll",function(){
            if (window.scrollY > headerHeight) {
                header.setAttribute("style", "background: #292f4e;");
                header.style.zIndex = "1";  
            } else {
            header.setAttribute("style", "background: transparent;");
            header.style.zIndex = "1";  
            }
        });

        
    }

    
});



