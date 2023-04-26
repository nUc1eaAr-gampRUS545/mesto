import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    #inputList;
    #renderer;
    #form;
    #popupElement;
    constructor({renderer,popupSelector}){
        super(popupSelector);
        this.#popupElement=document.querySelector(popupSelector);
        this.#renderer=renderer;
        this.#form=this.#popupElement.querySelector(".popup__content")
        this.#inputList=Array.from(this.#popupElement.querySelectorAll(".popup__input"));
    }
    _getInputValues(){
        this.newCard={}
        this.#inputList.forEach((element) => {
            this.newCard[element.name]=element.value;
        });
        return this.newCard;
    }
    close(){
       super.close();
       this.#form.reset();
    }
    setEventListeners(){
        super.setEventListeners();
        this.#form.addEventListener("submit",(evt)=>{
            evt.preventDefault();
            this.#renderer(this._getInputValues()); 
            this.close();
        })
        
        
    }
    

}
