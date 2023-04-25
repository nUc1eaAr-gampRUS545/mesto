export default class Popup{
    #buttonPopupAddCard;
    #popups;
    #popupExitButtons;

    constructor(popupSelector){
        this.popupElement=document.querySelector(popupSelector);
        this.#buttonPopupAddCard=document.querySelector(".profile__button");
        this.#popups = Array.from(document.querySelectorAll(".popup"));
        this.#popupExitButtons = document.querySelectorAll(".popup__exit");
        this._handleEscClose=this._handleEscClose.bind(this);
       
        
    }
    _handleEscClose(evt){
        if (evt.key === 'Escape') {
        this.close();}}
    open(){
        this.popupElement.classList.add("popup_opened");
        document.addEventListener("keydown",this._handleEscClose);
    };
    close(){
        this.popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown",this._handleEscClose);
    }
    setEventListeners(){
      
        this.#buttonPopupAddCard.addEventListener("click",()=>{
        this.open();
       
        });
        this.#popups.forEach((popup)=>{
          document.addEventListener("keydown",this._handleEscClose);
          popup.addEventListener('click', (evt)=>{
            if(evt.target.classList.contains("popup")){
              this.close();
            }
          });
        });
        this.#popupExitButtons.forEach((button)=>{
            button.addEventListener("click",()=>{
              this.close();
            });
          })
    }

}
/*function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') 
    closePopup(openedPopup)
    
  }
}
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown",closeByEscape);
};
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown",closeByEscape);
};
popups.forEach(function(popup){
  popup.addEventListener('click', function (evt) {
    if(evt.target.classList.contains("popup")){
      closePopup(popup);
    }
  });
});*/