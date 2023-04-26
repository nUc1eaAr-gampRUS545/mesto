export default class UserInfo{
    #nameInput;
    #jobInput;
    #getJob;
    #getName;

    constructor(getName,getJob){
        /*this.#nameInput = document.querySelector("#name");
        this.#jobInput = document.querySelector("#job");*/
        this.getName=document.querySelector(getName);
        this.getJob=document.querySelector(getJob);  
    }
    setUserInfo(data){
      console.log(data);
      this.getName.textContent=data.userName,
      this.getJob.textContent=data.userJob}
    
    getUserInfo(){
      const userInfo = {
        name: this.getName.textContent,
        job: this.getJob.textContent,
      }
      return userInfo;
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