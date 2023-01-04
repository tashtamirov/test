
const array = [1, 3, 4, 2, 4, 5, 3, 7, 9, 1]

let accumulator = 0

for (let i = 0; i < array.length; i++) {
    accumulator += array[i] 
    console.log(accumulator)
}