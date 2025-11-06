let amount = parseInt(prompt("How many users?"));

const names= [];

for (let i = 0; i < amount; i++) {
    let name = prompt("Give me participants names:");
    names.push(name);
}

names.sort();

document.write("<ol>");
for (let i = 0; i < names.length; i++) {
    document.write("<li>" +names[i] + "</li>");

}
document.write("</ol>");


