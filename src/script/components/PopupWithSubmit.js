import Popup from "./Popup.js";
export default class PopupWithSubmit extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._formElement = this.popupElement.querySelector('.popup__content');
      }
    
      setSubmitAction(action) {
        this._functionSubmit=action;
      }
    
      setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', evt=> {
          evt.preventDefault();
          this._functionSubmit();
        });
      }
    }
