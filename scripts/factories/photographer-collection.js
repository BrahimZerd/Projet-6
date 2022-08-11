    function PhotographerMediaFactory(data,medias) {
        
        let {id, photographerId, name, title, image,video, likes, price, date} = data;
    
        function photographerBookDOM() {
        const heart = `assets/icons/heart.svg`;
        const picture = `Sample Photos/${photographerId}/${image}`;
        const movie = `Sample Photos/${photographerId}/${video}`;
        const vid = document.createElement('video');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const svg=document.createElement('object')
        const bloc = document.createElement('div')
        const h2 = document.createElement( 'h2' );
        const span = document.createElement('span');
        const totaLikes = document.querySelector('.likes');
        const spanLightbox = document.querySelector('span__lightbox');

        
        
        
        
        bloc.setAttribute("id","title_likes")
        img.alt=`${title}`;
        img.setAttribute("src", picture);
        img.setAttribute("id","photographer-bloc");
        img.classList.add("media__element");
        vid.classList.add('media__element');
        img.setAttribute('tabindex','0');
        span.setAttribute('tabindex',"0");
        svg.setAttribute("data",heart);
        article.setAttribute("aria-labelledby","photographer-bloc")
        h2.setAttribute("id","photographer-bloc");
        h2.classList.add('media__name');
        span.style.cursor = "pointer";
        span.style.display = "block";
        
        h2.innerHTML = `${title}`;
        span.innerHTML = `${likes}`;
        article.appendChild(img);
        
        //positionné aussi pour remplacer l'image dans la lecture du script // mise en place de la vidéo
        if(picture.includes('undefined')){
            article.removeChild(img)
            article.appendChild(vid)
            const source = document.createElement('source');
            vid.appendChild(source);
            vid.setAttribute("aria-label","video of the photographer");
            vid.setAttribute("title", `${title}`)
            source.setAttribute("type", "video/mp4")
            source.setAttribute("src", movie)
            
            h2.setAttribute("aria-label","name of the video");
            
        }
        //intégration likes au clic
        article.appendChild(bloc);
        bloc.appendChild(h2);
        bloc.appendChild(span);
        bloc.appendChild(svg);
        let count = 0;
        span.addEventListener('click', function() {
            if(count < 1){
                
            let i = `${likes}`
            i++;
            span.innerHTML = i;
            totaLikes.innerHTML ++;
            count ++;
            } 
        })
        
        
        
        
        return (article);
        }


        
    return {id, photographerId,name, title,video, image, likes, price, date, photographerBookDOM }
}

        
function closeLightbox() {
    //fonction fermeture de la lightbox
    const main = document.getElementById('main');
    const header = document.querySelector('header');
    const lightBox = document.getElementById('lightbox');
    lightBox.style.display = "none";
    main.style.display = "block";
    header.style.display = "block";
    location.reload();
}

            



      
    
