let popup=document.querySelector(".popup");
let openButton=document.querySelector(".profile__edit_button2");
let popupExit=document.querySelector(".popup__exit");
let nameInput=document.querySelector(".profile__title");
let jobInput=document.querySelector(".profile__sutitle");

function openPopup () {
    popup.classList.add ('popup__opened');
  }
  
function closePopup ()  {
    popup.classList.remove ('popup__opened');
}
function handleFormSubmit (evt){
    evt.preventDefault(); 
}


openButton.addEventListener("click",openPopup);
popupExit.addEventListener("click",closePopup);