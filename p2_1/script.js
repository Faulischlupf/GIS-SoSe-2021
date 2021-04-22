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
/*
f) Schreiben Sie eine Funktion leapyears welche alle Schlatjahre von 1900 bis heute auf der Konsole ausgibt. Ein Jahr ist ein Schaltjahr,
 wenn die Jahreszahl durch 4, aber nicht durch 100 teilbar ist. Sollte die Jahreszahl durch 400 teilbar sein, handelt es sich dennoch um ein Schaltjahr.
*/
/*
a) Schreiben Sie eine Schleife welche auf der Konsole folgende sieben Zeilen ausgibt:

#
##
###
####
#####
######
#######
Hinweis: die Länge eines strings kann über stringname.length abgefragt werden.

b) Schreiben Sie ein Programm welches auf der Konsole alle Zahlen von 1 bis 100 ausgibt. Dabei gibt es zwei Ausnahmen: Ist die Zahl durch 3 teilbar, geben Sie statt der Zahl Fizz aus. Ist sie durch 5 (und nicht durch 3) teilbar, geben sie Buzz aus.
Hinweis: Nutzen sie den Modulo Operator % um zu prüfen, ob eine Variable durch eine andere teilbar ist (Rest 0).

c) Nehmen Sie das Programm aus b) und modifizieren Sie es so, dass das Programm FizzBuzz ausgibt, wenn die Zahl durch sowohl 3 als auch durch 5 teilbar ist.
Hinweis: Dieser Teil der Aufgabe hat eine offensichtlichere und eine cleverere Lösung. Finden Sie beide?

Diese Frage ist eine beliebte Frage in Vorstellungsgesprächen. Wenn Sie diese also gelöst bekommen, ist Ihr Marktwert gerade gestiegen.

d) Schreiben Sie eine Funktion, welche einen String zurückgibt, der ein 8x8 Schachbrett repräsentiert, mit neuen Zeilen ("\n") um die Zeilen zu trennen. An jeder Position im Brett ist entweder ein # oder ein Leerzeichen.

Wenn der String über console.log ausgegeben wird, sollte er etwa so aussehen:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Hinweis: Beginnen Sie mit einem leeren string ("") und fügen Sie dann immer mehr Zeichen hinzu. Für zwei Dimensionen brauchen Sie zwei Schleifen ineinander, eine für die Zeilen und eine für die Character innerhalb der Zeile.

e) Nehmen Sie die Funktion aus d) und fügen Sie ihr einen Übergabeparameter hinzu, welcher die Höhe und Breite des Brettes bestimmt. Schreiben Sie ihre Funktion so um, dass es mit jeder Größe Funktioniert.
Hinweis: Machen Sie sich Gedanken wie sie sich merken/berechnen können, welcher Character als erstes/nächstes in einer Zeile ausgegeben werden muss.
*/
//# sourceMappingURL=script.js.map