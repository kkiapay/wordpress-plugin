document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('#wc__kkiapay-button');
  
  inputs.sandbox = inputs.testmode === "yes";
  inputs.paymentmethod = [inputs.paymentmethod];

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

    window.addPaymentEndListener(() => (redirectionStart = true));
  });
});
