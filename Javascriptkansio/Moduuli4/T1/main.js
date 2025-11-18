document.getElementById("SearchButton").addEventListener("click", getData);
async function getData() {
    const searchQuery = document.getElementById("searchInput").value;
    const url =
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchQuery)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        //  Muuutetaan vastaus JSONiksi
        const result = await response.json();

        // Tulostuu konsoliin
        console.log(result);

    } catch (error) {
        console.error(error.message);

    }
}



