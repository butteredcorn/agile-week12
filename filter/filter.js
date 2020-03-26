//for of - iterate over the values in an iterable (like an array)
//for in - iterate over the properties of an object (object keys... if you use an array, you'll obviously get the index)

const filter = (urlArray, searchTerm) => {

    if (!searchTerm || searchTerm == "") {
        throw new Error("search term cannot be empty")
    } else if (!urlArray || urlArray.length == 0) {
        throw new Error("input cannot be empty")
    }

    const result = []
    for (obj of urlArray) {
        console.log(obj)
        if (obj.url.includes(searchTerm.toLowerCase())) {
            result.push(obj)
        }
    }
    return result

        // //alternative implementation
        // return urlArray.filter(function(element) {
        //     return element.url.toLowerCase().includes(searchTerm.toLowerCase())
        // })


}

module.exports = filter
