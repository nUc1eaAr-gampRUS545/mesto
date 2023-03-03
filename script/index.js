const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__content");
const openButton = document.querySelector(".profile__edit-button");
const popupExit = document.querySelector(".popup__exit");
const getInput = document.querySelector(".profile__name");
const getJob = document.querySelector(".profile__job");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = getInput.textContent;
  jobInput.value = getJob.textContent;
}
function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  getInput.textContent = nameInput.value;
  getJob.textContent = jobInput.value;
  closePopup();
}
openButton.addEventListener("click", openPopup);
popupExit.addEventListener("click", closePopup);
popupContainer.addEventListener("submit", handleFormSubmit);

let elements = document.querySelector(".elements");
let cards = [
  {
    name: "Cabo da Roca",
    image: "./images/card/Cabo_da_Roca.jpg"
  },
  {
    name: "Hoover Dam",
    image: "./images/card/Hoover_Dam.jpg",
  },
  {
    name: "Mont-Fallère",
    image: "./images/card/Mont-Fallère.jpg"
  },
  {
    name: "Grindelwald",
    image: "./images/card/Grindewald.jpg"
  },
  {
    name: "Kabardinka",
    image: "./images/card/olga-nayda-5w8we0Nw8CU-unsplash.jpg"

  },
  { name: "Elbrus", image: "./images/card/Elbrus.jpg"},
];

function createCard(card) {
  let newCard = document.querySelector(".copy__card").content.cloneNode(true);//копируем template заготовку
  let popupImage = newCard.querySelector(".card__photography");//обращаемся и записываем в переменную фотографию из карточки
  let like = newCard.querySelector(".card__button");//обращаемся и записываем в переменную кнопку лайка из карточки
  
  //активация кнопки лайка
  like.addEventListener('click', unlike);//навешиваем слушателя на кнопку лайка
  function unlike(evt){
    let unlike=evt.target;//определяем какую именно кнопку мы нажимаем на странице
    unlike.classList.toggle('card__button_active');//при нажатии на кнопку удаляем нынешний класс, и добавляем новый, при повторном нажатии возращаем предыдуший класс, удалив нынешний
  };
  //запись значений из массива
  popupImage.setAttribute("src", card.image);//присваиваем атрибут src в переменную popupImage аргумент из массива под ключом image
  newCard.querySelector(".card__photography").setAttribute("alt", card.name);//присваиваем атрибут alt в переменную popupImage аргумент из массива под ключом name
  newCard.querySelector(".card__title").textContent = card.name;//перезаписываем  card__title значение аргумента саrd из массива под ключом name
  
  //навешиваем слушателя на кнопку "корзина" и обращаемся к функции удаления карточки
  let bascket = newCard.querySelector(".card__bascket");//обращаемся и записываем в переменную кнопку "корзина" из карточки
  bascket.addEventListener("click", deleteCard);//навешиваем слушателя на кнопку корзины

  //добавляем в блок elements новую карточку
  elements.append(newCard);

  //открываем пупап тип-изображение 
  popupImage.addEventListener("click", Card);//навешиваем слушателя на фотографию из карточки
  let popupImageExit = document.querySelector(".popup__exit_type_image");//обращаемся и записываем в переменную кнопку выйти("крестик")
  popupImageExit.addEventListener("click", function () {//навешиваем слушателя на кнопку выйти
  document.querySelector(".popup_type_image").classList.remove("popup_opened");});//при нажати на кнопку выйти, удаляем модификатор, открывающий пупап
function Card(evt) {
  let image = document.querySelector(".popup__image_type_image");//обращаемся и записываем в переменную фотографию из пупапа
  image.src = evt.target.src;//передаем url фотографии пупапа из нажатой фотографии из карточки
  let popupTitle = document.querySelector(".popup__title_type_image");//обращаемся и записываем в переменную подпись под картинкой пупапа
  popupTitle.textContent = evt.target.alt;//передаем в переменную подпись значение атрибута alt  пупапа из нажатой фотографии из карточки
  document.querySelector(".popup_type_image").classList.add("popup_opened");//добавляем пупапу модификатор, открывающий его настранице
 
}
}
cards.forEach(createCard);//зацикливаем функцию createCard для каждого элемента массива cards
function deleteCard(evt) {
  let bascket = evt.target;//определяем, на какую именно корзину мы нажали
  let card = bascket.closest(".card");//определяем ближайшее значение со значением ".card"
  card.remove();//удаляем эту карточку
}
function openAddCard() {
  let popup = document.querySelector(".popup__addcards");//обращаемся и записываем в переменную пупап "добавление карточки"
  popup.classList.add("popup_opened");
}
function closeAddCard() {
  let popup = document.querySelector(".popup__addcards");
  popup.classList.remove("popup_opened");
}
let closePopupAddCards = document.querySelector(".popup__exit-addcards");
let buttonPopupAddCard = document.querySelector(".profile__button");
buttonPopupAddCard.addEventListener("click", openAddCard);
closePopupAddCards.addEventListener("click", closeAddCard);
function handleSubmitcard(evt) {
  evt.preventDefault();
  let name = document.querySelector("#place_input").value;
  let image = document.querySelector("#image-url_input").value;
  let card = { image: image, name: name };
  createCard(card);
  closeAddCard();
}
let saveAddCard = document.querySelector(".form");
saveAddCard.addEventListener("submit", handleSubmitcard);


let like = document.querySelector(".card__button");

