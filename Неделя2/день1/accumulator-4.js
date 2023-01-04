const names = ['alvi', 'rasul', 'vaha', 'magomed', 'aslan', 'albert', 'Adam', 'Rustam', 'Kazbek']

let accumulator = []

for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith('a')) {
        accumulator.push(names[i])
    }
}
console.log(accumulator)