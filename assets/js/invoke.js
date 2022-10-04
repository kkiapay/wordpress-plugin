document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('#kkiapay-button');
  inputs.testmode === 'yes'
    ? (inputs.sandbox = true)
    : (inputs.sandbox = false);

  if (!inputs.theme) inputs.theme = 'primary';

  button.addEventListener('click', function (event) {
    event.preventDefault();
    inputs.sdk = 'woocommerce';
    window.openKkiapayWidget(inputs);
  });
});
