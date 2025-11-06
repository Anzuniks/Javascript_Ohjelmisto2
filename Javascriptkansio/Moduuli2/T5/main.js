const numbers = [];

while (true) {
    let num = parseInt(prompt("Give me a number"));

    if (numbers.includes(num)) {
    console.log("That number has already been given!");
    break;

    }

    numbers.push(num);
}


numbers.sort((a, b) => a - b);
console.log("Numbers in ascending order:", numbers);



