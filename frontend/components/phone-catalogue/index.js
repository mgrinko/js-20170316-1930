'use strict';

import './styles.css';

import templateFunction from './template.hbs';
import phoneTemplateFunction from './phone-template.hbs';
import { Component } from './../../component';

export class PhoneCatalogue extends Component {
  constructor(options) {
    super(options.el);

    this._el = options.el;

    this._el.addEventListener('click', this._onPhoneClick.bind(this));

    this._render();
    this._list = this._el.querySelector('ul');
  }

  showPhones(phones) {
    this.clear();

    this._phones = phones;

    this._phones.forEach((phone) => {
      this._renderPhone(phone);
    });

    this.show();
  }

  clear() {
    this._list.innerHTML = '';
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
    let html = templateFunction({});

    this._el.innerHTML = html;
  }

  _renderPhone(phone) {
    let phoneHTML = phoneTemplateFunction({
      phone: phone
    });

    this._list.insertAdjacentHTML('beforeEnd', phoneHTML)
  }


}