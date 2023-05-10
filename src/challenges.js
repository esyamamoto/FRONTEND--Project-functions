// Desafio 1 - Crie a função compareTrue
function compareTrue(animal1, animal2) {
  return animal1 && animal2;
}
const girafa = true;
const elefante = true;
const macaco = false;

console.log(compareTrue(elefante, girafa));
console.log(compareTrue(girafa, macaco));
console.log(compareTrue(girafa, elefante));
console.log(compareTrue(elefante, macaco));

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => {
  return string.split(' ');
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete não tem ré'));

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  let primeiraPalavra = array[0];
  let ultimaPalavra = array[array.length - 1];

  return `${ultimaPalavra}, ${primeiraPalavra}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let maiorNumero = array[0];
  let contador = 0;

  for (const number of array) {
    if (number > maiorNumero) {
      maiorNumero = number;
      contador = 1;
    } else if (number === maiorNumero) {
      contador += 1;
    }
  }

  return contador;
};
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  return (base * height) / 2;
}
function calcRectangleArea(base, height) {
  return base * height;
}
function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}
console.log(calcAllAreas(10, 50, 'retângulo'));
console.log(calcAllAreas(10, 50, 'quadrado'));
console.log(calcAllAreas(10, 50, 'triângulo'));

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => array.map((item) => {
  if (item % 3 && item % 5 === 0) {
    return 'fizzBuzz';
  } if (item % 3 === 0) {
    return 'fizz';
  } if (item % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
});

// Desafio 9 - Crie a função encode e a função decode
function encode(stringEn) {
  const newStringEn = stringEn.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return newStringEn;
}
const fraseEncode = 'hi there!';
console.log(encode(fraseEncode)); 

function decode(stringDec) {
  const newStringDec = stringDec.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return newStringDec;
}
const fraseDecode = 'h3 th2r2!';
console.log(decode(fraseDecode));

// Desafio 10 - Crie a função techList


// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
