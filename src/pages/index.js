import "./index.css";
import  Card  from '../script/components/Card';
import  FormValidation  from '../script/components/FormValidation.js';
import  UserInfo  from "../script/components/UserInfo.js";
import  Section  from "../script/components/Section.js";
import PopupWithForm from '../script/components/PopupWithForm.js';
import PopupWithImage from "../script/components/PopupWithImage.js";
import {openButtonTypeProfile,popupContainer,openButtonTypeAddCards,cards,data,nameInput,jobInput} from "../script/utils/constants.js"


//функция создания карточки
const popupImage=new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();
const createCard=(items)=> {
  const card = new Card({cards:items,
    renderer: ()=>{popupImage.open(items);
    }},".copy__card");
  const placeTemplateCopy = card.generateCard();
  return placeTemplateCopy;
}

const section = new Section({
    data: cards,
   renderer: (cards)=>{
    section.addItem(createCard(cards))}},".elements");

section.renderItems();    

const popupForm=new PopupWithForm({renderer:(cards)=>{
  section.addItem(createCard(cards))
  popupForm.close();
},
  popupSelector:".popup_type_add-cards"});
openButtonTypeAddCards.addEventListener("click",()=>{
  popupForm.open();
})
popupForm.setEventListeners();

//работа с поп ап тайп профиль 
const userInfo = new UserInfo(".profile__name", ".profile__job");
const popupProfile=new PopupWithForm({renderer:(data)=>{
  userInfo.setUserInfo({
    userName:data.name,
    userJob:data.job
  })
  popupProfile.close();

},popupSelector:".popup_type_profile"});
popupProfile.setEventListeners();
openButtonTypeProfile.addEventListener("click", function () {
  userInfo.getUserInfo();
  const userContent=userInfo.getUserInfo();
  nameInput.value=userContent.name;
  jobInput.value=userContent.job;
  popupProfile.open();

});

//валидация
  const ValidationFormTypeAddCard = new FormValidation(data,".popup__content_type_add-cards");
  ValidationFormTypeAddCard.enableValidation();
  const ValidationFormTypeProfile = new FormValidation(data,".popup__content_type_profile");
  ValidationFormTypeProfile.enableValidation();