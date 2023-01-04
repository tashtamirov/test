const array = ['js', 'ts', 'css', 'html', 'c++', 'c#', 'java', 'python', 'PHP', 'SWIFT']

let accumulator = []

for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i])
    }
    
}
console.log(accumulator)