import { Card } from './Card.js';
import { FormValidation } from './FormValidation.js';

const popups = Array.from(document.querySelectorAll(".popup"));
const popupExitButtons = document.querySelectorAll(".popup__exit");
const profilePopup = document.querySelector(".popup_type_profile");
const popupContainer = profilePopup.querySelector(".popup__content");
const openButton = document.querySelector(".profile__edit-button");

const getInput = document.querySelector(".profile__name");
const getJob = document.querySelector(".profile__job");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");

const elements = document.querySelector(".elements");

const zoomImg = document.querySelector(".popup__image"); //обращаемся и записываем в переменную фотографию из пупапа
const popupTitleZoomImage = document.querySelector(".popup__caption"); //обращаемся и записываем в переменную подпись под картинкой пупапа
const popupTypeImage = document.querySelector(".popup_type_image");

const popupTypeAddCards = document.querySelector(".popup_type_add-cards");
const buttonPopupAddCard = document.querySelector(".profile__button");



const buttonSavedAddCard = document.querySelector(".popup__saved_type_add-cards");
const saveAddCard = document.querySelector(".popup_type_add-cards"); //обращаемся и записываем в переменную блока форм
const nameInputTypeAddCards= document.querySelector("#text"); //считывание информации с формы в переменную
const imageInputTypeAddCards = document.querySelector("#url"); //считывание информации с формы в переменную


popupExitButtons.forEach(function(button){
  const del=button.closest(".popup");
  button.addEventListener("click",function(){
    closePopup(del);
  });
})

popups.forEach(function(popup){
  popup.addEventListener('click', function (evt) {
    if(evt.target.classList.contains("popup")){
      closePopup(popup);
    }
  });
});



function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') 
    closePopup(openedPopup)
    
  }
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown",closeByEscape);
};
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown",closeByEscape);
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  getInput.textContent = nameInput.value;
  getJob.textContent = jobInput.value;
  closePopup(profilePopup);
};
openButton.addEventListener("click", function () {
  nameInput.value = getInput.textContent;
  jobInput.value = getJob.textContent;
  openPopup(profilePopup);
});
popupContainer.addEventListener("submit", handleFormSubmit);

const cards = [
  {
    name: "Cabo da Roca",
    image: "./images/card/Cabo_da_Roca.jpg",
  },
  {
    name: "Hoover Dam",
    image: "./images/card/Hoover_Dam.jpg",
  },
  {
    name: "Mont-Fallère",
    image: "./images/card/Mont-Fallère.jpg",
  },
  {
    name: "Grindelwald",
    image: "./images/card/Grindewald.jpg",
  },
  {
    name: "Kabardinka",
    image: "./images/card/olga-nayda-5w8we0Nw8CU-unsplash.jpg",
  },
  { name: "Elbrus", image: "./images/card/Elbrus.jpg" }, ];


function addInitialPlaces(item) {
  const card = new Card(item,".copy__card");
  
  const placeTemplateCopy= card.generateCard();//передаем в переменную созданную картинку
  elements.prepend(placeTemplateCopy);//закидываем в DOM созданную картинку
}
cards.forEach((i)=>{
  addInitialPlaces(i);
});//проделываем эту функцию с каждым объектом коллекции cards

//пупап для добовления карточек
buttonPopupAddCard.addEventListener("click", function () {
  openPopup(popupTypeAddCards);
  const FormValidation1=new FormValidation(data);
FormValidation1.enableValidation();
}); //навешиваем слушателя на кнопку добавления карточек и при нажатии открываем пупап для добовления карточек

saveAddCard.addEventListener("submit", handleSubmitcard); ////навешиваем слушателя на кнопку сохранить

//функция "сохранения" для кнопки сохранить для пупапа создания карточек
function handleSubmitcard(evt) {
  const newName=nameInputTypeAddCards.value;
  const newImage=imageInputTypeAddCards.value;
  evt.preventDefault(); //отмена отправки сохранения сайта
    const newCard = { image: newImage, name: newName }; //создание объекта с информацией из формы
    addInitialPlaces(newCard); //вызов функции с новым объектом в аргументе
    closePopup(popupTypeAddCards); //вызов функции закрытия формы
    evt.target.reset();
    buttonSavedAddCard.classList.add('popup__saved-invalid');
    buttonSavedAddCard.disabled=true;
}

const data=
  {
  inputSelector:".popup__input",
  errorStr:".popup__message-error_",
  submitButonSelector:".popup__saved",
  popupInputErrorClass:"popup__input-error",
  invalidSubmitButtonClass:"popup__saved-invalid",
  popupInputInvalidClass:"popup__input-invalid"};
  
  const ValidationFormTypeAddCard = new FormValidation(data,".popup__content_type_add-cards");
  const ValidationFormTypeProfile = new FormValidation(data,".popup__content_type_profile");
  ValidationFormTypeAddCard.enableValidation();
  ValidationFormTypeProfile.enableValidation();

  
  

 