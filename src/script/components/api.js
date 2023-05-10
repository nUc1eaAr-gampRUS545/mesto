

export class Api {
  #userUrl;
  constructor(userUrl) {
    this.#userUrl = userUrl;
  }
  getInitialCards() {
    return fetch(`${this.#userUrl}/cards`, {
      method:"GET",
      headers: {
        authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
        'Content-Type': 'application/json'}})
      .then(res => res.json())
      
  }
  addMyCards(name,link){ 
    return fetch(`${this.#userUrl}/cards`, {
        method:"POST",
        headers: {
          authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
          'Content-Type': 'application/json',},
        body: JSON.stringify({name,link})
        })
        .then(res=>res.json)
  }
  replaceInfo(data){  
    return fetch(`${this.#userUrl}/users/me`, {
        method:"PATCH",
        headers: {
          authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
          'Content-Type': 'application/json',},
        body: JSON.stringify({name:data.name,about:data.job})
        })
        .then(res=>res.json)
  }
  getInfo(){
    return fetch(`${this.#userUrl}/users/me`, {
      method:"GET",
      headers: {
        authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
        'Content-Type': 'application/json'}})
      .then(res => res.json())
  }
  setLikes(data){  
  return fetch(`${this.#userUrl}/cards/${data}/likes`, {
    method:"PUT",
    headers: {
      authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
      'Content-Type': 'application/json'}})
    .then(res => res.json())
  }

deleteLikes(data){
  return fetch(`${this.#userUrl}/cards/${data}/likes`, {
    method:"DELETE",
    headers: {
      authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
      'Content-Type': 'application/json'}})
    .then(res => res.json())
  }
 
changeProfile(data){
  return fetch(`${this.#userUrl}/users/me/avatar`, {
    method:"PATCH",
    headers: {
      authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
      'Content-Type': 'application/json'},
    body: JSON.stringify({avatar: data.avatar})})
      .then((res) =>{ 
        if(res.ok)
        {res.json()}
        else{ Promise.reject("Ошибка "+res.status)}})
}  

deleteCard(data){
  return fetch(`${this.#userUrl}/cards/${data}`, {
    method:"DELETE",
    headers: {
      authorization: "6af0fad8-3b2e-4d49-af39-c98a3c186d35",
      'Content-Type': 'application/json'}})
    .then(res => res.json())
}
}
