const sectionCountries = document.querySelector(".countries");

countries.forEach(pais => {
    const sigla = pais.id["ISO-3166-1-ALPHA-2"].toLowerCase();

    const div = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.textContent = pais.nome.abreviado;

    const pSigla = document.createElement("p");
    pSigla.textContent = `Sigla: ${sigla.toUpperCase()}`;

    const img = document.createElement("img");
    img.src = `https://flagcdn.com/w320/${sigla}.png`;
    img.alt = `Bandeira de ${pais.nome.abreviado}`;

    div.appendChild(h3);
    div.appendChild(pSigla);
    div.appendChild(img);

    sectionCountries.appendChild(div);
});