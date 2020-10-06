document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");

    var hamburgers = document.querySelectorAll('.menu-hamburger');
    var menuMobile = document.querySelector(".nav-primary-mobile");

    for(let i = 0; i < hamburgers.length; i++ ){
        var hamburgers =  hamburgers[i];
        hamburgers.addEventListener('click', openMenu);
    }


    function openMenu(evt) {
        console.log('click');
        evt.preventDefault();

        var cible = evt.currentTarget;


        if(cible.classList.contains('open')){
            cible.classList.remove('open');
        } else {
            cible.classList.add("open");
        }

    }





});