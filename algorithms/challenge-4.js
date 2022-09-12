let marks = [59, 80, 40, 2, 77];
function calculateGrade(marks) {
    let grades = []
    for (let gradeMarks of marks) {
        grades.push(gradeMarks);
    }
    let totalgrade = grades.reduce((a, b) => a + b);
    //parseint help to convert into integer from decimal or string
    let averagegrade = parseInt(totalgrade / grades.length);

    if (1 <= averagegrade && averagegrade <= 49) {
        return "F"
    } else if (50 <= averagegrade && averagegrade <= 59) {
        return "E"
    } else if (60 <= averagegrade && averagegrade <= 69) {
        return "D"
    } else if (70 <= averagegrade && averagegrade <= 79) {
        return "C"
    } else if (80 <= averagegrade && averagegrade <= 89) {
        return "B"
    } else {
        return "A"
    }

}
console.log(calculateGrade(marks))

module.exports = calculateGrade
