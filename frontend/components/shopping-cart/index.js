'use strict';

import template from 'lodash.template';
import { Component } from './../../component';

export class ShoppingCart extends Component {
  constructor(options) {
    super(options.el);

    this._template = require('./template.html');
    this._templateFunction = template(this._template);

    this._items = [];

    this.render();
  }

  render() {
    this._el.innerHTML = this._templateFunction({
      title: 'My shopping cart',
      items: this._items
    });
  }

  addItem(item) {
    this._items.push(item);

    this.render();
  }
}