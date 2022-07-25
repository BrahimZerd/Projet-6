//fonction ouverture de la modale
function displayModal() {
    
     
    const closeButton = document.getElementById('close_button');
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    
    
    const header = document.querySelector('header');
    const buttonSort = document.getElementById('sort_button');
    
    modal.style.display = "block";
    main.style.opacity = "0.2";
    main.style.display = "none";
    header.style.display = "none";
    
    //désactivation du scrolling
    window.onscroll = function() {
    window.scrollTo(window.pageYOffset, window.pageXOffset);
    };
   
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    closeButton.setAttribute("tabindex","1");
    main.setAttribute('aria-disabled', 'true');
    header.setAttribute('aria-disabled', 'true');
    buttonSort.setAttribute('aria-disabled','true');
    main.setAttribute("tabindex", "-1");

    
    header.style.opacity = "0.2";
    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const sendButton = document.querySelector('.contact_button');

    
    header.blur();
    main.blur();
    closeButton.focus();
    firstName.focus();
    lastName.focus();
    email.focus();
    message.focus();
    sendButton.focus();
} 


function catchFocusModal(){
    const  focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementById("contact_modal");
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; 

modal.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab'

    if (!isTabPressed) {
    return;
    }

    if (e.shiftKey) { 
    if (document.activeElement === firstFocusableElement) {
    lastFocusableElement.focus(); 
    e.preventDefault();
        }
    } else { 
    if (document.activeElement === lastFocusableElement) { 
    firstFocusableElement.focus(); 
    e.preventDefault();
    }   
    }
});

firstFocusableElement.focus();
   
    
}

//fonction fermeture de la modale
function closeModal() {
    const modal = document.getElementById("contact_modal");
    const header = document.querySelector('header');
    const main = document.getElementById('main');
    modal.style.display = "none";
    main.style.opacity = "1";
    header.style.opacity = "1";
    
    main.style.display = "block";
    header.removeAttribute('aria-disabled');
    //arrêt du scrolling
    window.onscroll = function() {};
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal'); 
}

const form = document.getElementsByTagName("form");
form.addEventListener('submit', function(e) {
    e.preventDefault();
});




     
 


