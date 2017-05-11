'use strict';

class ShoppingCart {
  constructor(options) {
    this._el = options.el;

    this._items = [];

    this.render();
  }

  render() {
    let html = '<h4>Shopping cart</h4>';

    html += '<ul>';

    this._items.forEach((item) => {
      html += `<li>${ item.id }</li>`;
    });

    html += '</ul>';

    this._el.innerHTML = html;
  }

  addItem(item) {
    this._items.push(item);

    this.render();
  }
}