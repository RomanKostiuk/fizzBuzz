function fizzBuzzCheck(num) {
    switch (true) {
        case num % 3 === 0 && num % 5 === 0:
            return "FizzBuzz";
        case num % 3 === 0:
            return "Fizz";
        case num % 5 === 0:
            return "Buzz";
        default:
            return num;
    }
}

for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzzCheck(i));
}
