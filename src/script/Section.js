export default class Section{
    #container;
    #items;
    #renderer;
    constructor({data,renderer},containerSelector){
        this.#items=data;
        this.#renderer=renderer;
        this.#container=document.querySelector(containerSelector);
    }
    addItem(el){
        this.#container.prepend(el)
    }
    renderItem(el){
        this.#container.append(this.#renderer(el));
    }
    renderItems(){
        this.#items.forEach((i)=>{
            this.#renderer(i)
    } )}
}
/*cards.forEach((i)=>{
    elements.append(createCard(i));
  });*/

  /*function createCard(item) {
    const card = new Card(item,".copy__card",handleCardClick);
    const placeTemplateCopy = card.generateCard();
    return placeTemplateCopy 
  }
  
  cards.forEach((i)=>{
    elements.append(createCard(i));
  });*/