const fs = require('fs');
const file = './file.csv';

function addRandomGradeToCSV(min, max) {
    const data = fs.readFileSync(file, 'utf8');
    const lines = data.split('\n');
    let total = 0;
    let count = 0;

    for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(';');
        const studentName = studentData[2];
        const randomGrade = Math.floor(Math.random() * (max + 1 - min)) + min;
        studentData[3] = randomGrade.toString();
        total += randomGrade;
        count++;
        const modifiedStudentData = studentData.join(';');
        lines[i] = modifiedStudentData;
    }
    const averageGrade = total / count;
    const modifiedData = lines.join('\n');
    fs.writeFileSync(file, modifiedData, 'utf8');
    
    console.log(modifiedData);
}

module.exports = addRandomGradeToCSV;