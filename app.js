// function greet(name) {
//     console.log('Привет', name)
// }
// greet("Лена")

// function info() {   }
// // info - это название функции. 
// // В фигурных скобках пишется код этой функции.

// let x = 'run'
// console.log(typeof x)
// function info() {
//     console.log('привет')
//     console.log('!!!')
// }
// function car(mark) {
// console.log(mark, 'лучше, чем bmw')
// }
// car('mercedes')


// function mama(name){
//     console.log(name, 'edet v Terskiy')
// }
// ('mubarik')

// const cart = (mark) => {
// console.log(mark, 'лучше, чем bmw')
// }
// cart('mercedess')


// function car(marka) {
//     console.log(marka, 'лучше, чем bmw')
// }
// car('mers')


// const showGreeting =() => {

//     const text = 'Hello, Hexlet!'
//     const string = 'Hi to you to!'
//     console.log (text + ' ' + string)

// }
// showGreeting()

// const priv = () =>{
//     console.log('Privet Bro!!')
// }
// priv()

// const saveEmail = () => {

//     const email = '    hArOn@hexlet.io'
//     const trimmedEmail = email.trim()
//     const preparedEmail = trimmedEmail.toLowerCase()
//     console.log(preparedEmail)
// }
// saveEmail()







// const greeting = () => {
// console.log('Hello Usman!')
// }
// greeting()

// function f1(x,y) {
//     let sum = (x+y)
//     return sum

// }
// f1(3,5)

// console.log(11 +3 + 5 + f1(4,6))

// const run = () => {
//     return 5

// }
// console.log(run())



// // УПРОЩЕННАЯ ЗАПИСЬ СОЗДАНИЯ ФУНКЦИИ С Retern
// // const double = (x) => x ** 2;


// const a = 21%3
// console.log(a) //=> 0 остаток 


// const isEven = (number) => number % 2 === 0;

// isEven(10); // true
// isEven(3);  // false

// const ab = 'sentence'
// const lastLetter = ab[ab.length-1]
// console.log(lastLetter)


// // СИНТАКСИС if ELSE

// const getTypeOfSentence = (sentence) => {
//     let sentenceType
//     if (sentence.endsWith('?')) {
//         sentenceType = 'Question'
//     }
// else {
//     sentenceType = 'General'
// }
// return `${sentenceType} sentence`
// }




// const normilizeURL = (adress) => {
//     if (!adress.startsWith('https://'))
//     return `'https://'${adress}`
// else {return adress}
// } 


// /* ТЕРНАРНЫЙ ОПЕРАТОР
// ПРИМЕР:

// БЫЛО:
// const getTypeOfSentence2 = (sentence) => {
//   const lastChar = sentence.slice(-1);

//   if (lastChar === '?') {
//       return 'question';
//   }
// return 'normal'

// СТАЛО:

// const getTypeOfSentence2 = (sentence) => {
//   const lastChar = sentence.slice(-1)}

//   return (lastChar === '?') ? 'question' : 'normal'
// }
// */


// // СТРЕЛОЧНЫЕ ФКНКЦИИ
// function greet (name) {
//     console.log('привет - ', name)
// }

// const arrow = (name1, age) => {
//     console.log('привет - ', name1, age)
// }
// const arrow2 = name1 => console.log('привет - ', name1)
// arrow2('Usman')

// const pow = num => num ** 2
// console.log(pow(5))

// // ПАРАМЕТРЫ ПО УМОЛЧАНИЮ
// const sum = (a = 40, b = a + 2) => a + b
// console.log(sum(41, 4))


// // МАССИВЫ
// // const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес'] // это массив

// // cars.push('Рено') // метод push() добавляет новый элемент в конец массива 
// // console.log(cars)

// // cars.unshift('Волга') // метод unshift() добавляет новый элемент в начало массива 
// // console.log(cars)

// // cars.shift() // метод shift() удаляет первый элемнт массива 
// // console.log(cars)
// // const firstCar = cars.shift() // первый удаленный элемент присвоил константе 
// // console.log(firstCar)

// // cars.pop() // удаляет последний элемент из массива 
// // console.log(cars)

// // const lastCar = cars.pop()
// //   console.log(lastCar)
// // console.log(cars) 

// // ЗАДАЧА
// // const text = "Привет, мы изучаем Javascript!"
// // console.log(text)

// // const reversedText = text.split('').reverse().join('')
// // console.log(reversedText)

// // // Перестановка местами элементов в массивах 
// // const index = cars.indexOf('БМВ') // выявили индекс элемента 
// // cars[index] = 'Porsche' // присвоили индесу другой элемент 

