//fonction ouverture de la modale
function displayModal(e) {
    
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    const main = document.getElementById("main");
    main.style.opacity = "0.2";
    main.setAttribute('aria-hidden', 'true')
    //désactivation du scrolling
    window.onscroll = function() {
    window.scrollTo(window.pageYOffset, window.pageXOffset);
    };
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    
    let closeButton = document.getElementById('close_button');
    closeButton.setAttribute('tabindex', '1');
                                       
} 

if( modal.style.display =" block") {
    main.blur();
    modal.focus();
}

    

//fonction fermeture de la modale
function closeModal(e) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.opacity = "1";
    window.onscroll = function() {};
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal'); 
}



     
 


