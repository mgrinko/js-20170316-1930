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

    this._catalogue.on('phoneSelected', (event) => {
      let phoneDetails = { id: event.detail };

      this._catalogue.hide();
      this._viewer.showPhone(phoneDetails);
    });
  }
}