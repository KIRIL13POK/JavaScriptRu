 
 const array = [1, 4, 6];
 const array1 = [12, 4, 8, 19, 3, 15, 6, 0, 13, 5];
 const array2 = [1, 4, 6];



const hacerLaSuma = (array, num) => {
  const newArray = [];
  array.forEach(element => {
    const numQueFalta = num - element;
    newArray.push([element, numQueFalta]);
  });
  return newArray;
}


const resultado = hacerLaSuma(array, 7);
const resultado1 = hacerLaSuma(array1, 7);
console.log(resultado);
console.log(resultado1);

const hacerLaSumaMap = (array, num) => {
  const newArray = array.map(element => {
    const numQueFalta = num - element;
    return [element, numQueFalta];
  });
  return newArray;
}


const resultado2 = hacerLaSuma(array, 7);
console.log(resultado);