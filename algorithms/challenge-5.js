let arr = [1, 2, 'aasf', '1', '123', 123];
function filterList(arr) {
    let digitArray = [];
    for (const item of arr) {
        if (typeof item === "number") {
            digitArray.push(item);
        }
    }
    return digitArray;


}
console.log(filterList(arr))

module.exports = filterList