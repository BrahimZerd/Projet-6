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
    const photographerLikes = document.querySelector(".photographer-informations");
    
    //récupération des liens id => photographes.
    photographer.photographers.forEach((photographer) => {
    if(photographer.id == id) {
        //ajout du nom dans la modale
        const modal = document.getElementById("modalTitle");
        const div = document.createElement('div')
        modal.appendChild(div);
        div.innerHTML = photographer.name;
        //dépôt des données selon l'id du photograph
        displayData(photographer)
    };
})

    //récupération des médias à travers l'id du photographe
    const photographerMedia = photographer.media.filter(media => media.photographerId == id);
    let mediaLikesTable = [];
    let totalLikes = 0;
    
    photographerMedia.forEach((photographerMedia) => {
    DisplayMedia(photographerMedia);
    mediaLikesTable.push(photographerMedia.likes);
    totalLikes += photographerMedia.likes
})
   photographerLikes.innerHTML = `${totalLikes}`
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

class Lightbox {
     static  initiat() {
        const allImg = document.getElementsByTagName('img');
        const photographerBloc = document.getElementsByTagName("article")
        console.log(photographerBloc);
        photographerBloc.forEach(allImg => allImg.addEventListener('click',e => {
            e.preventDefault();
            new Lightbox(e.currentTarget.getAttribute('src'))
        }))
    }

}
Lightbox.initiat();














  
  





