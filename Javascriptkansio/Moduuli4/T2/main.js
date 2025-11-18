const form = document.getElementById("searchForm");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const searchQuery = document.getElementById("query").value;

    const url = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;

    const response = await fetch(url);

    const data = await  response.json();

    console.log(data);
});