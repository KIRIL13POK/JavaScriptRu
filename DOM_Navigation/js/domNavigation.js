let body = document.body;
console.log(body);

//Дети: childNodes, firstChild, lastChild.
console.log(body.childNodes);//-->NodeList(6) [text, header.header, text, main.promo, text, script]0: text1: header.header2: text3: main.promo4: text5: script6: textlength: 7[[Prototype]]: NodeList 
console.log(body.firstChild);//-->#text
console.log(body.lastChild);//-->script


//Для проверки наличия дочерних узлов существует также специальная функция elem.hasChildNodes().
console.log(body.hasChildNodes());//-->true

//Для перебора коллекции мы можем использовать for..of:
for( let node of body.childNodes){
    console.log(node);
};


// Если нам хочется использовать именно методы массива, то мы можем создать настоящий массив из коллекции, используя Array.from:
let arr = Array.from(body.childNodes);
console.log(arr);
for( let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//**********************Соседи и родитель **********************************
console.log(body.parentElement);
console.log(body.previousElementSibling);
console.log(body.nextElementSibling);
console.log(body.parentElement);
console.log(body.children);