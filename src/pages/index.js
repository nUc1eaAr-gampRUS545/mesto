import "./index.css";
import Card from "../script/components/Card";
import FormValidation from "../script/components/FormValidation.js";
import UserInfo from "../script/components/UserInfo.js";
import Section from "../script/components/Section.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import PopupWithSubmit from "../script/components/PopupWithSubmit.js";
import {
  openButtonTypeProfile,
  popupContainer,
  openButtonTypeAddCards,
  data,
  nameInput,
  jobInput,openButtonTypeProfileChange
} from "../script/utils/constants.js";
import { Api } from "../script/components/api.js";

var userID;

const api = new Api({baseURL:`https://mesto.nomoreparties.co/v1/cohort-65`,headers:{
  authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
  'Content-Type': 'application/json'}});
const popupFormProfile = new PopupWithForm({
    renderer: (items) => {
      popupFormProfile.renderLoading(true);
       api
        .changeProfile(items)
        .then((i) => {
          popupFormProfile.close();
          userInfo.setUserInfo(i);
        }).catch((err) => {
          console.error(err);
        }).finally(() => {
          popupFormProfile.renderLoading(false);
        });
    },
    popupSelector: ".popup_type_profile-change",
  });
  openButtonTypeProfileChange.addEventListener("click", () => {
    popupFormProfile.open();
    validationFormTypeChangeAvatar.checkInput();
    popupFormProfile.renderLoading(false);
    
  });
  popupFormProfile.setEventListeners();



const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

const createCard = (items,user) => {
  const card = new Card(
    { cards: items,
     userId:user,
      renderer: () => {
        popupImage.open(items);
      },
      handleLikeButton: () => {
        if (card.isLaked) {
          api.deleteLikes(items._id).then(res=> {
            card.unActiveLike()
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
        popupWithConfirmation.open();
        const cardElement=evt.target;
        popupWithConfirmation.setSubmitAction(() => { 
              api.deleteCard(items._id)
              .then(()=>{
              cardElement.closest(".card").remove();
              popupWithConfirmation.close();})
              .catch((err) => { 
              console.error('Ошибка - '+err)
              }).finally(()=>{console.info('Карточка удалена')})
            })
      },
      templateSelector:".copy__card"})
  const placeTemplateCopy = card.generateCard();
  return placeTemplateCopy;
};

const section = new Section(
  {
    renderer: (items,user) => {
      section.addItem(createCard(items,user));
    },
  },
  ".elements"
);

const popupForm = new PopupWithForm({
    renderer: (items) => {
      popupForm.renderLoading(true)
      api.addMyCards(items.name, items.link).then((res)=>{section.addItem(createCard(res,userInfo.getUserId()));popupForm.close();}).catch((err)=>{
        console.error('Ошибка - '+err)
      }).finally(()=>{
        popupForm.renderLoading(false);
        console.info('Карточка добавлена!!!!');
        })
    },
    popupSelector: ".popup_type_add-cards",
  });

  
popupForm.setEventListeners();

openButtonTypeAddCards.addEventListener("click", () => {
  validationFormTypeAddCard.checkInput();
  popupForm.renderLoading(false)
    popupForm.open()
});


const userInfo = new UserInfo(
  ".profile__name",
  ".profile__job",
  ".profile__avatar"
);
const popupProfile = new PopupWithForm({
  renderer: (data) => {
    popupProfile.renderLoading(true);
    api
    .replaceInfo(data)
    .then((res)=>{
      popupProfile.renderLoading(true);
      userInfo.setUserInfo(res);
      popupProfile.close()
    }).catch((res)=>{console.log(res)}).finally(()=>{
        
        popupProfile.renderLoading(false)})
      
  },
  popupSelector: ".popup_type_profile",
});
popupProfile.setEventListeners();

openButtonTypeProfile.addEventListener("click", function () {
  nameInput.value = userInfo.getUserInfo().name;
  popupProfile.renderLoading(false);
  validationFormTypeProfile.checkInput();
  jobInput.value = userInfo.getUserInfo().job;
  popupProfile.open();
});

//валидация
const validationFormTypeAddCard = new FormValidation(
  data,
  ".popup__content_type_add-cards"
);
validationFormTypeAddCard.enableValidation();
const validationFormTypeProfile = new FormValidation(
  data,
  ".popup__content_type_profile"
);
validationFormTypeProfile.enableValidation();

const validationFormTypeChangeAvatar=new FormValidation(
  data,
  ".popup_type_profile-change"
);
validationFormTypeChangeAvatar.enableValidation();
Promise.all([api.getInitialCards(),api.getInfo()])

  .then(([cards,userData]) => {
    section.renderItems(cards,userData._id);
    userInfo.setUserInfo(userData);
    
  }) .catch((err) => console.error(err))

  const popupWithConfirmation = new PopupWithSubmit(".popup_delete-card");
popupWithConfirmation.setEventListeners();

