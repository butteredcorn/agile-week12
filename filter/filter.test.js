const filter = require("./filter")

describe('Filter function ', () => {

    const input = [
        {id: 1, url: "https://www.url1.dev"},
        {id: 2, url: "https://www.url2.dev"},
        {id: 3, url: "https://www.link3.dev"},
    ]

    const emptyInput = []

    test("it should filter by search term", () => {
        const output = [{id: 3, url: "https://www.link3.dev"}]
        expect(filter(input, "link")).toEqual(output)

        //cases should be ignored
        expect(filter(input, "LINK")).toEqual(output)
    })

    test("throw error if search term is empty", () => {
        expect(() => {
            filter(input, "")
        }).toThrowError(Error("search term cannot be empty"))
    })

    test("throw if input is empty", () => {
        expect(() => {
            filter(emptyInput, "someUrl")
        }).toThrowError(Error("input cannot be empty"))
    })
})