import "./index.css";
import Card from "../script/components/Card";
import FormValidation from "../script/components/FormValidation.js";
import UserInfo from "../script/components/UserInfo.js";
import Section from "../script/components/Section.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import {
  openButtonTypeProfile,
  popupContainer,
  openButtonTypeAddCards,
  data,
  nameInput,
  jobInput,
} from "../script/utils/constants.js";
import { Api } from "../script/components/api.js";

const api = new Api(`https://mesto.nomoreparties.co/v1/cohort-65`);
api.getInitialCards().then((cards) => {
    section.renderItems(cards);
  })
  .then((data) => {
    addCards(data);
  });
const imageProfile=document.querySelector(".profile__avatar")
const openButtonTypeProfileChange = document.querySelector(
  ".profile__avatar-button"
);
function getInfoUser() {
  api
    .getInfo()
    .then((res) => {
      userInfo.setUserInfo(res)
      console.log(res)
    })
    .catch((err) => console.error(err));
}
getInfoUser();


const popupFormProfile = new PopupWithForm({
    renderer: (items) => {
      return api
        .changeProfile(items)
        .then((i) => {
          getInfoUser();
          userInfo.setUserInfo(i);
        }) 
    },
    popupSelector: ".popup_type_profile-change",
  });
  openButtonTypeProfileChange.addEventListener("click", () => {
    popupFormProfile.open();
    
    getInfoUser();
  });
  popupFormProfile.setEventListeners();



//функция создания карточки
const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

const createCard = (items) => {
  const card = new Card(
    {
      cards: items,
      userId: userInfo.getUserId(),
      renderer: () => {
        popupImage.open(items);
      },
      handleLikeButton: () => {
        if (card.isLaked) {
          api.deleteLikes(items._id).then(res=> {
            card.unActktiveLike()
              card.displayLike(res.likes);
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
            api
            .setLikes(items._id)
            .then(res => {
              
              card.activeLike();
              card.displayLike(res.likes);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      },
      handleDeleteCard:(evt)=>{
       deleteCard(items,evt);
      },
      checkLike:()=>{
        return items.likes.some(item=> item._id === userInfo.getUserId())
      }
     
    },
    ".copy__card"
  );
  

  const placeTemplateCopy = card.generateCard();
  return placeTemplateCopy;
};

const section = new Section(
  {
    renderer: (items) => {
      section.addItem(createCard(items));
    },
  },
  ".elements"
);
function deleteCard(card,evt){
  const cardElement=evt.target;
  const popupDeleteCard=new PopupWithForm({
    renderer:()=>{
      cardElement.closest(".card").remove();
      api.deleteCard(card._id)
      },
      popupSelector:".popup_delete-card"
})
popupDeleteCard.setEventListeners();
}


function addCards() {
  const popupForm = new PopupWithForm({
    renderer: (items) => {
      
      section.renderItem(createCard(items));
      return api.addMyCards(items.name, items.link);
    },
    popupSelector: ".popup_type_add-cards",
  });

  openButtonTypeAddCards.addEventListener("click", () => {
    popupForm.open();
  });
  popupForm.setEventListeners();
}
addCards();


const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);
const popupProfile = new PopupWithForm({
  renderer: (data) => {

    return api
    .replaceInfo(data)
    .then((res)=>{
      userInfo.setUserInfo(res);
      getInfoUser(res);});
  },
  popupSelector: ".popup_type_profile",
});
popupProfile.setEventListeners();

openButtonTypeProfile.addEventListener("click", function () {
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().job;
  popupProfile.open();
});

//валидация
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
