let body = document.body;
console.log(body)

//Свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки.
//console.log(body.innerHTML)
//Свойство innerHTML есть только у узлов-элементов.

let logo = document.querySelector('.header__logo');
console.log(logo.innerHTML)
//Свойство outerHTML содержит HTML элемента целиком. Это как innerHTML плюс сам элемент.
// logo.outerHTML = '<p>Новый элемент</p>'

console.log(logo.hiden)
console.log(logo.outerHTML)


//nodeValue/data: содержимое текстового узла
let menuList = document.querySelector('UL');
console.log(menuList)
console.log(menuList.children)
let childrenOfMenuList =Array.from(menuList.children)
console.log(childrenOfMenuList);
console.log(childrenOfMenuList[0].textContent)
console.log(childrenOfMenuList[0].innerHTML)
console.log(childrenOfMenuList[0].outerHTML)

let genero = document.querySelector('.promo__genre')
console.log(genero)
console.log(genero.innerHTML)
console.log(genero.textContent)
console.log(genero.outerHTML)
