'use strict';

import template from 'lodash.template';
import { Component } from './../../component';

export class PhoneViewer extends Component {
  constructor(options) {
    super(options.el);

    this._template = require('./template.html');

    this._el.addEventListener('click', this._onBackClick.bind(this));
    this._el.addEventListener('click', this._onAddToBasketClick.bind(this));
  }

  showPhone(phoneDetails) {
    this._phone = phoneDetails;

    this.show();
    this._render();
  }

  _render() {
    let templateFunction = template(this._template);
    let html = templateFunction({
      phone: this._phone
    });

    this._el.innerHTML = html;
  }

  _onBackClick(event) {
    if (!event.target.closest('[data-element="back-button"]')) {
      return;
    }

    this.trigger('back');
  }

  _onAddToBasketClick(event) {
    if (!event.target.closest('[data-element="add-to-basket"]')) {
      return;
    }

    this.trigger('add', this._phone);
  }
}