// // console.log(cars)

// // const people = [
// //     {name: 'Vladilen', budget: 4200},
// //     {name: 'Elena', budget: 3500},
// //     {name: 'Victoria', budget: 1700}
// // ]

// const fio = (name3, lastName3, otcheName3) => {

// }
// name3 = 'Usman'
// lastName3 = 'Tashtamirov'
// otcheName3 = 'Alievich'

// const text5 = 'Never forget what you are, for surely the world will not'
// console.log(`First: ${text5[0]} \nLast: ${text5[55]}`)

// let firstName33 = '  Grigor   \n'
// const xx = firstName33.trim()
// console.log(xx)

// const isInfant = (age) => age < 1
// console.log(isInfant(3))


// const isPensioner = (age) => {
// return age >= 60
// }
// console.log(isPensioner(76))

// const isMister = (word) => word === 'Mister'
// console.log(isMister('Mister'))


// const isInternationalPhone = (number) => {
//     const firstNum = number[0]
//   return firstNum === '+'
//   }
//   console.log(isInternationalPhone(+991))

  
  
//   const isLeapYear = (year) => {
// return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0

// }
// console.log(isLeapYear(2022))


// const isPalindrome = (word) =>{
// const lowerWord = word.toLowerCase()
// const rev = word.reverse
// return lowerWord === rev

// }
// console.log(isPalindrome('mam'))

// const isBool = (word) => {
// const a = 4
// const b = word.length

// if (a === b) {
//     return 'cool!'
// }
// return 'try again!'
// }

// console.log(isBool('papa'))


// const checkPassword = (password) => {

//     const preparedPassword = password.toLowerCase()
// const length = preparedPassword[preparedPassword.length - 1]
// if (preparedPassword > 6 && preparedPassword < 18 && length === '!')
// {
//     return 'right!'
// }
// return 'wrong!'
// }
// console.log(checkPassword('usmanddt!'))



// const carType = (mark) => {
// let carMark
// if (mark.endsWith('s')) {
//     carMark = 'mercedes'
// } else {
//     carMark = 'xlam!' }
//     return carMark
// }
// console.log(carType('sekd'))



// const normalizerUrl = (adress) => {
// const url = 'http://'
//     if (!adress.startsWith(url)) {
//     return `${url}${adress}`}
//     else {
//         return adress
//     }
// }
// console.log(normalizerUrl('codewars.com'))



// const site = (adress) => {
// const end = '.com'
// if (adress.endsWith(end)) {
//     return adress
// } else if ( !adress.endsWith('.com'))

// { return `${adress}${end}`
// }
// }
// console.log(site('codewars'))



// const getTypeOfSentence1 = (sentence) => {
//     let sentenceType
// if (sentence.endsWith('?')) {
// sentenceType = 'Question'
// } else {sentenceType = 'normal' }
// if (sentence.endsWith('!')) {
//     sentenceType = 'vosklicanie'
// }
// return `sentence is ${sentenceType}`
// }
// console.log(getTypeOfSentence1('hmm'))



// const whoIsHouseToStark = (house) => {
// let friendOrNot
// if (house === 'Karstark' || house === 'Tally') {
//     friendOrNot = 'friend'
// } else {friendOrNot = 'neutral'}
// if (house === 'Lannister' || house === 'Frey') {
//     friendOrNot = 'enemy'
// }
// return `${house} is ${friendOrNot}`
// }
// console.log(whoIsHouseToStark('Karstark'))





// const printNumbers = (lastNumber) => {
// let i = 4
//     while (i >= lastNumber) {
//         console.log(i)
//     i = i - 1 
//     }
//     console.log('finished!')
// }

// printNumbers(1)



// const wasBornYear = (year) => {
// let i = 2022
// while (i >= year) {
//     console.log(i)
//     i = i - 1
// }
// }

// wasBornYear(1993)

// const seven = (end) => {
//     let i = 7
// while ( i <= end) {
//     console.log(i)
//     i = i + 7
// }
// }
// seven(98)


// const wail = (number) => {

//     let i  = 0
//     while (i <= number) {
//         console.log(i)
//         i ++
//     }
//     console.log('finish!!!')
// }
// wail (5)




// const multiplyNumberFromRange = (start, finish) => {

//     let i = start
//     let sum = 1
//     while (i <= finish) {
//         sum = sum * i
//         i = i + 1
// }
// return sum
// }
// console.log(multiplyNumberFromRange (1,5))


// const umn = (a, b) => {

//     let i = a
//     let result = 1
//     while (i <= b) {
//         console.log(i)
//         result = result * i
//         i = i + 1
//     }
//     return result 
// }
// console.log(umn(4, 9))



