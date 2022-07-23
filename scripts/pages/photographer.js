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

    
    
    //récupération des liens id => photographes.
    photographer.photographers.forEach((photographer) => {
    if(photographer.id == id) {
        //ajout du nom dans la modale
        const modal = document.getElementById("modalTitle");
        const div = document.createElement('div')
        modal.appendChild(div);
        div.innerHTML = photographer.name;

        // ajout du prix dans le bloc statique pour le prix / jour
        priceBloc.innerHTML = photographer.price + "€ / jour";

        //dépôt des données selon l'id du photograph
        displayData(photographer)
        
        
    }
    
})

    //récupération des médias à travers l'id du photographe
    const photographerMedia = photographer.media.filter(media => media.photographerId == id);
    let mediaLikesTable = [];
    let totalLikes = 0;
    //récupération du tableau sur la page du photographe
    sortMedias(photographerMedia)

    photographerMedia.forEach((photographerMedias) => {
    DisplayMedia(photographerMedias, photographerMedia);
    
    mediaLikesTable.push(photographerMedias.likes);
    totalLikes += photographerMedias.likes
    
    
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

async function DisplayMedia(photographerMedia,medias = []) {  
    const photographerBook = document.querySelector(".photographer-book");
    const photographerBookModel = PhotographerMediaFactory(photographerMedia, medias);
    const UserCard = photographerBookModel.photographerBookDOM();
    photographerBook.appendChild(UserCard);
} 

//triage des données
function sortMedias(photographerMedia) {
const titre = document.getElementById('titre')
const popular = document.getElementById('popularite');
const date = document.getElementById('date');
titre.addEventListener('click',function(){
    photographerMedia.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        } else {
          return 1;
        }
    })
    const photographerBook = document.querySelector(".photographer-book");
    photographerBook.innerHTML= "";
    photographerMedia.forEach((photographerMedias) => {
        DisplayMedia(photographerMedias);
    });
})
popular.addEventListener('click',function() {
    photographerMedia.sort(function(a,b){
        if(a.likes > b.likes) {
            return -1;
        } else {
            return 1;
        }
        
    })
    const photographerBook = document.querySelector(".photographer-book");
    photographerBook.innerHTML= "";
    photographerMedia.forEach((photographerMedias) => {
        DisplayMedia(photographerMedias);
        
    });
})
date.addEventListener('click',function(){
    photographerMedia.sort(function(a,b){
        if(a.date < b.date) {
            return -1;
        } else {
            return 1;
        }
        
    })
    const photographerBook = document.querySelector(".photographer-book");
    photographerBook.innerHTML= "";
    photographerMedia.forEach((photographerMedias) => {
        DisplayMedia(photographerMedias);
    });
})}

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

sortBox.addEventListener('click',function(e){
    sortBox.setAttribute('aria-expanded',"true")
});

window.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
    document.activeElement.click();
    event.preventDefault()
      
    }})
window.addEventListener('click',function(){
    document.activeElement.focus();
})    

                                           
                   

















  
  





