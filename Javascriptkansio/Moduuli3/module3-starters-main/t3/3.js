'use strict';
const names = ['John', 'Paul', 'Jones'];


let list = document.getElementById("target"); // Tässä luon hakemiston html puolelle jotta saan sen id target yhteyden
list.innerHTML = ""; //  Tässä teen ensin tyhjennyksen

// Tämä luo for loopin oli pieni hankaaluus hahmottaa tämä osio mutta tässä sain hyvin stack overflown foorumin kautta hahmottettua asian
for (let i = 0; i < names.length; i++)
    list.innerHTML += `<li>${names[i]}</li>`;
//Eli lyhyesti selitettynä luo toistorakenteen jossa tulee <li></li> mukaan ja nimet toistorakennemyös tekee pituuden


