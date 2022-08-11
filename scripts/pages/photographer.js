//fetch des datas pour la page de chaque photographe
async function getPhotographers() {
    return fetch(`./data/photographers.json`)
        .then((response) =>
           response.json()
        )
        .catch(function(){
            console.log("Something not happened well")
        })
}

//récupération de l'id du photographe
function getPhotographersId() {
    return new URL(location.href).searchParams.get("id")
}

//fonction de récupérations des datas lié à l'ID du photographe
(async function() {
    const id = getPhotographersId();
    const photographer = await getPhotographers()
    const photographerLikesAndPrice = document.querySelector(".photographer-informations");
    const likeBloc = document.createElement('span');
    const priceBloc = document.createElement('span');
    const heartBloc = document.createElement('span');
    priceBloc.classList.add("price")
    likeBloc.classList.add('likes')
    heartBloc.classList.add('heart')
    photographerLikesAndPrice.appendChild(likeBloc);
    photographerLikesAndPrice.appendChild(heartBloc);
    photographerLikesAndPrice.appendChild(priceBloc);


    
    setTimeout(() => {
        let mediaElements = document.getElementsByClassName('media__element')
        
        let mediaArray = Array.from(mediaElements)
        const container = document.getElementById('lightbox__container');
        const lightbox = document.getElementById('lightbox');
        const main = document.getElementById('main');
        const header = document.querySelector('header');
        const nextBtn = document.getElementById('lightbox__next');
        const previousBtn = document.getElementById('lightbox__previous');
        const vid = document.querySelector('video');

        
        
        
        const slidesIds = mediaArray.map((oneMedia) => parseInt(oneMedia.dataset.id))
        

        mediaArray.forEach((oneMedia => oneMedia.addEventListener('click', function(){
            const span = document.createElement('span');
            span.classList.add('lightbox__first');
            container.appendChild(oneMedia);
            container.appendChild(span);
            span.innerHTML = oneMedia.alt;
            lightbox.style.display = "block";
            main.style.display = "none";
            header.style.display = "none";
            let currentIndex = mediaArray.indexOf(oneMedia)
            vid.setAttribute('controls', "");
            
            
            nextBtn.addEventListener('click', function() {
                container.innerHTML = "";
                const spanName = document.getElementById('pictureLightboxName');
                spanName.innerHTML = "";
                
                const nextIndex = currentIndex % mediaArray.length
                container.appendChild(mediaArray[nextIndex+1]);
                
                spanName.innerHTML = mediaArray[nextIndex+1].alt;
                if(mediaArray[nextIndex+1].alt == null){
                    spanName.innerHTML = mediaArray[nextIndex+1].title;}
                    
            
                currentIndex++;
            })

            previousBtn.addEventListener('click',function(){
                const spanName = document.getElementById('pictureLightboxName');
                container.innerHTML = "";
                spanName.innerHTML = "";
                const prevIndex = currentIndex  % mediaArray.length -1                                  
                container.appendChild(mediaArray[prevIndex]);
                spanName.innerHTML = mediaArray[prevIndex].alt;
                if(mediaArray[prevIndex].alt == null){
                    spanName.innerHTML = mediaArray[prevIndex].title;}
                console.log(currentIndex)
                if(currentIndex !=-1 && currentIndex != 0){
                    currentIndex--;
                  } 
            })

            window.addEventListener(
                "keydown",
                function (e) {
                    if (e.key == "ArrowLeft") {
                        previousBtn.click();
                        previousBtn.focus();                            //console.log(window);
                    } else if (e.key == "ArrowRight") {
                        nextBtn.click();
                        nextBtn.focus();                                                                        
                        // console.log(window);
                    } else if (e.key == "Escape") {
                        location.reload()
                    }
                      },
                      false
                    );
                    
        })))
    }, 0);
    
    //récupération des liens id => photographes.
    photographer.photographers.forEach((photographer) => {
    if(photographer.id == id) {
        //ajout du nom dans la modale
        const modal = document.getElementById("modalTitle");
        const div = document.createElement('div')
        modal.appendChild(div);
        div.innerHTML = photographer.name;
        const form = document.getElementById('formId')
        form.setAttribute('action', `${window.location}?photographer=${id}`)
       
        // ajout du prix dans le bloc statique pour le prix / jour
        priceBloc.innerHTML = photographer.price + "€ / jour";

        //dépôt des données selon l'id du photograph
        displayData(photographer)
        
        
    }
    
})

    //récupération des médias à travers l'id du photographe
    const photographerMedias = photographer.media.filter(media => media.photographerId == id);
    let mediaLikesTable = [];
    let totalLikes = 0;
    
  


         
       
    
    //récupération du tableau sur la page du photographe
    sortMedias(photographerMedias)

    photographerMedias.forEach((photographerMedia) => {
    DisplayMedia(photographerMedia, photographerMedias);
    
    mediaLikesTable.push(photographerMedia.likes);
    totalLikes += photographerMedia.likes
    
    
    
})



//ajout des likes et du coeur dans le bloc statique
likeBloc.innerHTML = `${totalLikes}`
heartBloc.innerHTML = `<svg width="17" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
</svg>`

})();

