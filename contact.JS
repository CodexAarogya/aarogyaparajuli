window.onload = () => {
    document.body.style.visibility = 'visible';
};

window.onloadTurnstileCallback = function () {
    turnstile.render("#my-capcha", {
        sitekey: "0x4AAAAAABPzHsNn-WgBQaTE",
        callback: function (token) {
            console.log(`Challenge Success ${token}`);
          
        },
    });
};