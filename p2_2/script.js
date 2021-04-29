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
    /*

    Aufgabe 2 - Arrays
    ⚠️ Für die folgende Aufgabe sollen die übergebenen Arrays nicht verändert werden, sondern das Ergebnis als neues Array zurückgegeben werden.
    Lesen Sie dazu im Zweifelsfall nochmal den Abschnitt Call by reference / call by value in 2.2 noch einmal durch.
    
    Die meisten dieser Funktionen sind in einem Array bereits Standardmäßig enthalten. Sie sollen diese Funktionen aber selbstverständlich selbst implementieren.
    Gehen Sie von number Arrays aus.
    
    b) Schreiben Sie eine Funktion join(...), welche zwei Arrays zusammenfügt indem es das zweite hinter das erste hängt. Bonus: Können Sie diese Funktion so umschreiben,
    dass Sie beliebig viele Arrays entgegen nimmt?
    
    c) Eine Funktion split(...), die ein Array und zwei Indexe entgegen nimmt und das Array zwischen diesen beiden Indexen zurück gibt.
    Bonus: Hier wäre eine Prüfung der übergebenen Indizes angebracht. Welche Prüfungen sind dies? Implementieren Sie auch das.
    
    Testcode
    
    Wenn Sie alle diese Aufgaben erledigt haben, können Sie diesen Code zum testen nutzen. Funktioniert alles wie erwartet?
    
    let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack: number[] = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440] ));
    console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0));     // Bonus c)
    console.log(split(arr, -1, 2));    // Bonus c)
    console.log(split(arr, 0, 7));     // Bonus c)
    
    
    Aufgabe 3 - Endlich was visuelles!
    Für diese Aufgabe soll der Canvas genutzt werden (siehe Canvas in 2.2).
    
    a) Experimentieren Sie ein wenig mit dem Canvas und machen Sie sich damit vertraut. Malen Sie Linien, machen Sie diese Linien farbig oder gekrümmt,
    malen Sie Kreise, Kurven und Rechtecke und füllen Sie diese mit Farben. Zeichnen Sie damit eine einfache Landschaft (grüner Boden, blauer Himmel mit ein paar Wolken,
        ein Haus und ein Baum im Bild). Machen Sie Gebrauch von Html5CanvasTutorials.
    
    b) Entwerfen Sie ein Interface, welches auf sinnvolle Weise ein beliebiges Rechteck abbilden kann.
    Bonus: Machen Sie statt einem Interface eine Klasse und, statt globaler Funktionen denen die Rechtecke übergeben werden in den folgenden Teilaufgaben, Methoden der Klasse selbst.
    
    c) Schreiben Sie eine Funktion createRect(), welche Ihnen ohne Übergabeparameter ein zufällig (aber sinnvoll) befülltes Rechteck zurück gibt.
     Für die Klasse wäre dies der Konstruktor.
    
    d) Schreiben Sie eine Funktion drawRect(...), welche das ihr übergebene Rechteck auf dem Canvas malt.
    
    e) Lassen Sie jedes Mal, wenn die Seite neu geladen wird, einige Rechtecke generieren und zeichnen.
    Legen Sie die Rechtecke dafür in einem Array an und rufen für jedes im Array vorhandene Rechteck die drawRect Funktion auf.
    
    f) Bonus: Nutzen sie die setTimeout Funktion um alle 50 Millisekeunden den Canvas neu zu bemalen (Sie können ihn über context.clearRect() leeren).
    Damit es auch interessante Änderungen zu sehen gibt, fügen sie den Rechtecken eine Bewegungsrichtung für beide Achsen hinzu und bewegen Sie diese pro Zyklus um diese Werte.
    
    g) Bonus: Ändern Sie ihre Rechteck-Klasse so ab, dass diese von einer neuen, Zeichenobjekt Klasse erbt.
    Lassen Sie außerdem von Zeichenobjekt eine neue Klasse Kreis erben, welche statt einem Rechteck einen Kreis zeichnet.
    Duplizieren Sie keinen (oder so wenig wie möglich) Code und nutzen Sie die Vererbung von Klassen voll aus.*/
})(twotwo || (twotwo = {}));
//# sourceMappingURL=script.js.map