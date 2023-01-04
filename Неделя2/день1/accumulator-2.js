const array = [1, 3, -4, -2, 4, -5, 3, 7, 9, 1]

let accumulator = 0

let i = 0
while (i < array.length) {
    if (array[i] > 0) {
        accumulator += array[i]
        console.log(accumulator)
    }
    i++
}