'use strict';

import './styles.css';

import templateFunction from './template.hbs';
import { Component } from './../../component';

export class PhoneCatalogue extends Component {
  constructor(options) {
    super(options.el);

    this._el = options.el;

    this._el.addEventListener('click', this._onPhoneClick.bind(this));
  }

  showPhones(phones) {
    this._phones = phones;

    this._render();
    this.show();
  }

  _onPhoneClick(event) {
    let phoneLink = event.target.closest('[data-element="phone-link"]');

    if (!phoneLink) {
      return;
    }

    let phoneItemElement = phoneLink.closest('[data-element="phone-item"]');
    let selectedPhoneId = phoneItemElement.dataset.phoneId;

    this.trigger('phoneSelected', selectedPhoneId);

    phoneItemElement.onmouseleave = () => {
      this.trigger('extraAction');

      phoneItemElement.onmouseleave = null;
    };
  }

  _render() {
    let html = templateFunction({
      phones: this._phones
    });

    this._el.innerHTML = html;
  }

}