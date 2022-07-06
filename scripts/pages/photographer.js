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
    priceBloc.classList.add("price")
    likeBloc.classList.add('likes')
    photographerLikesAndPrice.appendChild(likeBloc);
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
    };
    
})

    //récupération des médias à travers l'id du photographe
    const photographerMedia = photographer.media.filter(media => media.photographerId == id);
    let mediaLikesTable = [];
    let totalLikes = 0;
    
    photographerMedia.forEach((photographerMedias) => {
    DisplayMedia(photographerMedias);
    mediaLikesTable.push(photographerMedias.likes);
    totalLikes += photographerMedias.likes
    const previous = photographerMedia.indexOf(photographerMedias)
    console.log(previous)
        
        
    
})
//ajout des likes et du coeur dans le bloc statique
   likeBloc.innerHTML = `${totalLikes} <svg width="17" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
   </svg>`
  
  
   
})();





async function displayData(photographer) {
    const photographerheader = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.photographHeaderDOM();
    photographerheader.appendChild(userCardDOM);
    
};


async function DisplayMedia(photographerMedia) {  
    const photographerBook = document.querySelector(".photographer-book");
    const photographerBookModel = PhotographerMediaFactory(photographerMedia);
    const UserCard = photographerBookModel.photographerBookDOM();
    photographerBook.appendChild(UserCard);
} 

 

    




/*class Lightbox {
     static  initiat() {
        
        console.log(arr)
        imgs.forEach(imgs => imgs.addEventListener('click',e => {
            e.preventDefault();
            new Lightbox(e.currentTarget.getAttribute('src'))
        }))
    };

  /*constructor(url) {
    const element = this.builDOM(url)
    document.body.appendChild(element)
  }

  builDOM(url) {
    const dom = document.createElement('div')
    div.classList.add('lightbox')
    dom.innerHTML = `
    <div class="lightbox">
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__previous">Précédent</button>
    <button class="lightbox__next">Suivant</button>
    <div class="lightbox__container"><img src="${url}" alt=""></div>
    </div>`
  }
}*/















  
  





