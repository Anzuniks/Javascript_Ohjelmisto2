const names = [];

for (let i = 0; i < 6; i++) {
    let name = prompt("Give me a dog name?");
    names.push(name);
}

names.sort();
names.reverse();

document.write("<ul>");
for (let i = 0; i < names.length; i++) {
  document.write("<li>" + names[i] + "</li>");
}

document.write("</ul>");
