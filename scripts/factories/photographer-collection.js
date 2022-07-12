    function PhotographerMediaFactory(data,medias) {
        
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
        const h2 = document.createElement( 'h2' );
        const span = document.createElement('span');
        const totaLikes = document.querySelector('.likes');
        
        
        
        bloc.setAttribute("id","title_likes")
        img.alt="";
        img.setAttribute("src", picture);
        img.setAttribute("id","photographer-bloc");
        svg.setAttribute("data",heart);
        article.setAttribute("aria-labelledby","photographer-bloc")
        h2.setAttribute("id","photographer-bloc");
        span.style.cursor = "pointer";
        
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
            totaLikes.innerHTML++;
        })
        const buttonPrevious = document.createElement('button');
        
        img.addEventListener('click', function(){
            console.log(medias)
            const dom = document.createElement('div')
            const main = document.getElementById('main');
            const buttonClose = document.createElement('button');
            
            const buttonNext = document.createElement('button');
            const container = document.createElement('div');
            const image_lightbox = document.createElement('img');
            container.classList.add('lightbox__container');
            buttonClose.classList.add('lightbox__close');
	        buttonPrevious.classList.add('lightbox__previous');
            buttonNext.classList.add('lightbox__next');
            main.appendChild(dom);
            dom.appendChild(buttonClose);
            dom.appendChild(buttonPrevious);
            dom.appendChild(buttonNext);
            dom.appendChild(container);
            container.appendChild(image_lightbox);
            
            image_lightbox.setAttribute('src',`${picture}`);
            image_lightbox.setAttribute('alt',"");
            buttonClose.setAttribute('onclick','closeLightbox()');
            buttonPrevious.onclick = previousPicture(`${medias}`);
            
            main.setAttribute('aria-hidden', 'true');
            dom.setAttribute('aria-hidden', 'false');
            dom.setAttribute('id','lightbox');
            dom.setAttribute('aria-label','box focus of the selected picture');
            dom.classList.add('lightbox');
            
        })
        vid.addEventListener('click', function(){
            const dom = document.createElement('div')
            const main = document.getElementById('main');
            main.appendChild(dom);
            main.setAttribute('aria-hidden', 'true');
            dom.setAttribute('aria-hidden', 'false');
            dom.setAttribute('id','lightbox');
            dom.setAttribute('aria-label','box focus of the selected video');
            dom.classList.add('lightbox');
            dom.innerHTML = `
            
            <button class="lightbox__close"  onClick="closeLightbox()" aria-label="close the lightbox">Fermer</button>
            <button class="lightbox__previous" onClick ="previousPicture("${medias}")" aria-label="go to the previous video">Précédent</button>
            <button class="lightbox__next" onClick="nextPicture("${medias}")" aria-label="go to the next video">Suivant</button>
            <div class="lightbox__container"><video controls="" aria-label="focus of the selected video"><source type="video/mp4"
            src="${movie}"></video</div>`
        })
        
    return (article);
    }
    return {id, photographerId,name, title,video, image, likes, price, date, photographerBookDOM }
}

function closeLightbox() {
    const main = document.getElementById('main');
    
    const lightBox = document.getElementById('lightbox');
    main.removeChild(lightBox);
    
}

        function previousPicture(medias){
            console.log(medias)
        }
function nextPicture() {}







            
    


      
    
