export class FormValidation {
        #form;
        #input;
        #popupInputInvalidClass;
        #invalidSubmitButtonClass;
        #popupInputErrorClass;
        #errorStr;
        #submitButton;
        #errorMessage;
        
        constructor(data,form) {
        this.#form=document.querySelector(form);
        this.#input=Array.from(this.#form.querySelectorAll(data.inputSelector));
        this.#errorStr=data.errorStr;
        this.#popupInputErrorClass=data.popupInputErrorClass;
        this.#invalidSubmitButtonClass=data.invalidSubmitButtonClass;
        this.#popupInputInvalidClass=data.popupInputInvalidClass;
        this.#submitButton=this.#form.querySelector(data.submitButonSelector);
        };
      
        enableValidation() {
            this._setEventListener();
      }
      _setEventListener(){
        this.#form.addEventListener("submit",(evt)=>{
                evt.preventDefault();
            });
            this.#input.forEach((item)=>{
                item.addEventListener("input",(evt)=>{
                    this._checkInpuValidation(item);
                    if(!this._hasInvalidInput()){
                        this.#submitButton.classList.remove(this.#invalidSubmitButtonClass);
                        this.#submitButton.disabled=false;
                    }
                    else{
                        this.#submitButton.classList.add(this.#invalidSubmitButtonClass);
                        this.#submitButton.disabled=true;}
                })
            })
      }
      _checkInpuValidation(item){
        this.#errorMessage=this.#form.querySelector(`${this.#errorStr}${item.id}`);
        if(item.validity.valid){
            this.#errorMessage.classList.remove(this.#popupInputErrorClass);
            this.#errorMessage.textContent="";
            item.classList.remove(this.#popupInputInvalidClass);
        }
        else{
            item.classList.add(this.#popupInputInvalidClass)
            this.#errorMessage.textContent=item.validationMessage;
            this.#errorMessage.classList.add(this.#popupInputErrorClass);
        }
      }
      
      _hasInvalidInput(){
        return this.#input.some((i)=>{
            return !i.validity.valid;
        })
      }
   }   
      