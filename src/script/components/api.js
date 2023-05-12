

export class Api {
  #userUrl;
  #headers;
  constructor({baseURL,headers}) {
    this.#userUrl = baseURL;
    this.#headers=headers
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}
  getInitialCards() {
    return fetch(`${this.#userUrl}/cards`, {
      method:"GET",
      headers: this.#headers})
      .then(this._checkResponse)
      
  }
  addMyCards(name,link){ 
    return fetch(`${this.#userUrl}/cards`, {
        method:"POST",
        headers:this.#headers,
        body: JSON.stringify({name,link})
        })
        .then(this._checkResponse)
  }
  replaceInfo(data){  
    return fetch(`${this.#userUrl}/users/me`, {
        method:"PATCH",
        headers:this.#headers,
        body: JSON.stringify({name:data.name,about:data.job})
        })
        .then(this._checkResponse)
  }
  getInfo(){
    return fetch(`${this.#userUrl}/users/me`, {
      method:"GET",
      headers: this.#headers})
      .then(this._checkResponse)
  }
  setLikes(data){  
  return fetch(`${this.#userUrl}/cards/${data}/likes`, {
    method:"PUT",
    headers:this.#headers})
    .then(this._checkResponse)
  }

deleteLikes(data){
  return fetch(`${this.#userUrl}/cards/${data}/likes`, {
    method:"DELETE",
    headers:this.#headers})
    .then(this._checkResponse)
  }
 
changeProfile(data){
  return fetch(`${this.#userUrl}/users/me/avatar`, {
    method:"PATCH",
    headers: this.#headers,
    body: JSON.stringify({avatar: data.avatar})})
      .then(this._checkResponse)
}  

deleteCard(data){
  return fetch(`${this.#userUrl}/cards/${data}`, {
    method:"DELETE",
    headers: this.#headers})
    .then(this._checkResponse)
}
}
