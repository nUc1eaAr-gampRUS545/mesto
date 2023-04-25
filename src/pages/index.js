import "./index.css";
import  Card  from '../script/Card.js';
import  FormValidation  from '../script/FormValidation.js';
import  UserInfo  from "../script/UserInfo.js";
import  Section  from "../script/Section.js";
import Popup from '../script/Popup.js';
import PopupWithForm from '../script/PopupWithForm.js';
import PopupWithImage from "../script/PopupWithImage.js";
const openButton = document.querySelector(".profile__edit-button");
const profilePopup = document.querySelector(".popup_type_profile");
const popupContainer = profilePopup.querySelector(".popup__content");
const popupButton = document.querySelector(".profile__button");

const popup = new Popup(".popup_type_add-cards");


 /* const cards = [
    {
      name: "Cabo da Roca",
      image: "<%=require('./images/card/Cabo_da_Roca.jpg')%>",
    },
    {
      name: "Hoover Dam",
      image: "<%=require('./images/card/Hoover_Dam.jpg')%>",
    },
    {
      name: "Mont-Fallère",
      image: "<%=require('./images/card/Mont-Fallère.jpg')%>",
    },
    {
      name: "Grindelwald",
      image: "<%=require('./images/card/Grindewald.jpg')%>",
    },
    {
      name: "Kabardinka",
      image:  "<%=require('./images/card/olga-nayda-5w8we0Nw8CU-unsplash.jpg')%>",
    },
    { name: "Elbrus", image:"<%=require('./images/card/Elbrus.jpg')%>" }, ];*/
  
  const cards = [
    {
      name: "Cabo da Roca",
      image: "https://clck.ru/34FDbv",
    },
    {
      name: "Hoover Dam",
      image: "https://clck.ru/34FDdq",
    },
    {
      name: "Mont-Fallère",
      image: "https://clck.ru/34FDfc",
    },
    {
      name: "Grindelwald",
      image: "https://clck.ru/34FDiw",
    },
    {
      name: "Kabardinka",
      image: "https://clck.ru/34FDhL",
    },
    {
      name: "Elbrus",
      image: "https://clck.ru/34FDkG",
    },
  ];

const createCard=(items)=> {
  const card = new Card({cards:items,
    renderer: ()=>{popupImage.open(items)}},".copy__card");
  const placeTemplateCopy = card.generateCard();
  return placeTemplateCopy;
}
const popupImage=new PopupWithImage(".popup_type_image");


const section = new Section({
    data: cards,
   renderer: (cards)=>{section.addItem(createCard(cards))}},".elements")

section.renderItems();    

const PopupForm=new PopupWithForm({renderer:(cards)=>{
  section.renderItem(cards)},popupSelector:".popup_type_add-cards"})
  popupButton.addEventListener("click",()=>{
    PopupForm.setEventListeners();
  })
popupImage.setEventListeners();
popup.setEventListeners();



const popupProfile=new Popup(".popup_type_profile");
const userInfo = new UserInfo(".profile__name", ".profile__job");
function handleFormSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo();
  popupProfile.close();
}

openButton.addEventListener("click", function () {
  userInfo.getUserInfo();
  
  popupProfile.setEventListeners();
  popupProfile.open();
});
popupContainer.addEventListener("submit", handleFormSubmit);

const data=
  {
  inputSelector:".popup__input",
  errorStr:".popup__message-error_",
  submitButonSelector:".popup__saved",
  popupInputErrorClass:"popup__input-error",
  invalidSubmitButtonClass:"popup__saved-invalid",
  popupInputInvalidClass:"popup__input-invalid"};
  
  const ValidationFormTypeAddCard = new FormValidation(data,".popup__content_type_add-cards");
  ValidationFormTypeAddCard.enableValidation();
  const ValidationFormTypeProfile = new FormValidation(data,".popup__content_type_profile");
  ValidationFormTypeProfile.enableValidation();








