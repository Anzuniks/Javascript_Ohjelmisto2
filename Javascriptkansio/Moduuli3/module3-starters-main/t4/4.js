'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


let list = document.getElementById("target")

for (let i = 0; i < students.length; i++) {
    //luodaan option elementti
    let option = document.createElement("option");

    // Tämän jälkeen lisätään value atribuutti
    option.value = students[i].id;

    // laitetaan optionin nökyvä teksti = name
    option.textContent = students[i].name;

    //lisätään se listaan
    list.appendChild(option)

}
