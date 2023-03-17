function showInputError(errorTextElement,validationMessage){
    errorTextElement.textContent=validationMessage;
}
function hideInputError(errorTextElement){
    errorTextElement.textContent='';
}
function checkInpuValidation(input,errorStr){
    const errorMessage=document.querySelector(`${errorStr}${input.id}`);
    if(input.validity.valid){
        hideInputError(errorMessage);
    }
    else{
        showInputError(errorMessage, input.validationMessage);
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

function setEventListener(popupTypeAddCard,popupTypeAddCardForms,errorStr,submitButton,invalidSubmitButtonClass){
    popupTypeAddCard.addEventListener("submit",(evt)=>{
        evt.preventDefault();
    });
    popupTypeAddCardForms.forEach((input)=>{
        input.addEventListener("input",(evt)=>{
            checkInpuValidation(input,errorStr);
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
    setEventListener(popupTypeAddCard,popupTypeAddCardForms,config.errorStr,submitButtonTypeAddCards,config.invalidSubmitButtonClass);
    setEventListener(popupTypeProfile,popupTypeProfileForms,config.errorStr,submitButtonTypeProfile,config.invalidSubmitButtonClass);
}
enableValidation({
    popupAddCardSelector:".popup_type_add-cards",
    popupProfileSelector:".popup_type_profile",
    inputSelector:".popup__input",
    errorStr:".popup__input-error_type_",
    submitButonSelector:".popup__saved",
    invalidSubmitButtonClass:"popup__saved-invalid",

});