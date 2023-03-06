
const popupExit = document.querySelectorAll(".popup__exit");
const profilePopup = document.querySelector(".popup_type_profile");
const popupContainer = document.querySelector(".popup__content_type_profile");
const openButton = document.querySelector(".profile__edit-button");

const getInput = document.querySelector(".profile__name");
const getJob = document.querySelector(".profile__job");
const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");

const elements = document.querySelector(".elements");

const TemplateBlock=document.querySelector(".copy__card")
const zoomImg = document.querySelector(".popup__image"); //обращаемся и записываем в переменную фотографию из пупапа
const popupTitleZoomImage = document.querySelector(".popup__caption"); //обращаемся и записываем в переменную подпись под картинкой пупапа
const popupTypeImage = document.querySelector(".popup_type_image");

const popupTypeAddCards = document.querySelector(".popup_type_add-cards");
const buttonPopupAddCard = document.querySelector(".profile__button");

const saveAddCard = document.querySelector(".popup_type_add-cards"); //обращаемся и записываем в переменную блока форм
const nameInputTypeAddCards= document.querySelector("#placeInput"); //считывание информации с формы в переменную
const imageInputTypeAddCards = document.querySelector("#imageUrlInput"); //считывание информации с формы в переменную
popupExit.forEach(function(button){
  const del=button.closest(".popup");
  button.addEventListener("click",function(){
    closePopup(del);
  });
});
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  getInput.textContent = nameInput.value;
  getJob.textContent = jobInput.value;
  closePopup(profilePopup);
}
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
  { name: "Elbrus", image: "./images/card/Elbrus.jpg" },
];

//функция создания карточек
function createCard(card) {
  const newCard = TemplateBlock.content.cloneNode(true); //копируем template заготовку
  const cardImage = newCard.querySelector(".card__photography"); //обращаемся и записываем в переменную фотографию из карточки
  const like = newCard.querySelector(".card__button"); //обращаемся и записываем в переменную кнопку лайка из карточки
  const bascket = newCard.querySelector(".card__bascket"); //обращаемся и записываем в переменную кнопку "корзина" из карточки
  
  cardImage.addEventListener("click",enlargeImage); //навешиваем слушателя на фотографию из карточки
  like.addEventListener("click",activateLike); //навешиваем слушателя на кнопку лайка
  bascket.addEventListener("click", deleteCard); //навешиваем слушателя на кнопку корзины

  cardImage.setAttribute("src", card.image); //присваиваем атрибут src в переменную cardImage аргумент из массива под ключом image
  newCard.querySelector(".card__photography").setAttribute("alt", card.name); //присваиваем атрибут alt в переменную cardImage аргумент из массива под ключом name
  newCard.querySelector(".card__title").textContent = card.name; //перезаписываем  card__title значение аргумента саrd из массива под ключом name
  return newCard;
}
function addInitialPlaces(place) {
  const placeTemplateCopy = createCard(place);//передаем в переменную созданную картинку
  elements.prepend(placeTemplateCopy);//закидываем в DOM созданную картинку
}
cards.forEach(addInitialPlaces);//проделываем эту функцию с каждым объектом коллекции cards

//функция  активации кнопки лайка
function activateLike(evt) {
  const unlike = evt.target; //определяем какую именно кнопку мы нажимаем на странице
  unlike.classList.toggle("card__button_active"); //при нажатии на кнопку удаляем нынешний класс, и добавляем новый, при повторном нажатии возращаем предыдуший класс, удалив нынешний
}

//функция удаления карточек
function deleteCard(evt) {
  const bascket = evt.target; //определяем, на какую именно корзину мы нажали
  const deleteCard = bascket.closest(".card"); //определяем ближайшее значение со значением ".card"
  deleteCard.remove(); //удаляем эту карточку
}




//открываем пупап тип-изображение
function enlargeImage(evt) {
  zoomImg.src = evt.target.src; //передаем url фотографии пупапа из нажатой фотографии из карточки
  zoomImg.alt = evt.target.alt; //передаем alt фотографии пупапа из нажатой фотографии из карточки
  popupTitleZoomImage.textContent = evt.target.alt; //передаем в переменную подпись значение атрибута alt  пупапа из нажатой фотографии из карточки
  openPopup(popupTypeImage); //добавляем пупапу модификатор, открывающий его настранице
}




//пупап для добовления карточек
buttonPopupAddCard.addEventListener("click", function () {
  openPopup(popupTypeAddCards);}); //навешиваем слушателя на кнопку добавления карточек и при нажатии открываем пупап для добовления карточек

saveAddCard.addEventListener("submit", handleSubmitcard); ////навешиваем слушателя на кнопку сохранить

//функция "сохранения" для кнопки сохранить для пупапа создания карточек
function handleSubmitcard(evt) {
  const newName=nameInputTypeAddCards.value;
  const newImage=imageInputTypeAddCards.value;
  evt.preventDefault(); //отмена отправки сохранения сайта
  if (newName == 0 || newImage == 0) {
    closePopup(popupTypeAddCards); //если в формы ничего не введенно, закрываем пупап и не создаем карточку
  } else {
    const newCard = { image: newImage, name: newName }; //создание объекта с информацией из формы
    addInitialPlaces(newCard); //вызов функции с новым объектом в аргументе
    closePopup(popupTypeAddCards); //вызов функции закрытия формы
    evt.target.reset();
    evt.target.reset();
  }
}
