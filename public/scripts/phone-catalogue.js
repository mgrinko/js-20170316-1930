'use strict';

class PhoneCatalogue extends Component {
  constructor(options) {
    super(options.el);

    this._el = options.el;
    this._template = document.querySelector('#phone-catalogue-template').innerHTML;
    this._templateFunction = _.template(this._template);

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
  }

  _render() {
    let html = this._templateFunction({
      phones: this._phones
    });

    this._el.innerHTML = html;
  }

}