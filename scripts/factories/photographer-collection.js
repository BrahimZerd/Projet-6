function PhotographerMediaFactory(data) {
     
    const { id, photographerId,name, title, image,video, likes, price, date } = data;
    function photographerBookDOM() {
        const heart = `assets/icons/heart.svg`;
        const picture = `Sample Photos/${image}`;
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const svg=document.createElement('object')
        const vid = document.createElement('video');
        const bloc = document.createElement('div')
        img.alt="";
        img.setAttribute("src", picture)
        svg.setAttribute("data",heart)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3');
        h2.innerHTML = `${title}`;
        h3.innerHTML = `${likes}`;
        
        article.appendChild(img);
        article.appendChild(bloc)
        bloc.appendChild(h2);
        bloc.appendChild(h3);
        bloc.appendChild(svg);
    
        return (article);
    }
    return {id, photographerId,name, title,video, image, likes, price, date, photographerBookDOM }
}



