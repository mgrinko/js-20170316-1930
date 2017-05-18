'use strict';

class ShoppingCart {
  constructor(options) {
    this._el = options.el;
    this._template = document.querySelector('#shopping-cart-template').innerHTML;
    this._templateFunction = _.template(this._template);

    this._items = [];

    this.render();
  }

  render() {
    let html = this._templateFunction({
      title: 'My shopping cart',
      items: this._items
    });

    this._el.innerHTML = html;
  }

  addItem(item) {
    this._items.push(item);

    this.render();
  }
}