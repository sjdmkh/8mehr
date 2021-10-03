function fizzbuz(a) {
    if (a % 3 === 0 && a % 15 !== 0) {
        console.log("fizz")
    } else if (a % 5 === 0 && a % 15 !== 0) {
        console.log("buzz")
    } else if (a % 3 === 0 && a % 5 === 0) {
        console.log("fizzbuzz")
    } else
        console.log("is not")
}
    console.log(fizzbuz(3), fizzbuz(5), fizzbuz(15),fizzbuz(11))