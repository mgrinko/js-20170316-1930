'use strict';

class ShoppingCart {
  constructor(options) {
    this._el = options.el;
    this._template = options.template;

    this._items = [];

    this.render();
  }

  render() {
    let templateFunction = _.template(this._template);
    let html = templateFunction({
      items: this._items
    });

    this._el.innerHTML = html;
  }

  addItem(item) {
    this._items.push(item);

    this.render();
  }
}