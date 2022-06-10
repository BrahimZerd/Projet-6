    async function getPhotographers() {
        return fetch('./data/photographers.json')
            .then((response) =>
                response.json()
            )
            .catch(function(){
                console.log("Something not happened well")
            })
    }
    
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        console.log(photographers);
        displayData(photographers);
    };
    
    init();