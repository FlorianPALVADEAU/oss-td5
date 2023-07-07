const fs = require('fs');
const file = './file.csv';

function addRandomGradeToCSV(min, max) {
    const data = fs.readFileSync(file, 'utf8');
    const lines = data.split('\n');

    for (let i = 1; i < lines.length; i++) {
        const studentData = lines[i].split(';');
        const randomGrade = Math.floor(Math.random() * (max + 1 - min)) + min;
        studentData[3] = randomGrade.toString();

        const modifiedStudentData = studentData.join(';');
        lines[i] = modifiedStudentData;
    }
    const modifiedData = lines.join('\n');
    fs.writeFileSync(file, modifiedData, 'utf8');
    
    console.log(modifiedData);
}

module.exports = addRandomGradeToCSV;