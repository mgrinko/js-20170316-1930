'use strict';

class PhonesPage {
  constructor(options) {
    this._el = options.el;

    this._cart = new ShoppingCart({
      el: this._el.querySelector('[data-component="shopping-cart"]')
    });

    this._catalogue = new PhoneCatalogue({
      el: this._el.querySelector('[data-component="phone-catalogue"]'),
    });

    this._loadPhones();

    this._viewer = new PhoneViewer({
      el: this._el.querySelector('[data-component="phone-viewer"]'),
    });

    this._search = new Search({
      el: this._el.querySelector('[data-component="search"]'),
    });

    this._catalogue.on('phoneSelected', this._onPhoneSelected.bind(this));

    this._viewer.on('back', () => {
      this._viewer.hide();
      this._catalogue.show();
    });

    this._viewer.on('add', (event) => {
      let phoneDetails = event.detail;

      this._cart.addItem(phoneDetails);
    });

    this._search.on('valueChanged', (event) => {
      let searchValue = event.detail;

      this._loadPhones(searchValue);
    });
  }

  _onPhoneSelected(event) {
    let phoneId = event.detail;

    HttpService.getJSON(`/data/phones/${phoneId}.json`, (phoneDetails) => {
      this._catalogue.hide();
      this._viewer.showPhone(phoneDetails);
    });
  }

  _loadPhones(query) {
    let url = `/data/phones/phones.json`;

    if (query) {
      url += `?query=${query}`
    }

    HttpService.getJSON(url, (phones) => {
      // until our server can filter phones
      let filteredPhones = this._filterPhones(phones, query);

      this._catalogue.showPhones(filteredPhones);
    });
  }

  _filterPhones(phones, query) {
    if (!query) {
      return phones;
    }

    let normalizedQuery = query.toLowerCase();

    return phones.filter((phone) => {
      return phone.name.toLowerCase().includes(normalizedQuery);
    });
  }
}