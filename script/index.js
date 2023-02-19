const popup=document.querySelector(".popup");
const openButton=document.querySelector(".profile__editButton_act");
const popupExit=document.querySelector(".popup__exit");
const getInput=document.querySelector(".profile__name");
const getJob=document.querySelector(".profile__job");
const nameInput=document.querySelector(".popup__input-name");
const jobInput=document.querySelector(".popup__input-job");
const popupSaved=document.querySelector(".popup__saved");
const form=document.querySelector(".popup__form")
console.log(popupSaved)
function openPopup () {
    popup.classList.add ('popup__opened');
    nameInput.value= getInput.textContent;
    jobInput.value=getJob.textContent;
  }
  
function closePopup ()  {
    popup.classList.remove ('popup__opened');}

function handleFormSubmit () {
    getInput.textContent = nameInput.value;
    getJob.textContent = jobInput.value;
    closePopup();
}
openButton.addEventListener("click",openPopup);
popupExit.addEventListener("click",closePopup);
popupSaved.addEventListener("click", handleFormSubmit); 
