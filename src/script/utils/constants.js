const openButtonTypeProfile = document.querySelector(".profile__edit-button");
const profilePopup=document.querySelector(".popup_type_profile")
const popupContainer = profilePopup.querySelector(".popup__content");
const openButtonTypeAddCards = document.querySelector(".profile__button");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const openButtonTypeProfileChange = document.querySelector(
  ".profile__avatar-button");
  const data=
  {
  inputSelector:".popup__input",
  errorStr:".popup__message-error_",
  submitButonSelector:".popup__saved",
  popupInputErrorClass:"popup__input-error",
  invalidSubmitButtonClass:"popup__saved-invalid",
  popupInputInvalidClass:"popup__input-invalid"};
  export {openButtonTypeProfile,popupContainer,openButtonTypeAddCards,data,nameInput,jobInput,openButtonTypeProfileChange}