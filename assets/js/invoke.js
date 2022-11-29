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

    let redirectionStart = false;

    window.addSuccessListener((data) => {
      setTimeout(() => {
        if (!redirectionStart) {
          const url = `${inputs.callback}&transaction_id=${data.transactionId}`;
          window.location.replace(url);
        }
      }, 5000);
    });

    window.addPaymentEndListener(() => {
      redirectionStart = true;
    });
  });
});
