
//merge sort - worst case bigO = nlog(n)
const mergeSort = (array) => {

    //check if array can be split or not
    if(array.length < 2) {
        return array
    }

    //find the middle, so we can find the left and right indices
    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle, array.length)

    //console.log(`split: left: ${left}, right: ${right}`)

    //use recursion until array.length is less than 2, then return the array
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    const result = []

    //while both the left array and the right array are not empty:
    while(left.length && right.length) {
        //find the lower value
        if(left[0] <= right[0]) {
            //The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    //merge left array
    while(left.length) {
        result.push(left.shift())
    }
    
    //merge right away
    while(right.length) {
        result.push(right.shift())
    }
    //console.log(`result: ${result}`)
    return result
}

const defaultOptions = {
    allowFalseyElements: false,
    reverseSort: false
}

const main = (input, options = defaultOptions) => {
    //check if input is an array
    if (!input || !Array.isArray(input)) {
        throw new Error(`Your input must be of type: Array. It was ${input}.`)
    } else {
        //check options
        if(!options.allowFalseyElements) {
            for(element of input) {
                if(!element && element != 0) {
                    throw new Error(`Falsey value "${element}" detected at ${input.indexOf(element)}. To enable sorting with falsey values, please set options.allowFalseyElements to true.`)
                }
            }
        }

        if(options.reverseSort) {
            return (mergeSort(input)).reverse()
        }

        return mergeSort(input)
    }
}

module.exports = {
    main
}