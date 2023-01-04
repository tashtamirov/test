const namesArr = ['Usman', 'Maga', 'Islam', 'Larissa', 'Olya',]

const arr = [4, 454, -34, 23, 23, 0, -54, -1, 333]
const arr2 = [4, 454, 34, 23, 23, 0, 54, 1, 333]

// const isPalindrome = (word) => {
//     let result = ''
    
//     let lowerWord = word.toLowerCase()
    
//     for (let i = lowerWord.length - 1; i >= 0; i--) {
//         result += lowerWord[i]
//     }
//     return word === result
// }
// console.log(isPalindrome('доход'))


const isPalindrome3 = (word) => {
    let result = ''

    for (let i = word.length -1; i >= 0; i--) {
        result += word[i]
    }
    return result 

}
console.log(isPalindrome3('доход'))











const reverseText = (text) => {
let result = ''
let splitedText = text.split('')
    for (let i = splitedText.length - 1; i >= 0; i--) {
        result += splitedText[i]
    }
    return result
}
console.log(reverseText('Привет мир'))








const rep = (text, num) => {
        
    let result = ''
  
        result = text.repeat(num)
        
        return result
}

console.log(rep('интукод', 3))