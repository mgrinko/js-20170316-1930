class Component {
  constructor(rootElement) {
    this._el = rootElement;
  }

  on(eventName, handler) {
    this._el.addEventListener(eventName, handler);
  }

  off(eventName, handler) {
    this._el.removeEventListener(eventName, handler);
  }

  trigger(eventName, data) {
    var myEvent = new CustomEvent(eventName, {
      detail: data
    });

    this._el.dispatchEvent(myEvent);
  }

  show() {
    this._el.classList.remove('js-hidden');
  }

  hide() {
    this._el.classList.add('js-hidden');
  }
}