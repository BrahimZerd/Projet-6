//création du header de chaque photographe
function photographerFactory(data) {
   
    const { name, portrait, id, title, city, price, tagline, country } = data;
    const picture = `assets/photographers/${portrait}`;
    function photographHeaderDOM() {
        
        const button = document.querySelector(".contact_button")
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const bloc = document.createElement('div')
        img.alt="";
        img.setAttribute("src", picture)
        const h1 = document.createElement( 'h1' );
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h1.innerHTML = name;
        h2.innerHTML = `${city}, ${country}`
        p.innerHTML = tagline;
        article.appendChild(button);
        article.appendChild(bloc);
        article.appendChild(img);
        bloc.appendChild(h1);
        bloc.appendChild(h2);
        bloc.appendChild(p);
        
        return (article);
    }
    return { name, portrait, id, title, city, price, tagline, country, photographHeaderDOM }
}


