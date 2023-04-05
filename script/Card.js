
export class Card {
    #templateSelector;
    #name;
    #image;
    #element;
    #cardImage;
    #cardLikeButton;
    #cardBascketButton;
    constructor(cards,templateSelector){
        this.#templateSelector=templateSelector;
        this.#name=cards.name;
        this.#image=cards.image;
    }
    _getTemplate(){
        const newCard = document.querySelector(this.#templateSelector).content.cloneNode(true);
        return newCard;
    }

    _activateLike(evt) {
        const unlike = evt.target; 
        unlike.classList.toggle("card__button_active"); 
      }
    
    _deleteCard(evt) {
        const bascket = evt.target; 
        const deleteCard = bascket.closest(".card"); 
        deleteCard.remove(); 
      } 

    _enlargeImage(evt) {
        this.zoomImg = document.querySelector(".popup__image");
        this.popupTitleZoomImage = document.querySelector(".popup__caption"); //обращаемся и записываем в переменную подпись под картинкой пупапа
        this.popupTypeImage = document.querySelector(".popup_type_image"); 
        this.zoomImg.src = evt.target.src; 
        this.zoomImg.alt = evt.target.alt; 
        this.popupTitleZoomImage.textContent = evt.target.alt; 
        this.popupTypeImage.classList.add("popup_opened"); }

    _setAttribute(){
        this.#cardLikeButton = this.#element.querySelector(".card__button"); 
        this.#cardBascketButton = this.#element.querySelector(".card__bascket");
        this.#cardImage.addEventListener("click",this._enlargeImage); 
        this.#cardLikeButton.addEventListener("click",this._activateLike); 
        this.#cardBascketButton.addEventListener("click",this._deleteCard); 

    }
    generateCard(){
        this.#element=this._getTemplate();
        this.#cardImage=this.#element.querySelector(".card__photography")
        this.#cardImage.setAttribute("src", this.#image);
        this.#cardImage.setAttribute("alt", this.#name); 
        this._setAttribute()
        this.#element.querySelector(".card__title").textContent = this.#name; 
        return this.#element;
    }

}
