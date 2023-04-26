const openButtonTypeProfile = document.querySelector(".profile__edit-button");
const profilePopup=document.querySelector(".popup_type_profile")
const popupContainer = profilePopup.querySelector(".popup__content");
const openButtonTypeAddCards = document.querySelector(".profile__button");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
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
  const data=
  {
  inputSelector:".popup__input",
  errorStr:".popup__message-error_",
  submitButonSelector:".popup__saved",
  popupInputErrorClass:"popup__input-error",
  invalidSubmitButtonClass:"popup__saved-invalid",
  popupInputInvalidClass:"popup__input-invalid"};
  export {openButtonTypeProfile,popupContainer,openButtonTypeAddCards,cards,data,nameInput,jobInput}