const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const openButton = document.querySelector('.profile__editbutton');
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

function Submit(evt) {
  evt.preventDefault();
  getInput.textContent = nameInput.value;
  getJob.textContent = jobInput.value;
  closePopup();
}
openButton.addEventListener('click', openPopup);
popupExit.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', Submit);
