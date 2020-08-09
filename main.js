function count(a, b) {
    let sum = a + b;
    let deduct = a - b;
    let multiply = a * b;

    if (sum > 0) {
        console.log("Wunik dodawania wynosi " + sum);
    } else {
        console.log("Wynik jest nieprawidłowy!");
    }
    if (deduct > 0) {
        console.log("Wynik odejmowanie wynosi " + deduct);
    } else {
        console.log("Wynik jest nieprawidłowy!");
    }
    if (multiply > 0) {
        console.log("Wynik mnożenia wynosi " + multiply);
    } else {
        console.log("Wynik jest nieprawidłowy!");
    }
}
count(10, 7);
