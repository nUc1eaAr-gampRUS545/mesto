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

const api = new Api({baseURL:`https://mesto.nomoreparties.co/v1/cohort-65`,headers:{
  authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
  'Content-Type': 'application/json'}});

function getInfoUser() {
    api
      .getInfo()
      .then((res) => {
        userInfo.setUserInfo(res)
        
      })
      .catch((err) => console.error(err));
  }
function initialCard(){
  api
  .getInitialCards()
  .then((res) => {
    section.addItem(createCard(res[0]));
  })
  .catch((err) => console.error(err));

}
const popupFormProfile = new PopupWithForm({
    renderer: (items) => {
      popupFormProfile.renderLoading(true);
       api
        .changeProfile(items)
        .then((i) => {
          popupFormProfile.close();
          //getInfoUser();
          userInfo.setUserInfo(i);
        }).catch((err) => {
          console.error(err);
        }).finally(() => {
          popupWithProfileForm.renderLoading(false);
        });
    },
    popupSelector: ".popup_type_profile-change",
  });
  openButtonTypeProfileChange.addEventListener("click", () => {
    popupFormProfile.open();
    popupFormProfile.renderLoading(false);
    getInfoUser();
  });
  popupFormProfile.setEventListeners();



const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

const createCard = (items) => {
  const card = new Card(
    { cards: items,
      userId: 'bc0363b9087060d2af931731',
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
    renderer: (items) => {
      section.addItem(createCard(items));
    },
  },
  ".elements"
);
/*function deleteCard(card,evt){
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
*/


const popupForm = new PopupWithForm({
    renderer: (items) => {
      popupForm.renderLoading(true)
      api.addMyCards(items.name, items.link).then(initialCard()).catch((err)=>{
        console.error('Ошибка - '+err)
      }).finally(()=>{
        popupForm.renderLoading(false);
        console.info('Карточка добавлена!!!!');
        popupForm.close();})
      //section.renderItem(createCard(items));
    },
    popupSelector: ".popup_type_add-cards",
  });

  
popupForm.setEventListeners();

openButtonTypeAddCards.addEventListener("click", () => {
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
      getInfoUser(res);}).catch((res)=>{console.log(res)}).finally(()=>{
        popupProfile.close()
        popupProfile.renderLoading(false)})
      
  },
  popupSelector: ".popup_type_profile",
});
popupProfile.setEventListeners();

openButtonTypeProfile.addEventListener("click", function () {
  nameInput.value = userInfo.getUserInfo().name;
  popupProfile.renderLoading(false);
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
Promise.all([api.getInitialCards(),api.getInfo()])

  .then(([cards,userData]) => {
    section.renderItems(cards);
    userInfo.setUserInfo(userData);

  }) .catch((err) => console.error(err))

  const popupWithConfirmation = new PopupWithSubmit(".popup_delete-card");
popupWithConfirmation.setEventListeners();

