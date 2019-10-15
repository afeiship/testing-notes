(function() {
  'use strict';

  var formEl = document.querySelector('.e2e-test');
  var btnSubmit = document.querySelector('#btn-submit');

  btnSubmit.onclick = function() {
    var formData = new FormData(formEl);
    console.log(formData.get('username'));
    console.log(formData.get('password'));
  };
})();
