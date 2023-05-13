export default class Section{
    #container;
    #renderer;
    constructor({renderer},containerSelector){
        this.#renderer=renderer;
        this.#container=document.querySelector(containerSelector);
    }
    addItem(el){
        this.#container.prepend(el)
    }
    renderItem(el){
        this.#container.append(el);
    }
    renderItems(items){
        
        items.reverse().forEach((i)=>{
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