let arr = [6, 3, 0, 30, 7, '', 25, 0, undefined,];
function countTruthy(arr) {
    let truthy = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number" && arr[i] > 0) {
            truthy.push(arr[i]);
        }
    }
    return truthy.length;

}
console.log(countTruthy(arr));
module.exports = countTruthy