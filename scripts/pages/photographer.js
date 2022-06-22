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
    console.log(id)
    const photographer = await getPhotographers()

//récupération des liens id => photographes.
photographer.photographers.forEach((photographer) => {
    if(photographer.id == id) {
        console.log(photographer)
        displayData(photographer)
    };
})

//récupération des médias à travers l'id du photographe
const photographerMedia = photographer.media.filter(media => media.photographerId == id);
  
  photographerMedia.forEach((photographerMedia) => {
    DisplayMedia(photographerMedia)
    console.log(photographerMedia);
  })

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












  
  





