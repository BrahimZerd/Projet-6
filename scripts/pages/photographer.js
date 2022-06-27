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

    //récupération des liens id => photographes.
    photographer.photographers.forEach((photographer) => {
    if(photographer.id == id) {
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
})

//récupération du total de likes dans les médias de chaque photographe
    for(i = 0; i < mediaLikesTable.length; i++) {
    totalLikes += mediaLikesTable[i];
}
//nombre de likes total à implémenter plus tard
    console.log(totalLikes);   
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


   











  
  