// const repeat = (text, times) => {

//     let result = ''
//     let i = 1
//     while (i <= times) {
//         result = `${result}${text}`
//         i = i + 1
//     }
//     return result

// }
// console.log(repeat('hello!', 3))



// const joinNumbersFromRange = (start, finish) => {

//     let i = start
//     let sum = ''

//     while (i <= finish) {
//         sum = `${sum}${i}`
//         i = i + 1
//     }
//     return sum
// }
// console.log(joinNumbersFromRange(3,5))



// const countChars = (string, char) => {
// let i = 0
// let count = 0
// while (i <= string.length - 1) {
//     if (string[i] === char || string[i] === char.toUpperCase())
//     count = count + 1
//     i = i + 1
// }
// return count
// }
// console.log(countChars ('lettEr', 'e'))


// const even = (str) => {
//     let i = 0;
//     let result = '';
//     while (i < str.length) {
//       if (i % 2 !== 0) {
//         result = `${result}${str[i]}`;
//       }
//       i = i + 1;
//     }
  
//     return result;
//   }
//   even('balaklava')



//   const filterString = (word, symbol) => {

//     let i = 0
//     let result = ''
//     while (i <= word.length - 1) {
//         if (word[i] !== symbol.toUpperCase()) {
//             result = result + word[i]
//             i = i + 1
//         }
//         return result
//     }
//   }
//   console.log(filterString('Balaklava', 'b'))


//   const makeItFunny = (string, symbol) => {
//       let i = 0
//       let result = ''
//       while ( i <= string.length - 1) {
//           if (symbol % 3 === 0) {
//               result = result + symbol.toUpperCase()
//               i ++
//           }
//           return result 
//       }
// }
// console.log(makeItFunny('balaklava, '))


// const abc = 'Slovo'
// console.log(abc.slice(0,1))


// const fam = (lastName, name, surName) => {
// let result = ''
//     name = name.slice(0,1)
// surName = surName.slice(0,1)
// result = `${lastName} ${name}. ${surName}.`

// return result
// }
// console.log(fam('Tashtamirov', 'Usman', 'Alievich'))




// const makeItFun = (string, n) => {
// result = ''
// let i = 0
// while (i <= string.length - 1) {
//     if (i % n !== 0) {
//         result = result + string[i]
//     } else {
//         result = result + string[i].toUpperCase()
        
//     }
//        i++
// }
//     return result 
// }
// console.log(makeItFun('I like to ride', 2))


// const nik = (word, n) => {

//     let result = ''
//     let i = 0
//     while (i < word.length) {
//         if (i % n !== 0) {
//             result = result + word[i]
//         } else {
//         result = result + word[i].toUpperCase()
//     }
//         i++
    
//     }  
//     return result 
// }

// console.log(nik('usman', 3))


// const hasChar = (string, char) => {
// let i = 0
// while (i < string.length) {
// if (string[i] === char.toUpperCase()) {
//     return false
//     }
//     i = i + 1
// } 
// return true
// }

// console.log(hasChar('tashtaMirov', 'M'))


// const reverstring = (str) => {
//     let result = '';
//     for (let i = 0; i < str.length; i += 1) {
//       result = `${str[i]}${result}`;
//     }
  
//     return result;
//   };

//   console.log(reverstring('usman'))


//   const encrypt = (string) => {

//     let result = ''
//     for (let i = 0; i < string.length; i = i + 2) {
//         const nextSymbol = string[i + 1] || ''
//         result = `${result}${nextSymbol}${string[i]}`

//     }
//     return result 
//   }
//   console.log(encrypt('mama'))

