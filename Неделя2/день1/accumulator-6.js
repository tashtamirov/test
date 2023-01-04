const array = [1, 3, 45, 54, 22, 5, 3, 8, 19, 4]

let accumulatorOdd = []

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        accumulatorOdd.push(array[i])
    }
}
console.log(accumulatorOdd)