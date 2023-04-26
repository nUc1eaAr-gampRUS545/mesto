export default class Popup{
    #buttonPopupAddCard;
    #popupExitButton;
    #popupElement;
    constructor(popupSelector){
        this.#popupElement=document.querySelector(popupSelector);
        this.#buttonPopupAddCard=document.querySelector(".profile__button");
        this.#popupExitButton = this.#popupElement.querySelector(".popup__exit");
        this._handleEscClose=this._handleEscClose.bind(this);
       
        
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
        this.close();}}
    open(){
        this.#popupElement.classList.add("popup_opened");
        document.addEventListener("keydown",this._handleEscClose);
        
    };
    close(){
        this.#popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown",this._handleEscClose);
    }
    setEventListeners(){
      this.#popupElement.addEventListener("mouseup",(evt)=>{
          if(evt.target.classList.contains("popup")){
            this.close();}
        });
        this.#popupExitButton.addEventListener("click",()=>{
              this.close();
            });
    }

}
