'use strict';

import { getFullName } from './utils';

class App {
  constructor() {
    this._form = document.querySelector('.e2e-test');
    this._btn = document.querySelector('#btn-submit');
    this._result = document.querySelector('#result');
    this.attachEvents();
  }
  attachEvents() {
    this._btn.onclick = () => {
      var formData = new FormData(this._form);
      var firstName = formData.get('firstName');
      var lastName = formData.get('lastName');
      var password = formData.get('password');
      var fullName = getFullName(firstName, lastName);
      console.log({
        username: fullName,
        password: password
      });
      this._result.innerHTML = fullName;
    };
  }
  detachEvents() {
    this._btn.onclick = null;
  }
  destroy() {
    this.detachEvents();
    this._form = null;
    this._btn = null;
  }
}

new App();
