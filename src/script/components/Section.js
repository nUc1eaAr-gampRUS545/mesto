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
    renderItems(items,user){ 
        items.reverse().forEach((i)=>{
            this.#renderer(i,user)
    } )}
}
