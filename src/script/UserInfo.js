export default class UserInfo{
    #nameInput;
    #jobInput;
    #getJob;
    #getName;

    constructor(getName,getJob){
        this.#nameInput = document.querySelector("#name");
        this.#jobInput = document.querySelector("#job");
        this.#getName=document.querySelector(getName);
        this.#getJob=document.querySelector(getJob);  
    }
    getUserInfo(){
      this.#nameInput.value = this.#getName.textContent;
      this.#jobInput.value = this.#getJob.textContent;
    }
    setUserInfo(){
      
      this.#getName.textContent = this.#nameInput.value;
      this.#getJob.textContent = this.#jobInput.value;
    }
}
/*function handleFormSubmit(evt) {
    evt.preventDefault();
    getInput.textContent = nameInput.value;
    getJob.textContent = jobInput.value;
    setEventListener.close(profilePopup);
  };
  openButton.addEventListener("click", function () {
    nameInput.value = getInput.textContent;
    jobInput.value = getJob.textContent;
    setEventListener.open(profilePopup);
  });
  popupContainer.addEventListener("submit", handleFormSubmit);*/