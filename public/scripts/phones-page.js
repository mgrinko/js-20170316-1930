'use strict';

class PhonesPage {
  constructor(options) {
    this._el = options.el;

    this._cart = new ShoppingCart({
      el: this._el.querySelector('[data-component="shopping-cart"]'),
      template: document.querySelector('#shopping-cart-template').innerHTML
    });

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phone-catalogue"]')
    });

    this._viewer = new PhoneViewer({
      el: this._el.querySelector('[data-component="phone-viewer"]'),
    });

    this._catalogue.on('phoneSelected', this._onPhoneSelected.bind(this));

    this._viewer.on('back', (event) => {
      this._viewer.hide();
      this._catalogue.show();
    });

    this._viewer.on('add', (event) => {
      this._cart.addItem(event.detail)
    });
  }

  _onPhoneSelected(event) {
    let phoneId = event.detail;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `/data/phones/${phoneId}.json`, true);

    xhr.onload = () => {
      if (xhr.status !== 200) {
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
      } else {
        let phoneDetails = JSON.parse(xhr.responseText);

        this._catalogue.hide();
        this._viewer.showPhone(phoneDetails);
      }
    };

    xhr.send();
  }
}