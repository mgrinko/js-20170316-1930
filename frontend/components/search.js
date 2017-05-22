'use strict';

import { Component } from './../component';

export class Search extends Component {
  constructor({ el, delay = 300 }) {
    super(el);

    this._field = this._el.querySelector('[data-element="field"]');

    this._field.addEventListener('input', () => {
      this._lastCalled = new Date();

      setTimeout(() => {
        if (new Date() - this._lastCalled >= delay) {
          this.trigger('valueChanged', this._field.value);
        }
      }, delay);

    });
  }


}