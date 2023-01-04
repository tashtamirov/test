// Пример суммы нечетных чисел 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2]

const oddNums = (array) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            result = result + array[i]
        }
    }
return result 
}
console.log(oddNums(array))




// Пример сколько раз повторяется число в массиве
const numRepeats = (array, num, numReps) => {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            count += 1
        }
    }
    return count === numReps

}
console.log(numRepeats(array, 3, 1))


// Пример счетчика от 100 до 0
const from100toZero = (num) => {

    for (let i = 100; i >= num; i--) {
        console.log(i)
    }
    console.log('finished!')
}
from100toZero(0)



// Пример соотвествия длины слова указанному числу 

const namesArray = ['Usman', 'Yan', 'Deni', 'Don', 'Larisa', 'Mubarik', 'Maga', 'Magomed']

const nameLength = (namesArray, number) => {
    let newNamesArray = []
        for (i = 0; i < namesArray.length; i++) {
            if (namesArray[i].length <= number) {
                newNamesArray += namesArray[i] 
            }
        }
        return newNamesArray

}
console.log(nameLength(namesArray, 4))




// Пример: есть ли в тексте элемент массива

const ifHasAWord = (namesArray, text) => {

    for (let i = 0; i < namesArray.length; i++) {
        if (text.includes(namesArray[i])) {
            return true
        }
    }
    return false
}
console.log(ifHasAWord(namesArray, 'Usman чемпион ufc!'))





// Пример: сколько слов в тексте SPLIIIIIIIIIIIT

// const wordsLength = (text, num) => {
    
    
//     let wordsSum = text.split(' ')
//     let cutedWordsSum = text.split(' ', 3)
//     if (wordsSum.length <= num) {
//             return wordsSum
//         } 
//         return `${cutedWordsSum}...`
    
    
// }
// console.log(wordsLength('Я как выяснилось люблю писать на джава!', 3))





// Пример наибольшего и наименьшего числа


const minMaxArray = [2324, 4, 2, 545, 343, 6565, 32, 43, 3432, 342, 123, 231]

const minMax = (minMaxArray) => {
    let min = minMaxArray[0]
    let max = minMaxArray[0]
  
        for (let i = 0; i < minMaxArray.length; i++) {
            if(minMaxArray[i] < min) {
                min = minMaxArray[i] 
            } else if (
                minMaxArray[i] > max
            ) {max = minMaxArray[i]}
        }
        return [min, max]
      
}
console.log(minMax(minMaxArray))




const deleteZero = [3, 0, 6, 0, 5]

const deleteAllZero = (deleteZero) => {
    let newDeleteZero = []
    for (let i = 0; i < deleteZero.length; i++) {
    if (deleteZero[i] !== 0) {
        newDeleteZero += [deleteZero[i]]
    }
}
    return newDeleteZero
}
console.log(deleteAllZero(deleteZero))




// Пример вычисления среднего значения чисел в массиве

const findMidNum = (array) => {
    
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    return result/array.length
}
console.log(findMidNum(array))






// Удали все элементы 'remove' из массива
const remove = ['remove', 'move', 'go', 'remove']

const deleteRemove = (remove) => {

    let newRemove = []
    for (let i = 0; i <remove.length; i++) {
        if (remove[i] !== 'remove') {
            newRemove += remove[i]
        }
    }
    return newRemove
}
console.log(deleteRemove(remove))


// верни новый массив только с положительными числами

const  negNums = [-3, 0, 6, -1, 5]

const delNegNums = (negNums) => {

    let withoutNegNums = []
    for (let i = 0; i < negNums.length; i++) {
        if (negNums[i] >= 0) {
            withoutNegNums += negNums[i]
        }
    }
    return withoutNegNums
}
console.log(delNegNums(negNums))




// Верни сумму всех чисел массива
const sumArr = [4, 6, 2, 4, 8]
const sumNums = (sumArr) => {

    let sum = 0
    for (let i = 0; i < sumArr.length; i++) {
        sum += sumArr[i]
    } 
    return sum
}
console.log(sumNums(sumArr))





// Верни минимальное число массива
const arrMinNum = (sumArr) => {
    let min = sumArr[0]
    for (let i = 0; i <sumArr.length; i++) {
        if (sumArr[i] < min) {
            min = sumArr[i]
        }
    }
    return min
}
console.log(arrMinNum(sumArr))






