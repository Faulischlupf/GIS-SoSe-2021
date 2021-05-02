"use strict";
var twotwo;
(function (twotwo) {
    /*2_2_1 a*/
    let minArray = [3, 5, 7, 9];
    let minArrayII = [8, 9, 12, 45, -6];
    console.log(min(minArray));
    console.log(min(minArrayII));
    function min(_numberArray) {
        let nMin = _numberArray.length;
        let iMin = 0;
        let xMin = _numberArray[iMin];
        while (iMin < nMin - 1) {
            if (_numberArray[iMin] < _numberArray[iMin + 1]) {
                xMin = xMin;
                iMin++;
            }
            else {
                xMin = _numberArray[iMin + 1];
                iMin++;
            }
        }
        return xMin;
    }
    /*2_2_1 b*/
    /* Ich frage ab ob die zahl negativ ist fals ja addiere ich +2 anstelle von subtrahieren*/
    let inputNumber = -1;
    console.log(isEven(inputNumber));
    function isEven(_inputNumber) {
        let nEven = _inputNumber;
        if (nEven == 0 || nEven == 1) {
            if (nEven == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if (nEven > 0) {
                nEven -= 2;
                return isEven(nEven);
            }
            else {
                nEven += 2;
                return isEven(nEven);
            }
        }
    }
    /*2_2_1 c*/
    let rolf = { name: "Rolf", age: 22, sex: "Male", matCode: 1234 };
    let sabrina = { name: "Sabrina", age: 27, sex: "Female", matCode: 2345 };
    let peter = { name: "Peter", age: 19, sex: "Mannbärschwein", matCode: 3456 };
    let arrayStudent = [rolf, sabrina, peter];
    arrayStudent.push({ name: "aylina", age: 24, sex: "Female", matCode: 4321 });
    console.log(arrayStudent[1]);
    console.log(rolf.sex);
    console.log(arrayStudent[3].matCode);
    function showInfo(_studentData) {
        console.log(_studentData.name, _studentData.matCode);
    }
    showInfo(arrayStudent[1]);
    showInfo(arrayStudent[2]);
    showInfo(arrayStudent[3]);
    showInfo(arrayStudent[0]);
    /*     Wenn Sie können, ändern Sie das interface in eine Klasse mit Konstruktur.
    Verschieben Sie außerdem die showInfo Funktion innerhalb die Klasse und machen Sie damit eine Methode daraus. */
    /* 2_2_2 a*/
    let arrayInput = [1, 2, 3, 4, 5];
    console.log(backwards(arrayInput));
    function backwards(_arrayInput) {
        let i = _arrayInput.length - 1;
        let arrayBackwards = [];
        while (i >= 0) {
            arrayBackwards.push(_arrayInput[i]);
            i--;
        }
        return arrayBackwards;
    }
    /*2_2_2 b*/
    let arrayI = [1, 2, 3];
    let arrayII = [4, 5, 6];
    console.log(join(arrayI, arrayII));
    function join(_arrayI, _arrayII) {
        let i = 0;
        let arrayJoin = arrayI;
        while (i < _arrayII.length) {
            arrayJoin.push(_arrayII[i]);
            i++;
        }
        return arrayJoin;
    }
    /*2_2_2 c*/
    let arraySplitInput = [1, 2, 3, 4, 5, 6];
    let splitI = 1;
    let splitII = 4;
    console.log(split(arraySplitInput, splitI, splitII));
    function split(_arrayInput, _splitI, _splitII) {
        let arraySplitOutput = [];
        let i = _splitI;
        while (i < _splitII) {
            arraySplitOutput.push(_arrayInput[i]);
            i++;
        }
        return arraySplitOutput;
    }
    /*testcode*/
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440]));
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    /* 2_2_3 a*/
    let canvas = document.getElementById("myFirstCanvas");
    let context = canvas.getContext("2d");
    context.lineWidth = 10;
    //sky
    context.strokeStyle = "blue";
    context.fillStyle = "blue";
    context.beginPath();
    context.moveTo(500, 250);
    context.lineTo(500, 0);
    context.lineTo(0, 0);
    context.lineTo(0, 250);
    context.closePath();
    context.stroke();
    context.fill();
    //grass
    context.strokeStyle = "green";
    context.fillStyle = "green";
    context.beginPath();
    context.moveTo(0, 400);
    context.lineTo(500, 400);
    context.lineTo(500, 250);
    context.lineTo(0, 250);
    context.stroke();
    context.fill();
    context.closePath();
    //cloud
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(20, 50);
    context.bezierCurveTo(20, 10, 70, 5, 70, 50);
    context.bezierCurveTo(70, 6, 100, 2, 100, 50);
    context.closePath();
    context.stroke();
    context.fill();
    //house
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.beginPath();
    context.fillRect(75, 140, 150, 110);
    //door
    context.fillStyle = "Brown";
    context.beginPath();
    context.fillRect(130, 190, 40, 60);
    //roof
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.beginPath();
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.closePath();
    context.stroke();
    context.fill();
    //tree
    context.strokeStyle = "brown";
    context.fillStyle = "brown";
    context.beginPath();
    context.fillRect(350, 130, 30, 150);
    context.strokeStyle = "darkGreen";
    context.fillStyle = "darkGreen";
    context.beginPath();
    let path = new Path2D();
    path.arc(365, 90, 90, 0, 2 * Math.PI);
    context.stroke(path);
    context.fill(path);
    /*2_2_3 b-e*/
    class Rectangle {
        constructor() {
            this.xLeft = Math.random() * 500;
            this.yHigh = Math.random() * 400;
            this.xRight = Math.random() * 500;
            this.yLow = Math.random() * 400;
        }
        drawRect() {
            context.lineWidth = 5;
            context.strokeStyle = "Black";
            context.beginPath();
            context.moveTo(this.xLeft, this.yHigh);
            context.lineTo(this.xRight, this.yHigh);
            context.lineTo(this.xRight, this.yLow);
            context.lineTo(this.xLeft, this.yLow);
            context.closePath();
            context.stroke();
        }
    }
    for (let i = 1; i <= 5; i++) {
        let rectangle = new Rectangle();
        rectangle.drawRect();
    }
})(twotwo || (twotwo = {}));
//# sourceMappingURL=script.js.map