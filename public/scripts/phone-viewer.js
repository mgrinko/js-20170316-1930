'use strict';

class PhoneViewer {
  constructor(options) {
    this._el = options.el;
    this._template = document.querySelector('#phone-viewer-template').innerHTML;
  }

  showPhone(phoneDetails) {
    this.phone = phoneDetails;

    this.show();
    this._render();
  }

  show() {
    this._el.classList.remove('js-hidden');
  }

  _render() {
    let templateFunction = _.template(this._template);
    let html = templateFunction({
      phone: this.phone
    });

    this._el.innerHTML = html;
  }
}