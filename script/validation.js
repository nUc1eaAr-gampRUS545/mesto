const showInputError=(errorTextElement,validationMessage,popupInputErrorClass)=>{
    errorTextElement.textContent=validationMessage;
    errorTextElement.classList.add(popupInputErrorClass);

}
const hideInputError=(errorTextElement,popupInputErrorClass)=>{
    errorTextElement.classList.remove(popupInputErrorClass);
    errorTextElement.textContent="";
}
const checkInpuValidation=(input,errorStr,popupInputInvalidClass,popupInputErrorClass)=>{
    const errorMessage=document.querySelector(`${errorStr}${input.id}`);
    if(input.validity.valid){
        hideInputError(errorMessage,popupInputErrorClass);
        input.classList.remove(popupInputInvalidClass)
    }
    else{
        input.classList.add(popupInputInvalidClass)
        showInputError(errorMessage, input.validationMessage,popupInputErrorClass);
    }
}

const hasInvalidInput=(popupForms)=>{
    return Array.from(popupForms).some((input)=>{
        return !input.validity.valid;
    })
}
const disableSubmitButton=(submitButton,invalidSubmitButtonClass)=>{
    submitButton.classList.add(invalidSubmitButtonClass);
    submitButton.disabled=true;
}
const enableSubmitButton=(submitButton,invalidSubmitButtonClass)=>{
    submitButton.classList.remove(invalidSubmitButtonClass);
    submitButton.disabled=false;
}


const toggleButtonState=(submitButton,invalidSubmitButtonClass,popupTypeAddCardForms)=>{
    if(!hasInvalidInput(popupTypeAddCardForms)){
        enableSubmitButton(submitButton,invalidSubmitButtonClass);
    }
    else{
        disableSubmitButton(submitButton,invalidSubmitButtonClass);
    }
}

function setEventListener(popupTypeAddCard,popupTypeAddCardForms,errorStr,submitButton,invalidSubmitButtonClass,popupInputInvalidClass,popupInputErrorClass){
    popupTypeAddCard.addEventListener("submit",(evt)=>{
        evt.preventDefault();
    });
    popupTypeAddCardForms.forEach((input)=>{
        input.addEventListener("input",(evt)=>{
            checkInpuValidation(input,errorStr,popupInputInvalidClass,popupInputErrorClass);
            toggleButtonState(submitButton,invalidSubmitButtonClass,popupTypeAddCardForms);
        })
    })
}
function enableValidation(config){
    const popupTypeAddCard=document.querySelector(config.popupAddCardSelector);
    const popupTypeProfile=document.querySelector(config.popupProfileSelector);
    const popupTypeAddCardForms=popupTypeAddCard.querySelectorAll(config.inputSelector);
    const popupTypeProfileForms=popupTypeProfile.querySelectorAll(config.inputSelector);
    const submitButtonTypeAddCards=popupTypeAddCard.querySelector(config.submitButonSelector);
    const submitButtonTypeProfile=popupTypeProfile.querySelector(config.submitButonSelector);
    setEventListener(popupTypeAddCard,popupTypeAddCardForms,config.errorStr,submitButtonTypeAddCards,config.invalidSubmitButtonClass,config.popupInputInvalidClass,config.popupInputErrorClass);
    setEventListener(popupTypeProfile,popupTypeProfileForms,config.errorStr,submitButtonTypeProfile,config.invalidSubmitButtonClass,config.popupInputInvalidClass,config.popupInputErrorClass);
}
enableValidation({
    popupAddCardSelector:".popup_type_add-cards",
    popupProfileSelector:".popup_type_profile",
    inputSelector:".popup__input",
    errorStr:".popup__message_type_",
    submitButonSelector:".popup__saved",
    popupInputErrorClass:"popup__input-error",
    invalidSubmitButtonClass:"popup__saved-invalid",
    popupInputInvalidClass:"popup__input-invalid",
});