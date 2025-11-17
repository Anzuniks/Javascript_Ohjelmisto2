const target = document.getElementById("target");  //Haetaan html tiedostoa target id:ellä
const lista = ["First item", "Second item", "Third item"]; //Luotiin lista ohjeiden mukaisesti

// Kutsutaan funktio foreach komennolla jolla luodaan pääohjelma:

lista.forEach((text, index) => {
    const li = document.createElement("li");
    li.textContent = text;

    // lisätään luokka toiseen listaan kohtaan (index1)

    if (index === 1) {
        li.classList.add("my-item");
    }

    target.appendChild(li);


});
