//Haetaan lomake

const form = document.getElementById("searchForm");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Estää sivun uudelleenlatauksen

    const query = document.getElementById("query").value.trim();
    if (!query) {
        return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();


        const results = document.getElementById("results");
        results.innerHTML = "";

        data.forEach(item => {
            const show = item.show;

            // luodaan article-elementti jonne kaikki sisälle

            const article = document.createElement("article");

            // 1. luodaan eka h2 elementti

            const title = document.createElement("h2");
            title.textContent = show.name;
            article.appendChild(title);

            // 2. Linkki  a

            const link = document.createElement("a");
            link.href = show.url;
            link.textContent = "More details";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            article.appendChild(link);

            // 3. Kuva (img)
            const image = document.createElement("img");
            image.src = show.image?.medium || "";
            image.alt = show.name;
            article.appendChild(image);


            // 4 lisätään se results diviin
            const summary = document.createElement("div");
            summary.innerHTML = show.summary;
            article.appendChild(summary);

            // 5. Lisätään kaikki resultsiin

            results.appendChild(article);


        });

    } catch (error) {
        console.error(error);
    }
});