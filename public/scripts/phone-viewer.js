'use strict';

class PhoneViewer extends Component {
  constructor(options) {
    super(options.el);

    this._template = document.querySelector('#phone-viewer-template').innerHTML;

    this._el.addEventListener('click', this._onBackClick.bind(this));
    this._el.addEventListener('click', this._onAddToBasketClick.bind(this));
  }

  showPhone(phoneDetails) {
    this._phone = phoneDetails;

    this.show();
    this._render();
  }

  _render() {
    let templateFunction = _.template(this._template);
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