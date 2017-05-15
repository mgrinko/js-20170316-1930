'use strict';

class PhoneCatalogue extends Component {
  constructor(options) {
    super(options.el);

    this._phones = [];
    this._template = document.querySelector('#phone-catalogue-template').innerHTML;

    this._loadPhones();

    this._el.addEventListener('click', this._onPhoneClick.bind(this))
  }

  render() {
    let templateFunction = _.template(this._template);
    let html = templateFunction({
      phones: this._phones
    });

    this._el.innerHTML = html;
  }

  _onPhoneClick(event) {
    let phoneLink = event.target.closest('[data-element="phone-link"]');

    if (!phoneLink) {
      return;
    }

    let phoneElement = phoneLink.closest('[data-element="phone-item"]');
    let phoneId = phoneElement.dataset.phoneId;

    // let selectedPhone = phonesFromServer
    //   .filter(phone => phone.id === phoneId)
    //   [0];

    this.trigger('phoneSelected', phoneId)
  }

  _loadPhones() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `/data/phones/phones.json`, true);

    xhr.onload = () => {
      if (xhr.status !== 200) {
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
      } else {
        this._phones = JSON.parse(xhr.responseText);
        this.render();
      }
    };

    xhr.send();
  }
}