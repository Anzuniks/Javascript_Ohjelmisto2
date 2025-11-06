const numbers = [];

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Give me a number"));
   numbers.push(num);

}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

