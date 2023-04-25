import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    #inputList;
    #popupElement;
    #renderer;
    #form;
    constructor({renderer,popupSelector}){
        super(popupSelector);
        this.#renderer=renderer;
        this.#popupElement=document.querySelector(popupSelector);
        this.#form=this.#popupElement.querySelector(".popup__content")
        this.#inputList=Array.from(this.popupElement.querySelectorAll(".popup__input"));
    }
    _getInputValues(){
        this.newCard={}
        this.#inputList.forEach((element) => {
            this.newCard[element.name]=element.value;
        });
        return this.newCard;
    }
    close(){
        this.#popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown",this._handleEscClose);
    }
    setEventListeners(){
        this.#form.addEventListener("submit",(evt)=>{
            const values=this._getInputValues();
            evt.preventDefault();
            evt.target.reset();
            this.#renderer(values); 
            this.close();
        })
        super.setEventListeners();
    }
    

}
