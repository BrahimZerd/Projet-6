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
const PhotographerMedia = photographer.media.filter(media => media.photographerId == id);
console.log(PhotographerMedia);
})();
function photographerFactory(data) {
   
    const { name, portrait, id, title, city, price, tagline, country } = data;
    const picture = `assets/photographers/${portrait}`;
    function photographHeaderDOM() {
        const a = document.createElement('a');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const bloc = document.createElement('div')
        img.alt="";
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        h2.innerHTML = name;
        h3.innerHTML = `${city}, ${country}`
        p.innerHTML = tagline;
        article.appendChild(bloc);
        article.appendChild(img);
        bloc.appendChild(h2);
        bloc.appendChild(h3);
        bloc.appendChild(p);
        
        return (article);
    }
    return { name, portrait, id, title, city, price, tagline, country, photographHeaderDOM }
}
async function displayData(photographer) {
    const photographerheader = document.querySelector(".photograph-header");
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.photographHeaderDOM();
    photographerheader.appendChild(userCardDOM);
};
    











  
  





