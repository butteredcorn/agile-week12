const sort = require('../merge-sort/merge-sort').main

describe('positive test of expected default sorting behavior', () => {
    test('sort positive integers', () => {
        const input = [5,6,8,2,3,0,10]
        const output = [0, 2, 3, 5, 6, 8, 10]
        expect(sort(input)).toEqual(output)
    })

    test('sort negative integers', () => {
        const input = [0, -4, 2, -5, 3, -7]
        const output = [-7, -5, -4, 0, 2, 3]
        expect(sort(input)).toEqual(output)
    })

    test('sort lower cased strings by first letter', () => {
        const input = ['dog', 'cat', 'bird', 'lizard', 'hippo']
        const output = ['bird', 'cat', 'dog', 'hippo', 'lizard']
        expect(sort(input)).toEqual(output)
    })

    test('sort mixed cased strings by first letter', () => {
        const input = ['dog', 'cat', 'Bird', 'lizard', 'hippo']
        const output = ['Bird', 'cat', 'dog', 'hippo', 'lizard']
        expect(sort(input)).toEqual(output)
    })

    test('sort mixed numbers and strings', () => {
        const input = ['dog', 2, 'cat', 6, 'Bird', 9, 'lizard', -1, 'hippo']
        const output = [-1, 2, 6, 9, 'Bird', 'cat', 'dog', 'hippo', 'lizard']
        expect(sort(input)).toEqual(output)
    })
})

describe('positive test of options', () => {
    test('reverse sort positive integers', () => {
        const input = [5,6,8,2,3,0,10]
        const output = [10, 8, 6, 5, 3, 2, 0]
        const options = {
            allowFalseyElements: false,
            reverseSort: true,
            'handleMixedNumberAndStrings': true
        }
        expect(sort(input, options)).toEqual(output)
    })

    test('allow falsey values', () => {
        const input = [undefined, undefined, null]
        const output = [null, undefined, undefined]
        const options = {
            allowFalseyElements: true,
            reverseSort: false,
            'handleMixedNumberAndStrings': true
        }
        expect(sort(input, options)).toEqual(output)
    })

    test('disable handleMixedNumberAndStrings', () => {
        const input = ['dog', 2, 'cat', 6, 'Bird', 9, 'lizard', -1, 'hippo']
        const output = [ 'hippo', -1, 'lizard', 2, 6, 9, 'Bird', 'cat', 'dog' ]
        const options = {
            allowFalseyElements: false,
            reverseSort: false,
            'handleMixedNumberAndStrings': false
        }
        expect(sort(input, options)).toEqual(output)
    })
})

describe('test errors handled appropriately', () => {
    test('input must be array', () => {
        const input = "some string"
        expect(() => {
            sort(input)
        }).toThrowError(`Your input must be of type: Array. It was ${input}.`)
    })

    test('falsey values throw by default', () => {
        const input = [1, 2, null]
        expect(() => {
            sort(input)
        }).toThrowError(`Falsey value "${null}" detected at ${input.indexOf(null)}. To enable sorting with falsey values, please set options.allowFalseyElements to true.`)
    })
})