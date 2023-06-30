
function map(array, callBack) {
    let resultantArray = []
    for (let element of array) {
        let result = callBack(element)
        resultantArray.push(result)
    }

    return resultantArray;
}

function filter(array, callBack) {
    let resultantArray = []
    for (let element of array) {
        if (callBack(element)) {
            resultantArray.push(element)
        }
    }
    return resultantArray;
}

function reduce(array, callBack, intialValue = 0) {
    let result = array[0]
    let i = 1;
    if (intialValue != 0) {
        result = intialValue
        i = 0;
    }
    for (; i < array.length; i++) {
        result = callBack(result, array[i])
    }

    return result
}


function forEach(array, callBack) {
    for (let element of array) {
        callBack(element)
    }
    return
}



let array = [1, 2, 3, 4, 5]

const multiplyByTwo = (e) => e * 2

let mapResult = map(array, multiplyByTwo)
// console.log(...mapResult)

const greaterThanTwo = (e) => e > 2

let filterResult = filter(array, greaterThanTwo)
// console.log(...filterResult)
const arraySum = (accumulator, element) => accumulator += element

reduceResult = reduce(array, arraySum)
// console.log(reduceResult)

const printArrayElements = e => console.log(e)
forEach(array, printArrayElements)