//   //  ПРИМЕР!!!!!
  
    const quarterOf = (month) => {
    if (month >=1 && month < 4) {
        return 1
    } else if(month >= 4 && month < 7) {
        return 2
    } else if (month >= 7 && month < 10) {
        return 3
    } else { return 4}

// //   }
// //   console.log(quarterOf(11))
   
// //   ТОЖЕ САМОЕ ГОРАЗДО КОРОЧЕ!!!!!!!

// //   const quarterOf = (month) => {
// //     // Your code here
// //     return Math.ceil(month / 3)
// //   }
        

// function paperwork(n, m) {
    
//     return n > 0 && m > 0 ? n * m : 0
// }
// console.log(paperwork(23,-5))







// //МАССИВЫ   МАССИВЫ   МАССИВЫ    МАССИВЫ     МАССИВЫ


// const tekst = 'я изучаю, джаваскрипт'
// const reversedTekst = tekst.split('').reverse().join('')
// console.log(reversedTekst)



// const cars = ['Мазда','Форд', 'БМВ', 'Мерседес']
// console.log(cars)
// console.log(cars.indexOf('БМВ'))

// let index = cars.indexOf('БМВ')
// console.log(cars[index])
// cars[index] = 'Porsche'
// console.log(cars)

// console.log(cars.includes('Мазда'))

// let array = ['Usman', 28, 'Стрелец']
// console.log(array)

// // функция принимает два аргумента х и n, возвращает массив n чисел кратных х


// // const arr = ['at', 'song', 'intocode', 'bootcamp', 'i', 'XL']

// // const shortWords = (arr) => {
// // let  newArr = []
// //     for (i = 0; i < arr.length; i++) {
// //         if (arr[i].length < 3) {
// //             newArr = newArr + arr[i]
// //         }
// //     }
// // return newArr
// // }
// // console.log(shortWords(arr))


// // const aray = ['remove', 'keep', 'keep', 'remove', 'remove']
// // const mass = (aray) => {


// // for (i = 0; i < array.length; i++) {
// //     const newArr = []
// //     if (aray[i] !== 'remove') {
// //         console.log(newArr.push(aray[i]))
// //     }
// // }
// // }
// // console.log(mass(aray))
// // НЕ ДОРЕШАЛ    НЕ ДОРЕШАЛ     НЕ ДОРЕШАЛ     НЕ ДОРЕШАЛ     НЕ ДОРЕШАЛ      НЕ ДОРЕШАЛ


// max Как найти максимальное значение массива
// const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]


let b = [1, 2, 3, 5, 4, 43, 45, 546, 43, 23, 454]
let max = b[0]
for (let i = b[0]; i < b.length; i++) {
if (b[i] > max) {
    max = b[i]
}
}
console.log('max: ' + max)

// sum
let summa = 0
for (i = 0; i < b.length; i++) {
    summa = summa + b[i]
}
console.log('summa: ' + summa)







// // НАПИШИТЕ ФУНКЦИЮ, КОТОРАЯ ПРИНИМАЕТ МАССИВ ИЗ ЧИСЕЛ И ВОЗВРАЩАЕТ 
// //НОВЫЙ МАССИВ ИЗ ДВУХ ЧИСЕЛ: САМОГО БОЛЬШОГО И САМОГО МАЛЕНЬКОГО


// // const arrayy = [1, 2, 3, 5, 6, 7, 8, 9, 10]

// // const funct = (arrayy) => {

// //     let sum = 0
// //     for (let i = 0; i < arrayy.length; i++) {
// //         if (arrayy[i] % 2 !== 0) {
// //             sum = sum + arrayy[i]
// //         }
       
// //     }
// //     return sum
// // }
// // console.log(funct(arrayy))


// const styles = ['Джаз', 'Блюз']
// console.log(styles)
// styles.push('Рок-н-ролл')
// console.log(styles)

// let indexx = styles.indexOf('Блюз')

// console.log(indexx)
// styles[index] = 'Классика'
// console.log(styles)
// styles.shift()
// console.log(styles)
// styles.unshift('Рэп', 'Регги')
// console.log(styles)


// // let index = cars.indexOf('БМВ')
// // console.log(cars[index])
// // cars[index] = 'Porsche'
// // console.log(cars)


// const people = [
//     {name: 'Vladilen', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700}
// ]
// const iindex = people.findIndex(function (person) {
//  return person.budget === 3500
     
// })
// console.log(people[iindex])





// const swapArr = ['one', 'two', 'three']
// console.log(swapArr)

// // let index0 = swapArr.indexOf('one')
    
// //     swapArr[index0] = 'threee'
// //     swapArr[2] = 'one'
// //     console.log(swapArr)

  

// // const cars = ['Мазда','Форд', 'БМВ', 'Мерседес']
// // console.log(cars)
// // console.log(cars.indexOf('БМВ'))

// // let index = cars.indexOf('БМВ')
// // console.log(cars[index])
// // cars[index] = 'Porsche'
// // console.log(cars)



/* Напишите функцию, которая принимает на вход два массива из чисел. 
функия должна вернуть true, если сумма чисел из обоих массивов одинаковая, 
иначе функция должна вернуть false 
*/


// ПРИМЕР ДЛЯ СРАВНЕНИЯ СУММЫ 2-Х МАССИВОВ 

const array1 = [2, 4, 6, 8, 10]
const array2 = [2, 4, 6, 8, 10]

const func = (array1, array2) => {

    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < array1.length; i++) {
        sum1 = sum1 + array1[i]
    }
    for (let i = 0; i < array2.length; i++) {
        sum2 = sum2 + array2[i]
    }
    return sum1 === sum2
}
console.log(func(array1, array2))


