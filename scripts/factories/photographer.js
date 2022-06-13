function photographerFactory(data) {
   
    const { name, portrait, id, title, city, price, tagline, country } = data;
     
    const picture = `assets/photographers/${portrait}`;
   
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const h4 = document.createElement('h4');
        h2.innerHTML = name;
        h3.innerHTML = `${city}, ${country}`
        p.innerHTML = tagline;
        h4.innerHTML = `${price}€/jour`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(h4);
        return (article);
    }
    
    return { name, portrait, id, title, city, price, tagline, country, getUserCardDOM }
    
}

