import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
    #zoomImg;
    #popupTitleZoomImage;
    
    constructor(popupSelector){
        super(popupSelector);
        this.#zoomImg = this.popupElement.querySelector(".popup__image");
        this.#popupTitleZoomImage=this.popupElement.querySelector(".popup__caption");
    }
    open(items){
        this.#zoomImg.src = items.image; 
        this.#zoomImg.alt = items.name;
        this.#popupTitleZoomImage.textContent = `${items.name}`;
        super.open();
    }
}
