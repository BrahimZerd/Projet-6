//fonction ouverture de la modale
function displayModal(e) {
    const closeButton = document.getElementById('close_button');
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const inputs = document.getElementsByTagName(['input']);
    modal.style.display = "block";
    main.style.opacity = "0.2";
    
    //désactivation du scrolling
    window.onscroll = function() {
    window.scrollTo(window.pageYOffset, window.pageXOffset);
    };
   
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    closeButton.setAttribute('tabindex', '1');
    main.setAttribute('aria-hidden', 'true');
    main.setAttribute("tabindex", "-1");
    console.log(inputs)
} 


function catchFocusModal(){
    const closeButton = document.getElementById('close_button');
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    main.style.tabindex = "-10";
}

    

//fonction fermeture de la modale
function closeModal(e) {
    const modal = document.getElementById("contact_modal");

    modal.style.display = "none";
    main.style.opacity = "1";
    //arrêt du scrolling
    window.onscroll = function() {};
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal'); 
}

const form = document.getElementsByTagName("form");

form.addEventListener('submit', e => {
    e.preventDefault();
});


     
 


