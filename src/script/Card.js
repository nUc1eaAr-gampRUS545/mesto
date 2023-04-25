
export default class Card {
    #templateSelector;
    #name;
    #image;
    #element;
    #cardImage;
    #cardLikeButton;
    #cardBascketButton;
    

   
    constructor({cards,renderer},templateSelector,){
        this.#templateSelector=templateSelector;
        this.#name=cards.name;
        this.#image=cards.image;
        this._renderer=renderer;
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

    _setAttribute(){
       
        this.#cardLikeButton = this.#element.querySelector(".card__button"); 
        this.#cardBascketButton = this.#element.querySelector(".card__bascket");
        this.#cardImage.addEventListener("click",()=>{
          this._renderer();
          
        }); 
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
