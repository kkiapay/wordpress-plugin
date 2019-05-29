window.addEventListener("load", function () {
    const button = document.querySelector("#kkiapay-button");
    console.debug("inputs", inputs);
    if(inputs.testmode === "yes") {
        inputs.test = "sandbox"
    }

    button.addEventListener('click', function (event) {
        event.preventDefault();
        inputs.sdk = "woocommerce"
        window.openKkiapayWidget(inputs)
    });
});
