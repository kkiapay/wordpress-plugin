window.addEventListener("load",function () {
    const button = document.querySelector("#kkiapay-button");
    console.debug("inputs",inputs);

    button.addEventListener('click',function (event) {
        event.preventDefault();
        window.openKkiapayWidget(inputs)
    });
});

/*
{
            key : inputs.api_key,
            amount : inputs.amount,
            theme: inputs.theme,
            url: inputs.url,
            name : inputs.name,
            lang: inputs.lang,
            phone: inputs.phone,
            position: inputs.position,
            callback: inputs.callback
        }
 */
