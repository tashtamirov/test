// 1. Переменные 
let name = 'usman';
let lastNmae = 'Tashtamirov'
let age = 28
age = 29
console.log(age)
const _ = 'private' // наз-м пер. может быть символ
const $ = 'some money' // это пример символа
const withNau5 = 5 // могут быть и цифры 
// const 5withnum = 5 // но не в начале, - error

// 2. Мутирование
// console.log('Имя человека: ' + name + ', а возраст человека: ' +  age)
// alert('Имя человека: ' + name + ', а возраст человека: ' +  age) 

// 3. Экранирование 
// Обратный слэш - \

console.log("Dragon's mother said \"No\"")
// console.log("Death is \so terribly final");
// => Death is so terribly final. В этом случае обратный слэш не выводится. 
// Нужно вывести обратный слэш? Экранируй его самим собой. \\ => \

// Перевод строки \n
/* \n переводит строку вниз как enter.Чтобы вывести \n в 
консоль экраниурем \\n. Пример: console.log('Privet!' + '\n' + 'kak ty?')*/

//console.log('Gregor Clegane\nDunsen\nPolliver\nChiswyck')
// На экран выведется:
/*Gregor Clegane
Dunsen
Polliver
Chiswyck*/


//Кодировка / Двоичный код. Цифры в буквы и символы
// Таблица кодов ASCII

console.log(String.fromCharCode(126))
console.log(String.fromCharCode(94))
console.log(String.fromCharCode(37))

let greeting = 'mother'
console.log(greeting)
greeting = 'father'
console.log(greeting)

// КОНКАТЕНАЦИЯ - склеивание строк 

// Выражения в определениях 
let dollarCount = 50 * 1.25
console.log(dollarCount)
let who = "dragon's" + ' mother'
console.log(who)

let rublesPerDollar = 60
let dollarsCount = 50 * 1.25 // > 62.5
let rublesCount = dollarCount * rublesPerDollar // 3750
console.log('The price is ' + rublesCount + ' rubles')

let eurosCount = 100
let dollarCoun = 100 * 1.25
let rublesCoun = (dollarCoun) * 60
console.log(rublesCount)

let king = 'King Balon the 6th'
let newCastleRooms = 6
let oldCastlesRooms = 17
let totalRooms = 102

console.log(king + ' has ' + totalRooms + ' rooms.') // => King Balon the 6th has 102 rooms.

// ИНТЕРПОЛЯЦИЯ 
//console.log(`${greeting}, ${firstName}!`)
// => 'Hello, Joffrey!'

const temp = `"we don't smoke weed"`
console.log(temp)

const buc = 'weed'
const total = `we don't smoke ${buc}`

console.log(total)

// ИЗВЛЕЧЕНИЕ СИМВОЛОВ ИЗ СТРОКИ
const magic = '\nyou'
console.log(magic[1]) //=> y. Потому что /n считается символом. 
//Первый символ в слове интерпретатор считает за цифру 0.

const max = 'comp'
console.log(max[1]) //=> буква о. 0 = c. 1 = o. 2 = m. 3 = p.
//Цифра называется индексом — позицией символа внутри строки и вносится в квадратные скобки

const firstName2 = 'Tirion'
const index = 0
console.log(firstName2[index]) //=> T

// Неизменяемость примитивных типов - название 32 главы
const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`) //=> hodor

// console.log - это функция (встроенная)
/*Параметры (или аргументы) — это информация, которую функция получает при вызове. 
Именно на основе этой информации функция, как правило, 
вычисляет что-то и выдает результат (то, что в скобках)*/

// ФУНКЦИЯ length - считает количество символов параметра функции
/*
const company1 = 'Apple'
const company2 = 'Samsung'

const result = length(company1 + company2)

console.log(result) => 12 - количество символов слов 
'apple' и 'samsung'  */

/* Математические функции

console.log(Math.abs(-2309)) =>2309

Эта функция - Math.abs() - возвращает абсолютное значение переданного числа. 
Абсолютное значения числа — это само это число без знака 
(например, минуса) перед ним.

Math.abs(-3); // 3
Math.abs(3); // 3
Math.abs(0); // 0
*/

/* ФУНКЦИЯ Math.ceil() 
The Math.ceil() function always rounds a number 
up to the next largest integer. 

Пример:
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7 */

const result = Math.ceil(923.2238)
console.log(result) //=> 924

/* const result = round(10.25, 0); // 10
Функция round() - аналогична math.ceil()  */

/* ВЫЗОВ ФУНКЦИИ - ВЫРАЖЕНИЕ

const text = 'Never forget what you are, for surely the world will not'
const result = (`First: ${text[0]}\nLast: ${text [length(text) - 1]}`)

console.log(result) => 
First: N
Last: t   */


console.log(Math.min(3, 10, 22, -3, 0)) //=> -3


/*Оператор typeof позволяет определить тип передаваемого операнда. 
Название типа возвращается в виде строки. 
Например, вызов typeof 'go go go' вернёт строку 'string' (number — число).

console.log(typeof 3); // => 'number'
*/

// УСЛОВНЫЕ ОПЕРАТОРЫ
const courseStatus = 'pending' // может быть: fail / pending / ready


if(courseStatus === 'ready') {
console.log('Курс уже готов. Его можно проходить.')
}

if(courseStatus === 'pending'){
    console.log('Курс пока находится в процессе разработки.')
}

//МЕТОДЫ 

const name1 = 'Robb'
const upperName = name1.toUpperCase()
console.log(upperName) /*=> ROBB - все буквы стали большими.

Метод .toUpperCase() возвращает ту же строку, 
но преобразуя все символы в верхний регистр. */


// Методы есть и у чисел:
const temperature = 22.93
// Округление до одного знака после точки 
const roundedTemperature = temperature.toFixed(1)
// Метод возвращает строку, которая содержит преобразованное число
console.log(roundedTemperature); // => '22.9'
// Напрямую можно вызывать так:
// Скобки нужны обязательно, иначе не заработает
(22.93).toFixed(1) // '22.9'

const text = 'When \t\n you play a \t\n game of thrones you win or you die.'
console.log(text.slice(4, 16)) 