/*import { Card } from "./Card.js";
import { FormValidation } from "./FormValidation.js";
import { Popup } from "./Popup.js";
import { UserInfo } from "./UserInfo.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";

const profilePopup = document.querySelector(".popup_type_profile");
const popupContainer = profilePopup.querySelector(".popup__content");
const openButton = document.querySelector(".profile__edit-button");

const elements = document.querySelector(".elements");

const zoomImg = document.querySelector(".popup__image"); //обращаемся и записываем в переменную фотографию из пупапа
const popupTitleZoomImage = document.querySelector(".popup__caption"); //обращаемся и записываем в переменную подпись под картинкой пупапа
const popupTypeImage = document.querySelector(".popup_type_image");

const popupTypeAddCards = document.querySelector(".popup_type_add-cards");
const buttonPopupAddCard = document.querySelector(".profile__button");

const buttonSavedAddCard = document.querySelector(
  ".popup__saved_type_add-cards"
);
const saveAddCard = document.querySelector(".popup_type_add-cards"); //обращаемся и записываем в переменную блока форм
const nameInputTypeAddCards = document.querySelector("#text"); //считывание информации с формы в переменную
const imageInputTypeAddCards = document.querySelector("#url"); //считывание информации с формы в переменную

const PopupImage = new PopupWithImage(".popup_type_image");


const setEventListener = new Popup(".popup_type_add-cards");
setEventListener.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__job");
function handleFormSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo();
  setEventListener.close(profilePopup);
}
openButton.addEventListener("click", function () {
  userInfo.getUserInfo();
  setEventListener.open(profilePopup);
});
popupContainer.addEventListener("submit", handleFormSubmit);

/*const cards = [
  {
    name: "Cabo da Roca",
    image: "<%=require('./images/card/Cabo_da_Roca.jpg')%>",
  },
  {
    name: "Hoover Dam",
    image: "<%=require('./images/card/Hoover_Dam.jpg')%>",
  },
  {
    name: "Mont-Fallère",
    image: "<%=require('./images/card/Mont-Fallère.jpg')%>",
  },
  {
    name: "Grindelwald",
    image: "<%=require('./images/card/Grindewald.jpg')%>",
  },
  {
    name: "Kabardinka",
    image:  "<%=require('./images/card/olga-nayda-5w8we0Nw8CU-unsplash.jpg')%>",
  },
  { name: "Elbrus", image:"<%=require('./images/card/Elbrus.jpg')%>" }, ];

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
  {
    name: "Elbrus",
    image: "./images/card/Elbrus.jpg",
  },
];

const cardList = new 


const cardList = new Section(
  {
    data: cards,
    renderer: () => {
      const card = new Card(
        {
          cards: cards,
          handleCardClick: () => {
           
          },
        },
        ".copy__card"
      );

      const placeTemplateCopy = card.generateCard();
      createCard.addItem(placeTemplateCopy);
    },
  },
  ".elements"
);
cardList.renderItems();

saveAddCard.addEventListener("submit", handleSubmitcard);

function handleSubmitcard(evt) {
  const newName = nameInputTypeAddCards.value;
  const newImage = imageInputTypeAddCards.value;
  evt.preventDefault(); //отмена отправки сохранения сайта
  const newCard = { image: newImage, name: newName }; //создание объекта с информацией из формы
  cardList.renderItem(newCard); //вызов функции с новым объектом в аргументе
  setEventListener.close(popupTypeAddCards); //вызов функции закрытия формы
  evt.target.reset();
}

const data = {
  inputSelector: ".popup__input",
  errorStr: ".popup__message-error_",
  submitButonSelector: ".popup__saved",
  popupInputErrorClass: "popup__input-error",
  invalidSubmitButtonClass: "popup__saved-invalid",
  popupInputInvalidClass: "popup__input-invalid",
};

const ValidationFormTypeAddCard = new FormValidation(
  data,
  ".popup__content_type_add-cards"
);
ValidationFormTypeAddCard.enableValidation();
const ValidationFormTypeProfile = new FormValidation(
  data,
  ".popup__content_type_profile"
);
ValidationFormTypeProfile.enableValidation();

export { zoomImg, popupTitleZoomImage, popupTypeImage };*/
