/*
El evento DOMContentLoaded se activa cuando el documento HTML inicial se ha cargado y analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los subtramas terminen de cargarse. Un evento diferente, load, debe usarse solo para detectar una página completamente cargada.
*/
window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsConten = document.querySelectorAll('.tabcontainer'),
        tabsPapa = document.querySelector('.tabheader__items');

    console.log(tabs);
    console.log(tabsConten);
    console.log( tabsPapa);

    function ocultartTabContent(){
        tabsConten.forEach( item => {
            item.style.display = 'none';
        });

        tabs.forEach( item => {
            item.classList.remove('tabheader__item_active');

        });
    }

    function mostrarTabConten(i = 0){
        tabsConten[i].style.display  = 'block';
        tabs[i].classList.add('tabheader__item_active');

    }

    ocultartTabContent();
    mostrarTabConten()









});