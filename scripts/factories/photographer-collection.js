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
        bloc.setAttribute("id","title_likes")
        img.alt="";
        img.setAttribute("src", picture);
        img.setAttribute("id","photographer-bloc");
        svg.setAttribute("data",heart);
        article.setAttribute("aria-labelledby","photographer-bloc")
        const h2 = document.createElement( 'h2' );
        const span = document.createElement('span');
        h2.innerHTML = `${title}`;
        span.innerHTML = `${likes}`;
        article.appendChild(img);
        h2.setAttribute("id","photographer-bloc");
        //positionné aussi pour remplacer l'image dans la lecture du script // mise en place de la vidéo
        if(picture.includes('undefined')){
            article.removeChild(img)
            article.appendChild(vid)
            const source = document.createElement('source');
            vid.appendChild(source);
            vid.setAttribute("aria-label","video of the photographer");
            source.setAttribute("type", "video/mp4")
            source.setAttribute("src", movie)
            h2.setAttribute("aria-label","name of the video");
            
        }
        article.appendChild(bloc);
        bloc.appendChild(h2);
        bloc.appendChild(span);
        bloc.appendChild(svg);
        span.addEventListener('click', function() {
            let i = `${likes}`
            i++;
            span.innerHTML = i;
            console.log()
        })
        img.addEventListener('click', function(){
            const dom = document.createElement('div')
            const main = document.getElementById('main');
            main.appendChild(dom);
            dom.setAttribute('id','lightbox');
            dom.classList.add('lightbox');
            console.log(picture.indexOf(picture))
            dom.innerHTML = `
            
            <button class="lightbox__close"  onClick="closeLightbox()">Fermer</button>
            <button class="lightbox__previous" onClick ="previousPicture()">Précédent</button>
            <button class="lightbox__next" onClick="nextPicture()">Suivant</button>
            <div class="lightbox__container"><img src="${picture}" alt=""></div>`
        })
        vid.addEventListener('click', function(){
            const dom = document.createElement('div')
            const main = document.getElementById('main');
            main.appendChild(dom);
            dom.setAttribute('id','lightbox');
            dom.classList.add('lightbox');
            dom.innerHTML = `
            
            <button class="lightbox__close"  onClick="closeLightbox()">Fermer</button>
            <button class="lightbox__previous" onClick ="previousPicture()">Précédent</button>
            <button class="lightbox__next" onClick="nextPicture()">Suivant</button>
            <div class="lightbox__container"><video controls=""><source type="video/mp4"
            src="${movie}"></video</div>`
        })
     console.log(image);
     
        
    
    return (article);
    }
    return {id, photographerId,name, title,video, image, likes, price, date, photographerBookDOM }
}

function closeLightbox() {
    const main = document.getElementById('main');
    const lightBox = document.getElementById('lightbox');
    main.removeChild(lightBox);
}







            
    


      
    
