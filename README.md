# Random grades generator 🔥

This library is made to generate random grades to each student of a required csv file. Then it calculates the average grade of all the students and returns it at the last line of the csv file

**This library modify csv files !**
<br><br>

## Installation 📢

```bash
npm install palvadeau_florian_osstd-js
```
<br><br>

## How to run ? 🏎
As a basic library, you can call the function wherever you want !<br>
Don't forget to import the required file (`index.js`)

```js
const addRandomGradeToCSV = require("../index");
```
```js
addRandomGradeToCSV(minGrade, maxGrade);
```
<br><br>
## How to import your custom csv ? ⚙

**Warning :** your csv template must be the same as the original one ! <br>
Rename your custom csv into `file.csv`, then just drag and drop it into the root file.

Then, just go ahead with the same method !
```js
addRandomGradeToCSV(minGrade, maxGrade);
```
<br><br>
## What are the parameters ? 🤔
| Name | Usage |
|-----------|-----------|
| minGrade   | First parameter, it defines the minimum number of the random generation  |
| maxGrade   | Second parameter, it defines the maximum number of the random generation   |

<br><br>
## What is the csv format ? 📃
| Student_pk  | Nom |  Prenom  | Commentaire |  Note |
| :---------- | :-: | :------: | :---------: | ----: |
| 12312321312 | DOE |   John   |             |    16 |
| 12312321313 | DOE |  Maria   |             |    10 |
| 12312321314 | DOE |   Jane   |             |    13 |
| 12312321315 | DOE |   Jack   |             |    17 |
| 12312321316 | DOE | Mariasse |             |    13 |
| Moyenne     |     |          |             | 13.80 |

