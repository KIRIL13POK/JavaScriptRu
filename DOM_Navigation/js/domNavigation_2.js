// Самый универсальный метод поиска – это elem.querySelectorAll(css), он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.
let content = document.querySelector('.promo__content');
console.log(content);

//let hijosContent = Array.from(body.childNodes);
let hijosContent = Array.from(content.children);
console.log(hijosContent);

console.log(hijosContent[0].classList);
hijosContent[0].classList.add('wasUPNiGGaa');

let contentMenu = document.querySelector('.promo__menu');
console.log(contentMenu);


//Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elem CSS-селектору, и возвращает true или false.
console.log(hijosContent[0].matches('.promo__interactive'));
console.log(hijosContent[0].matches('.promo__bg'));
console.log(hijosContent[1].matches('.promo__menu'));

//Метод elem.closest(css) ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.
console.log(hijosContent[0].closest('.promo__bg'));//-->div.promo__bg.wasUPNiGGaa
console.log(hijosContent[0].closest('.promo__menu'));//-->null( no es su Descendientes, es su vesicino)
console.log(hijosContent[0].closest('.promo'));// --> main.promo


/*

    1)elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию. Передав "*" вместо тега, можно получить всех потомков.
    2)elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс.
    3)document.getElementsByName(name) возвращает элементы с заданным атрибутом name. Очень редко используется.


*/

console.log(content.getElementsByTagName('*'));
let arrayDeTodosLosDescendientesDeContent = Array.from(content.getElementsByTagName('*'));
console.log(arrayDeTodosLosDescendientesDeContent);

for(let descendiente of arrayDeTodosLosDescendientesDeContent ){
    console.log(`probando JS ${descendiente}`);

}










    
