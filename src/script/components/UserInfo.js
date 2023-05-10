export default class UserInfo{


    constructor(getName,getJob,avatar){
        this.getName=document.querySelector(getName);
        this.getJob=document.querySelector(getJob);
        this.avatar=document.querySelector(avatar)  
    }
    setUserInfo(data){
      this.getName.textContent=data.name,
      this.getJob.textContent=data.about,
      this.avatar.src=data.avatar;
      this.userID=data._id;

    }
    
    getUserInfo(){
      const userInfo = {
        name: this.getName.textContent,
        job: this.getJob.textContent,
      }
      return userInfo;
    }
    getUserId(){
      return this.userID;
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