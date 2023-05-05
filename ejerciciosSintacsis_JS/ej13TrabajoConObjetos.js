/*(*) Продвинутая задача на работу с объектами и массивами.

Задача:

У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. 

Но эта задача содержит несколько подзадач внутри:

- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

- определение того, хватает ли бюджета на оплату такого объема;

- все числа идут без единиц измерения для упрощения, просто цифры и все;

- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

********************************/
"use strict";
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 8,
            length: 10
        },
        {
            width: 8,
            length: 10
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 700000
}
//1)
function isBudgetEnough(mainObject) {
    let square = 0;
    let volume = 0;

    mainObject.shops.forEach(shop => {
        console.log(shop); //Aqui puedo ver todos los objetos.
        square += shop.width * shop.length; //Aqui calculo areas de cada shop
        console.log(`${square}\n`); // Me muestra una por una.
    });
    volume += mainObject.height * square // Aqui calculo el volumen.NO ENTIENDO PORQUE EN ESTE CASO square YA ES LA SUMA DE TODOS.
    console.log(`${volume}`); //Aqui puedo ver volumen de todas las tiendas.
    if (mainObject.budget - (mainObject.moneyPer1m3 * volume) >= 0) {
        console.log("Бюджета достаточно");
    } else {
        console.log("Бюджета не достаточно");
    }
    console.log(mainObject.moneyPer1m3 * volume);
    console.log(mainObject.budget);

};
isBudgetEnough(shoppingMallData);
//2)
function calculoDePresupesto(datosDeTodasTiendas) {
    let area = 0;
    let volumen = 0;
    let gastos = 0;//Aqui añadi una variable, me preguntaba si esto no es aconsejable, por hacerlo mas pesado y etc.

    datosDeTodasTiendas.shops.forEach(function (datosPorTineda) {
        area += datosPorTineda.width * datosPorTineda.length;
    })
    volumen += area * datosDeTodasTiendas.height;
    gastos += volumen * datosDeTodasTiendas.moneyPer1m3;
    console.log(`${gastos}`);
    if (datosDeTodasTiendas.budget - gastos >= 0) {
        console.log(`Sus gastos en es este momento son ${gastos} y no superan su presupuesto.`);
    } else {
        console.log(`Sus gastos en es este momento son ${gastos} y ya superan su presupuesto.`);
    }
};
calculoDePresupesto(shoppingMallData);


