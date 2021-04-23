"use strict";
function a1() {
    let x = "Alles";
    console.log(x);
    func2();
    func3();
    func1();
    func3();
    console.log("Logo!");
}
a1();
function func1() {
    console.log("Klar?");
}
function func2() {
    console.log("Gute!");
}
function func3() {
    console.log("Alles");
}
/*
P2_1_1

Alles
Klar?
Logo!

Sonderzeichen auser $ funktionieren nicht (zumindest die die ich probiert habe nicht)

func1 ruft voher definierte funktion auserhalb der klammer auf und geht danach wieder in die klammer um mit dem programm darin fortzufahren
*/
function a2() {
    let i = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();
/*
P2_1_2

Code zählt in schleifendurchlauf von neun bis eins.
Giebt als letzte zahl eins und nicht null aus auch wenn der stop bei null ist da der console print vor dem runterzählen erfolgt.
*/
/*
aufgabe 3 hat mich einmahl mehr realisieren lassen was für ein schlechtes algorytmisches denken habe und wie schwer mir syntax fällt nachdem ich nicht in der lage war perfidere fehler einzubauen wie: "semikolon zu doppelpunkt" wärend ich an vier fehlern der anderen person 15 minuten lang saß bevor ich aufgegeben habe
*/
let x = "Hallo";
console.log(x);
func4(x);
console.log(x);
func5();
func6();
console.log(x);
function func4(y) {
    y = "Bla";
    console.log(y);
}
function func5() {
    let x = "Blubb";
    console.log(x);
}
function func6() {
    x = "Test";
}
/*
P2_1_4
Annahme:
Hallo
Bla
Hallo
Blubb
Test
Hallo

Ausgabe:
Hallo
Bla
Hallo
Blubb
Test

hatte übersehen das test nicht schreibt und das der letzte print damit nach meiner logik test nochmal ausgeben hätte müssen.
zudem hatte ich nicht bedacht das es die variable hällt und bin deshalb auf hallo im letzten print gesprungen.


X ist ne globale variable da sie auserhalb der klammeren definiert wird und damit auch aus den unterstehenden blöcken angesprochen werden kann
Y ist eine lokale variable und existiert deshalb nur innerhalb ihres blocks und ist schwer von ausen anzusprechen

*/
/*2_1_5 a)*/
console.log(multiply(2, 4));
function multiply(x5a, y5a) {
    let z5a = 0;
    z5a = x5a * y5a;
    return z5a;
}
/*2_1_5 b)*/
console.log(max(2, 4));
function max(x5b, y5b) {
    if (x5b > y5b)
        return x5b;
    else
        return y5b;
}
/*2_1_5 c*/
console.log(add());
function add() {
    let z5c = 0;
    let i5c = 1;
    while (i5c <= 100) {
        z5c = z5c + i5c;
        i5c++;
    }
    return z5c;
}
/*2_1_5 d*/
random();
function random() {
    for (let i5d = 0; i5d <= 10; i5d++) {
        console.log(Math.random() * (100 - 1) + 1);
    }
}
/*2_1_5 e*/
console.log(factorial(4));
function factorial(n) {
    let x5e = 1;
    let i5e = 1;
    while (i5e <= n) {
        x5e *= i5e;
        i5e++;
    }
    return x5e;
    n = x5e;
}
/*2_1_5 f*/
leapyears();
function leapyears() {
    for (let i5f = 1900; i5f <= 2021; i5f++) {
        if (i5f % 4 == 0) {
            if (i5f % 100 == 0) {
                if (i5f % 400 == 0) {
                    console.log(i5f);
                    i5f++;
                }
                else {
                    i5f++;
                }
            }
            else {
                console.log(i5f);
                i5f++;
            }
        }
        else {
            i5f++;
        }
    }
}
/*2_1_6 a*/
output();
function output() {
    let z6a = "";
    for (let i6a = 1; i6a <= 7; i6a++) {
        z6a += "#";
        console.log(z6a);
    }
}
/*2_1_6 b*/
oneToHundred();
function oneToHundred() {
    for (let i6b = 1; i6b <= 100; i6b++) {
        if (i6b % 3 == 0) {
            console.log("Fizz");
        }
        else if (i6b % 5 == 0) {
            console.log("Buzz");
        }
        else
            console.log(i6b);
    }
}
/*2_1_6 c*/
oneToHundredII();
function oneToHundredII() {
    for (let i6b = 1; i6b <= 100; i6b++) {
        if (i6b % 3 == 0) {
            if (i6b % 5 == 0) {
                console.log("FizzBuzz");
            }
            else
                console.log("Fizz");
        }
        else if (i6b % 5 == 0) {
            console.log("Buzz");
        }
        else
            console.log(i6b);
    }
}
/*2_1_6 d-e*/
console.log(chess(8));
function chess(n) {
    let x6d = "";
    for (let i6d = 1; i6d <= n; i6d++) {
        for (let j6d = 1; j6d <= n; j6d++) {
            if (i6d % 2 == 0) {
                if (j6d % 2 == 0) {
                    x6d += " ";
                }
                else {
                    x6d += "#";
                }
            }
            else {
                if (j6d % 2 == 0) {
                    x6d += "#";
                }
                else {
                    x6d += " ";
                }
            }
            if (j6d == n) {
                x6d += "\n";
            }
        }
    }
    return x6d;
}
/* ich hab ausversehen die d schon adaptiv gelöst darum geb ich d und e gemeinsam ab. */
//# sourceMappingURL=script.js.map