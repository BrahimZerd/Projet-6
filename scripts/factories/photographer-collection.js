function PhotographerMediaFactory(data) {
     
    const { id, photographerId,name, title, image,video, likes, price, date } = data;
    
    function photographerBookDOM() {
        const heart = `assets/icons/heart.svg`;
        const picture = `Sample Photos/${photographerId}/${image}`;
        const movie = `Sample Photos/${photographerId}/${video}`;
        const vid = document.createElement('video');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const svg=document.createElement('object')
        const bloc = document.createElement('div')
        img.alt="";
        img.setAttribute("src", picture)
        svg.setAttribute("data",heart)
        const h2 = document.createElement( 'h2' );
        const span = document.createElement('span');
        h2.innerHTML = `${title}`;
        span.innerHTML = `${likes}`;
        article.appendChild(img);

        if(picture.includes('undefined')){
            article.removeChild(img)
            article.appendChild(vid)
            const source = document.createElement('source');
            vid.appendChild(source);
            source.setAttribute("type", "video/mp4")
            source.setAttribute("src", movie)
        }

        article.appendChild(bloc);
        bloc.appendChild(h2);
        bloc.appendChild(span);
        bloc.appendChild(svg);
         
        return (article);
    }
    return {id, photographerId,name, title,video, image, likes, price, date, photographerBookDOM }
}


