namespace twotwo {

    /*2_2_1 a*/

    let minArray: number[] = [3, 5, 7, 9];
    let minArrayII: number[] = [8, 9, 12, 45, -6];

    console.log(min(minArray));
    console.log(min(minArrayII));

    function min(_numberArray: number[]): number {
        let nMin: number = _numberArray.length;
        let iMin: number = 0;
        let xMin: number = _numberArray[iMin];
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
    let inputNumber: number = -1;

    console.log(isEven(inputNumber));

    function isEven(_inputNumber: number): boolean {
        let nEven: number = _inputNumber;

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

    let rolf: Student = { name: "Rolf", age: 22, sex: "Male", matCode: 1234 };
    let sabrina: Student = { name: "Sabrina", age: 27, sex: "Female", matCode: 2345 };
    let peter: Student = { name: "Peter", age: 19, sex: "Mannbärschwein", matCode: 3456 };

    interface Student {
        name: string;
        age: number;
        sex: string;
        matCode: number;
    }

    let arrayStudent: Student[] = [rolf, sabrina, peter];

    arrayStudent.push({ name: "aylina", age: 24, sex: "Female", matCode: 4321 });

    console.log(arrayStudent[1]);
    console.log(rolf.sex);
    console.log(arrayStudent[3].matCode);

    function showInfo(_studentData: Student): void {
        console.log(_studentData.name, _studentData.matCode);
    }

    showInfo(arrayStudent[1]);
    showInfo(arrayStudent[2]);
    showInfo(arrayStudent[3]);
    showInfo(arrayStudent[0]);
    /*     Wenn Sie können, ändern Sie das interface in eine Klasse mit Konstruktur.
    Verschieben Sie außerdem die showInfo Funktion innerhalb die Klasse und machen Sie damit eine Methode daraus. */


    /* 2_2_2 a*/

    let arrayInput: number[] = [1, 2, 3, 4, 5];

    console.log(backwards(arrayInput));

    function backwards(_arrayInput: number[]): number[] {
        let i: number = _arrayInput.length - 1;
        let arrayBackwards: number[] = [];
        while (i >= 0) {
            arrayBackwards.push(_arrayInput[i]);
            i--;
        }
        return arrayBackwards;
    }

    /*2_2_2 b*/

    let arrayI: number[] = [1, 2, 3];
    let arrayII: number[] = [4, 5, 6];

    console.log(join(arrayI, arrayII));

    function join(_arrayI: number[], _arrayII: number[]): number[] {
        let i: number = 0;
        let arrayJoin: number[] = arrayI;
        while (i < _arrayII.length) {
            arrayJoin.push(_arrayII[i]);
            i++;
        }
        return arrayJoin;
    }

    /*2_2_2 c*/

    let arraySplitInput: number[] = [1, 2, 3, 4, 5, 6];
    let splitI: number = 1;
    let splitII: number = 4;

    console.log(split(arraySplitInput, splitI, splitII));

    function split(_arrayInput: number[], _splitI: number, _splitII: number): number[] {
        let arraySplitOutput: number[] = [];
        let i: number = _splitI;
        while (i < _splitII) {
            arraySplitOutput.push(_arrayInput[i]);
            i++;
        }
        return arraySplitOutput;
    }


    /*testcode*/

    let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack: number[] = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440]));
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));


    /* 2_2_3 a*/
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

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
    let path: Path2D = new Path2D();
    path.arc(365, 90, 90, 0, 2 * Math.PI);
    context.stroke(path);
    context.fill(path);

    /*2_2_3 b-e*/
    class Rectangle {
        xLeft: number;
        yHigh: number;
        xRight: number;
        yLow: number;

        constructor() {
            this.xLeft = Math.random() * 500;
            this.yHigh = Math.random() * 400;
            this.xRight = Math.random() * 500;
            this.yLow = Math.random() * 400;
        }
        drawRect(): void {
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
    for (let i: number = 1; i <= 5; i++) {
        let rectangle: Rectangle = new Rectangle();
        rectangle.drawRect();
    }
}