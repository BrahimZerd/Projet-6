function photographerFactory(data) {
   
    const { name, portrait, id, title, city, price, tagline, country } = data;
     
    const picture = `assets/photographers/${portrait}`;
   
    function getUserCardDOM() {
        const a = document.createElement('a');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.alt="";
        a.setAttribute("value",`${name}`)
        a.setAttribute("role",`link`)
        a.href = `photographer.html?id=${id}`
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const h4 = document.createElement('h4');
        h3.setAttribute("aria-label","city, country");
        p.setAttribute("aria-label","tagline");
        h4.setAttribute("aria-label","price per day");
        h2.innerHTML = name;
        h3.innerHTML = `${city}, ${country}`
        p.innerHTML = tagline;
        h4.innerHTML = `${price}€/jour`;
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(h4);
        return (article);
    }
    
    return { name, portrait, id, title, city, price, tagline, country, getUserCardDOM }
}





