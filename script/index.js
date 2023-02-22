const popup = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup__window');
const openButton = document.querySelector('.profile__edit-button');
const popupExit = document.querySelector('.popup__exit');
const getInput = document.querySelector('.profile__name');
const getJob = document.querySelector('.profile__job');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = getInput.textContent;
  jobInput.value = getJob.textContent;
}
function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  getInput.textContent = nameInput.value;
  getJob.textContent = jobInput.value;
  closePopup();
}
openButton.addEventListener('click', openPopup);
popupExit.addEventListener('click', closePopup);
popupWindow.addEventListener('submit',handleFormSubmit);