const array3 = ['я', 'люблю', 'изучать', 'javascript']

const funct = (array3, text) => {
for (i = 0; i < array3.length; i++) {
    if (text.includes(array3[i])) {
        return true
    } else {
        return false
    }
}

}
console.log(funct(array3, 'мне нравится изучать js'))






// Возвраещние нечетных чисел массива

// const arey1 = [2,3,4,5,6]

// const areyfun = (arey1) => {
// let sum
// for (i = 0; i < arey1.length; i++) {
//     if (i % 2 !== 0) {
//         sum = sum + arey1[i]

//     }
//     return sum
// }

// }
// console.log(areyfun(arey1)) //!!!!!!! не закончил 


//ПРИМЕР 
/* только те имена, длина которых соответсвует 
указанному во втором параметре числу */

const arey2 = ['Usman', 'Deni', 'Said', 'Arthur']

const funArr = (arey2, num) => {
let sum = 0
for (i = 0; i < arey2.length; i++) {
    if (arey2[i].length < num) {
        sum = sum + arey2[i]
    }
}
return sum
}
console.log(funArr(arey2, 5))


/* Функция должна вернуть true 
если в тексте встречается хотя бы одно из указанных в массиве чисел */

// const arey3 = ['Usman', 'Deni', 'Said', 'Arthur']

// const arey4 = (arey3, text) => {
// for (i = 0; i < arey3.length; i++) {
//     if (text.includes(arey3[i])) {
//         return true
//     } else {
//         return false
//     }
// }

// }
// console.log(arey4(arey3, 'Usman учит джаваскрипт'))





// ПРИМЕР МЕТОДА SPLIT
const textLength = (text, num) => {

let preparedText = text.split(' ')

for (i= 0; i < text.length; i++) {
    if (preparedText.length <= num) {
        return text

    } else {
        return `${text.split(' ', 3)}...`

    }
}

}
console.log(textLength('я изучаю джаваскрипт !', 4))









// const arey3 = ['Usman', 'Deni', 'Said', 'Arthur']

// const arey4 = (arey3, text) => {
// for (i = 0; i < arey3.length; i++) {
//     if (text.includes(arey3[i])) {
//         return true
//     } else {
//         return false
//     }
// }

// }
// console.log(arey4(arey3, 'Usman учит джаваскрипт'))







const arey3 = ['Deni', 'Usman', 'Said', 'Arthur']

const arey4 = (arey3, text) => {
for (i = 0; i < arey3.length; i++) {
    if (text.includes(arey3[i])) {
        return true
    } 
}
return false 
}
console.log(arey4(arey3, 'Usman учит джаваскрипт'))




const massiv = [1, 3, 1, 34, 56, 443, 34, 45]

const massivFunction = (massiv, num, numRepeat) => {
let sum = 0
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] === num) {
            sum = sum + 1
        }
    }
    return sum === numRepeat
}
console.log(massivFunction(massiv, 1, 1))



// Пример для суммы все неотрицательных чисел 
const arr = [-4, 16, -6, 2, 4, -34]

const arrNumb = (arr) => {
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        sum = sum + arr[i]
    }
}
return sum
}
console.log(arrNumb(arr))



/* 2. Напиши функцию, которая принимает массив из чисел. 
Функция должна вернуть сумму всех нечетных чисел массива. */

// const arrr = [4, 16, 6, 2, 4, 3, 5, 7, 34]
// const arrr1 = (arrr) => {
//     let sum = 0
//     for (let i = 0; i < arrr.length; i++) {
//         if (arrr[i] % 2 !== 0) {
//             sum = sum + arrr[i]
//         }
//     }
//     return sum


// }

// console.log(arrr1(arrr))


// 3.  Три параметра


// const arrr22 = [ 1, 2, 2, 3, 4, 5, 6, 7, 8]
// const arrr222 = (arrr22, num, numReps) => {
// count = 0
// for ( let i = 0; i < arrr22.length; i++) {
//     if (arrr22[i] === num) {
// count = count + 1
//     }
// }
// return count === numReps
// }
// }
// console.log(arrr222(arrr22, 2, 1))


// 4. 




    }



    let num = 2
    let num2 = 3
    let result = 1
    let i = 0
    for (i = 0; i < num2; i++) {
        result = result * num
    
    }


    const pow = (a, b) => {

        return a ** b
    }
    console.log(pow(2,2))


   const squareOfSum = (a, b) => {
       return (a + b) ** 2
   }
   console.log(squareOfSum(2, 3))