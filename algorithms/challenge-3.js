let arr =['3', 10, 6, 0, '5', 8, 5, '6', 2,'0']
function sumMix(arr) {
    let num = []

    let convertedletter = []

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "number") {
            num.push(arr[i]);
        } else {
            convertedletter.push(parseInt(arr[i],10))
        }
    }
    let totallist = [...num, ...convertedletter];
    return totallist.reduce((a, b) => a + b);
}
console.log(sumMix(arr));


module.exports = sumMix



