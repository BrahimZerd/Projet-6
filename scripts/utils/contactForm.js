//fonction ouverture de la modale
function displayModal(e) {
    const closeButton = document.getElementById('close_button');
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    
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
} 


function catchFocusModal() {}

    

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
console.log(form)
form.addEventListener('submit', e => {
    e.preventDefault();
});


     
 