async function displayData(photographer) {
    const photographerheader = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.photographHeaderDOM();
    photographerheader.appendChild(userCardDOM);
    
}

async function DisplayMedia(photographerMedias) {  
    const photographerBook = document.querySelector(".photographer-book");
    const photographerBookModel = PhotographerMediaFactory(photographerMedias);
    const UserCard = photographerBookModel.photographerBookDOM();
    photographerBook.appendChild(UserCard);
    
} 




function sortMedias(photographerMedias) {
    
    const titre = document.getElementById('titre')
    const popular = document.getElementById('popularite');
    const date = document.getElementById('date');
    titre.addEventListener('click',function(){
        photographerMedias = photographerMedias.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            } else {
                return 1;
            }
        });

        const photographerBook = document.querySelector(".photographer-book");
        photographerBook.innerHTML= "";
        //DisplayMedia(photographerMedia);
        photographerMedias.forEach((photographerMedia) => {
            DisplayMedia(photographerMedia,photographerMedias);
            setTimeout(() => {
                let mediaElements = document.getElementsByClassName('media__element')
                
                let mediaArray = Array.from(mediaElements)
                const container = document.getElementById('lightbox__container');
                const lightbox = document.getElementById('lightbox');
                const main = document.getElementById('main');
                const header = document.querySelector('header');
                const nextBtn = document.getElementById('lightbox__next');
                const previousBtn = document.getElementById('lightbox__previous');
                const vid = document.querySelector('video');
        
                
                
                console.log(mediaElements)
                const slidesIds = mediaArray.map((oneMedia) => parseInt(oneMedia.dataset.id))
                console.log(slidesIds)
        
                mediaArray.forEach((oneMedia => oneMedia.addEventListener('click', function(){
                    const span = document.createElement('span');
                    span.classList.add('lightbox__first');
                    container.appendChild(oneMedia);
                    container.appendChild(span);
                    span.innerHTML = oneMedia.alt;
                    lightbox.style.display = "block";
                    main.style.display = "none";
                    header.style.display = "none";
                    let currentIndex = mediaArray.indexOf(oneMedia)
                    vid.setAttribute('controls', "");
                    
                    
                    nextBtn.addEventListener('click', function() {
                        container.innerHTML = "";
                        const spanName = document.getElementById('pictureLightboxName');
                        spanName.innerHTML = "";
                        
                        const nextIndex = currentIndex % mediaArray.length
                        container.appendChild(mediaArray[nextIndex+1]);
                        
                        spanName.innerHTML = mediaArray[nextIndex+1].alt;
                        if(mediaArray[nextIndex+1].alt == null){
                            spanName.innerHTML = mediaArray[nextIndex+1].title;}
                            
                    
                        currentIndex++;
                    })
        
                    previousBtn.addEventListener('click',function(){
                        const spanName = document.getElementById('pictureLightboxName');
                        container.innerHTML = "";
                        spanName.innerHTML = "";
                        const prevIndex = currentIndex  % mediaArray.length -1                                  
                        container.appendChild(mediaArray[prevIndex]);
                        spanName.innerHTML = mediaArray[prevIndex].alt;
                        if(mediaArray[prevIndex].alt == null){
                            spanName.innerHTML = mediaArray[prevIndex].title;}
                        
                        if(currentIndex !=-1 && currentIndex != 0){
                            currentIndex--;
                          } 
                    })
        
                    window.addEventListener(
                        "keydown",
                        function (e) {
                            if (e.key == "ArrowLeft") {
                                previousBtn.click();
                                previousBtn.focus();                         
                            } else if (e.key == "ArrowRight") {
                                nextBtn.click();
                                nextBtn.focus();                                                                        
                                
                            } else if (e.key == "Escape") {
                                location.reload()
                            }
                              },
                              false
                            );
                            
                })))
            }, 0);
        });
    })
    popular.addEventListener('click',function() {
        photographerMedias.sort(function(a,b){
            if(a.likes > b.likes) {
                return -1;
            } else {
                return 1;
            }
            
        })
        console.log(photographerMedias)
        const photographerBook = document.querySelector(".photographer-book");
        photographerBook.innerHTML= "";
        photographerMedias.forEach((photographerMedia) => {
            DisplayMedia(photographerMedia, photographerMedias);
            setTimeout(() => {
                let mediaElements = document.getElementsByClassName('media__element')
                
                let mediaArray = Array.from(mediaElements)
                const container = document.getElementById('lightbox__container');
                const lightbox = document.getElementById('lightbox');
                const main = document.getElementById('main');
                const header = document.querySelector('header');
                const nextBtn = document.getElementById('lightbox__next');
                const previousBtn = document.getElementById('lightbox__previous');
                const vid = document.querySelector('video');
        
                
                
                
                const slidesIds = mediaArray.map((oneMedia) => parseInt(oneMedia.dataset.id))
               
        
                mediaArray.forEach((oneMedia => oneMedia.addEventListener('click', function(){
                    const span = document.createElement('span');
                    span.classList.add('lightbox__first');
                    container.appendChild(oneMedia);
                    container.appendChild(span);
                    span.innerHTML = oneMedia.alt;
                    lightbox.style.display = "block";
                    main.style.display = "none";
                    header.style.display = "none";
                    let currentIndex = mediaArray.indexOf(oneMedia)
                    vid.setAttribute('controls', "");
                    
                    
                    nextBtn.addEventListener('click', function() {
                        container.innerHTML = "";
                        const spanName = document.getElementById('pictureLightboxName');
                        spanName.innerHTML = "";
                        
                        const nextIndex = currentIndex % mediaArray.length
                        container.appendChild(mediaArray[nextIndex+1]);
                        
                        spanName.innerHTML = mediaArray[nextIndex+1].alt;
                        if(mediaArray[nextIndex+1].alt == null){
                            spanName.innerHTML = mediaArray[nextIndex+1].title;}
                            
                    
                        currentIndex++;
                    })
        
                    previousBtn.addEventListener('click',function(){
                        const spanName = document.getElementById('pictureLightboxName');
                        container.innerHTML = "";
                        spanName.innerHTML = "";
                        const prevIndex = currentIndex  % mediaArray.length -1                                  
                        container.appendChild(mediaArray[prevIndex]);
                        spanName.innerHTML = mediaArray[prevIndex].alt;
                        if(mediaArray[prevIndex].alt == null){
                            spanName.innerHTML = mediaArray[prevIndex].title;}
                        
                        if(currentIndex !=-1 && currentIndex != 0){
                            currentIndex--;
                          } 
                    })
        
                    window.addEventListener(
                        "keydown",
                        function (e) {
                            if (e.key == "ArrowLeft") {
                                previousBtn.click();
                                previousBtn.focus();                         
                            } else if (e.key == "ArrowRight") {
                                nextBtn.click();
                                nextBtn.focus();                                                                        
                               
                            } else if (e.key == "Escape") {
                                location.reload()
                            }
                              },
                              false
                            );
                            
                })))
            }, 0);
        });
    })
    date.addEventListener('click',function(){
        photographerMedias.sort(function(a,b){
            if(a.date < b.date) {
                return -1;
            } else {
                return 1;
            }
            
        })
        const photographerBook = document.querySelector(".photographer-book");
        
        photographerBook.innerHTML= "";
        photographerMedias.forEach((photographerMedia) => {
            DisplayMedia(photographerMedia, photographerMedias);
            setTimeout(() => {
                let mediaElements = document.getElementsByClassName('media__element')
                
                let mediaArray = Array.from(mediaElements)
                const container = document.getElementById('lightbox__container');
                const lightbox = document.getElementById('lightbox');
                const main = document.getElementById('main');
                const header = document.querySelector('header');
                const nextBtn = document.getElementById('lightbox__next');
                const previousBtn = document.getElementById('lightbox__previous');
                const vid = document.querySelector('video');
        
                
                
                console.log(mediaElements)
                const slidesIds = mediaArray.map((oneMedia) => parseInt(oneMedia.dataset.id))
                console.log(slidesIds)
        
                mediaArray.forEach((oneMedia => oneMedia.addEventListener('click', function(){
                    const span = document.createElement('span');
                    span.classList.add('lightbox__first');
                    container.appendChild(oneMedia);
                    container.appendChild(span);
                    span.innerHTML = oneMedia.alt;
                    lightbox.style.display = "block";
                    main.style.display = "none";
                    header.style.display = "none";
                    let currentIndex = mediaArray.indexOf(oneMedia)
                    vid.setAttribute('controls', "");
                    
                    
                    nextBtn.addEventListener('click', function() {
                        container.innerHTML = "";
                        const spanName = document.getElementById('pictureLightboxName');
                        spanName.innerHTML = "";
                        
                        const nextIndex = currentIndex % mediaArray.length
                        container.appendChild(mediaArray[nextIndex+1]);
                        console.log(mediaArray[nextIndex])
                        spanName.innerHTML = mediaArray[nextIndex+1].alt;
                        if(mediaArray[nextIndex+1].alt == null){
                            spanName.innerHTML = mediaArray[nextIndex+1].title;}
                            
                    
                        currentIndex++;
                    })
        
                    previousBtn.addEventListener('click',function(){
                        const spanName = document.getElementById('pictureLightboxName');
                        container.innerHTML = "";
                        spanName.innerHTML = "";
                        const prevIndex = currentIndex  % mediaArray.length -1                                  
                        container.appendChild(mediaArray[prevIndex]);
                        spanName.innerHTML = mediaArray[prevIndex].alt;
                        if(mediaArray[prevIndex].alt == null){
                            spanName.innerHTML = mediaArray[prevIndex].title;}
                        console.log(currentIndex)
                        if(currentIndex !=-1 && currentIndex != 0){
                            currentIndex--;
                          } 
                    })
        
                    window.addEventListener(
                        "keydown",
                        function (e) {
                            if (e.key == "ArrowLeft") {
                                previousBtn.click();
                                previousBtn.focus();                            
                            } else if (e.key == "ArrowRight") {
                                nextBtn.click();
                                nextBtn.focus();                                                                        
                               
                            } else if (e.key == "Escape") {
                                location.reload()
                            }
                              },
                              false
                            );
                            
                })))
            }, 0);
        });
    })
}

    const sortBox = document.getElementById('sort_button');
    const sortFull = document.getElementById('list_options');
    const popularity = document.getElementById('popularite');
    const date = document.getElementById('date');
    const titre = document.getElementById('titre');
    
   
