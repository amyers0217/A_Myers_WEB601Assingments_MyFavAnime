import { Content } from './content-interface';

export class ContentList {
  private readonly _items: Content[];
  constructor() {
    this._items = [];
  }
  get items(): Content[] {
    return this._items;
  }
  addItem(oneItem: Content) {
    this._items.push(oneItem);
  }
  getLength(): number {
    return this._items.length;
  }
  returnHTML(index: number) {
    if(index < 0 || index >= this._items.length) {
      console.log("Invalid")
    }
    return `<div class="contentCard">
              <h1>${this._items[index].title}</h1>
              <h3>${this._items[index].creator}</h3>
              <img src="${this._items[index].imgURL}" a;t=""/>
              <p>${this._items[index].description}</p>
              <h4>${this._items[index].type}</h4>
            </div>`;
  }
}