// Верни массив, в котором слова меньше 3 букв
const wordLength = (remove) => {

    let newRemoveArr = []
    for (let i = 0; i < remove.length; i++) {
        if (remove[i].length <= 4) {
            newRemoveArr += remove[i]
        }
    }
    return newRemoveArr
}
console.log(wordLength(remove))




// Есть ли в строке слово 'intocode'
const isIncludeIntocode = (text) => {

    for (let i = 0; i < text.length; i++) {
        if (text.includes('intocode')) {
            return true
        } 
    } 
    return false
}
console.log(isIncludeIntocode('здесь нет такого слова'))




// Принимает два аргумента x и n, 
//и возвращает массив n чисел кратных x
const nMultipleX = (n, x) => {

    let ArrNMultipleX = []
    
    if (n % x === 0) {
        ArrNMultipleX += n
    }
    return ArrNMultipleX
}
console.log(nMultipleX(8, 2)) //=> 8




// Возведение в степень
const poww = (a, b) => a ** b
console.log(poww(5, 2))



// Перевернуть строку
const returnWord = (text) => {
    const reversedWord = text.split('').reverse().join('')
return reversedWord
} 
console.log(returnWord('я люблю писать на джаве!'))



// Удали самое длинное и самое короткое слово из массива 

const minMAxWords = ['Джаваскрипт', 'программирование', 'ноут', 'экран', 'код',]

const deleteMinMaxWords = (minMAxWords) => {

    let min = minMAxWords[0]
    let max = minMAxWords[0]
    let result = []

    for(let i = 0; i < minMAxWords.length; i++) {
        if (minMAxWords[i].length < min.length) {
            min = minMAxWords[i]
        } else if (minMAxWords[i].length > max.length) {
            max = minMAxWords[i]
        } 
    }
    for (let i = 0; i < minMAxWords.length; i++) {
        if (minMAxWords[i] !== min && minMAxWords[i] !== max) {
            result = result + minMAxWords[i]
        }
    }
    return result
}
console.log(deleteMinMaxWords(minMAxWords))






// Пример проверки функцией является ли слово палиндромом
const isPalindrome = (x) => {
    x = x.toLowerCase()
        y = ''
        for (let i = x.length - 1; i >= 0; i-- ) {
            y = y + x[i].toLowerCase()
        }
        return y === x ? true : false    
}
console.log(isPalindrome('доход'))



//ВЕРСИЯ 2


const isPalindrome2 = (word) => {
    const goodWord = word.toLowerCase()
    return goodWord === reverse(goodWord)
}





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






// СЧЕТЧИК ОТ 0 ДО 100 (ШАГ 3)

const cikl = (num) => {

    for (let i = 0; i < num; i += 3) {
        console.log(i)
}
    }
cikl(100)





// СЧЕТЧИК ОТ 100 ДО 0 (ШАГ 3)


const cikl2 = (num) => {

    for (let i = 100; i > num; i - 3) {
        console.log(i)
    
    }
}
cikl2(0)





// ПРИМЕР ФИО


const fioooo = (nameee, lastnameee, surnameee) => {
    let result = ''
    nameee = nameee.slice(0, 1)
    surnameee = surnameee.slice(0, 1)
    result = `${lastnameee} ${nameee}. ${surnameee}.`

    return result 
}
console.log(fioooo('Усман', 'Таштамиров', 'Алиевич' ))



// Равны ли суммы двух массивов

const arrayy = [1, 3, 4, 5, 6, 7, 8, 9, 45, 36]

const arrayy2 = [1, 3, 4, 5, 6, 7, 8, 9, 45, 36]

const arraysSum = (arrayy, arrayy2) => {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < arrayy.length; i++) {
        sum1 += arrayy[i]
    }
    for (let i = 0; i < arrayy2.length; i++) {
        sum2 += arrayy[i]
    }
    return sum1 === sum2
}

console.log(arraysSum(arrayy, arrayy2))



// ПЕРЕВЕРНУТЬ СТРОКУ ИЛИ СЛОВА В ОБРАТНОМ ПОРЯДКЕ ЧЕРЕЗ ЦИКЛ


const reverseWord = (text) => {
    let newText = ''
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i]
    }
    console.log(newText)
}
reverseWord('я сдаю экзамен по js в интукод') //=>

//=>докутни в sj оп немазкэ юадс я 