sortBox.addEventListener('click', function(){
    sortFull.style.display = 'block';
    
})

sortFull.addEventListener('click', function(){
    sortFull.style.display = "none";
})
titre.addEventListener('click', function() {
    sortBox.textContent = 'Titre';
    sortBox.removeAttribute('aria-expanded')
    titre.setAttribute('aria-selected', 'true');
    date.removeAttribute('aria-selected');
    popularity.removeAttribute('aria-selected');
});
popularity.addEventListener('click', function() {
    sortBox.textContent = 'Popularité';
    sortBox.removeAttribute('aria-expanded')
    popularity.setAttribute('aria-selected', 'true');
    date.removeAttribute('aria-selected');
    titre.removeAttribute('aria-selected');
})
date.addEventListener('click', function() {
    sortBox.textContent = "Date";
    sortBox.removeAttribute('aria-expanded');
    date.setAttribute('aria-selected', 'true');
    titre.removeAttribute('aria-selected');
    popularity.removeAttribute('aria-selected');
})

sortBox.addEventListener('click',function(){
    sortBox.setAttribute('aria-expanded',"true")
});    







document.getElementById('lightbox').style.display= "none";

document.addEventListener('keyup', function(event){
    if(event.keyCode === 13) {
        
        document.activeElement.click();
        return false;
    }
})






