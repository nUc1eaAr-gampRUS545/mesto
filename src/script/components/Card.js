
export default class Card {
  #templateSelector;
  #name;
  #image;
  #element;
  #userID;
  #cardImage;
  #cardLikeButton;
  #cardBascketButton;
  #likesCounter;
  #cardLikes;
  #cardUserID;
  #cardID;
  #cards;
  constructor(
    { cards, userId, renderer, handleLikeButton, handleDeleteCard,
    templateSelector}
  ) {
    this.#templateSelector = templateSelector;
    this.#name = cards.name;
    this.#cards = cards;
    this.#cardID = cards._id;
    this.#cardUserID = cards.owner._id;
    this.#userID = userId;
    this.#image = cards.link;
    this.#cardLikes = cards.likes;
    this._renderer = renderer;
    this._handleLikeButton = handleLikeButton;
    this._handleDeleteCard = handleDeleteCard;
    this.#element = this._getTemplate();
    this.#likesCounter = this.#element.querySelector("#countLikes"); 
   
  }
  _getTemplate() {
    const newCard = document
      .querySelector(this.#templateSelector)
      .content.cloneNode(true);
    return newCard;
  }

  _deleteCard(evt) {
    evt.target.closest(".card").remove();
  }

  _setAttribute() {
    this.#cardLikeButton = this.#element.querySelector(".card__button");
    this.#cardBascketButton = this.#element.querySelector(".card__bascket");
    
    this.#cardImage.addEventListener("click", () => {
      this._renderer();
    });
    
    this.#cardLikeButton.addEventListener("click", () => {
      this._handleLikeButton(this.#cards);
    });
    
    this.#cardBascketButton.addEventListener("click", (evt) => {
      this._handleDeleteCard(evt);
      document.querySelector(".popup_delete-card").classList.add("popup_opened");
    });
  }
 
 _checkLike(){
  if (this.#cards.likes.some(elem =>  this.#userID === elem._id)) {
    this.activeLike()
   }
   else{
    this.unActiveLike()
   }}
  
  activeLike() {
    this.isLaked=true;
    this.#cardLikeButton.classList.add("card__button_active");
  }
  unActiveLike() {
    this.isLaked=false;
    this.#cardLikeButton.classList.remove("card__button_active");
  }
  _checkBascket() {
    console.log(this.#cardUserID)
console.log(this.#userID+"   это яяя")
    if (this.#cardUserID===this.#userID) {
      this.#cardBascketButton.style.display = "block";
    }
  }
  displayLike(res) {
    this.number=res;
    if(this.number==0){
      this.#likesCounter.textContent="";
    }
    else{
    this.#likesCounter.textContent = this.number.length;}
    
  }
  generateCard() {
    this.#cardImage = this.#element.querySelector(".card__photography");
    this.#cardImage.setAttribute("src", this.#image);
    this.#cardImage.setAttribute("alt", this.#name);
    this._setAttribute();
    this._checkBascket();
    this._checkLike()
    this.displayLike(this.#cardLikes);
    this.#element.querySelector(".card__title").textContent = this.#name;
    return this.#element;
  }
  
}
