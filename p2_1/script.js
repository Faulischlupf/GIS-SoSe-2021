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
//# sourceMappingURL=script.js.map