window.onload = () => {
    document.body.style.visibility = 'visible';
};

window.onloadTurnstileCallback = function () {
    turnstile.render("#my-capcha", {
        sitekey: "0x4AAAAAABPzHsNn-WgBQaTE",
        callback: function (token) {
            console.log(`Challenge Success ${token}`);
            setTimeout(() => {
                const overlay = document.querySelector(".container");
                overlay.classList.add("fade-out");

                setTimeout(() => {
                    overlay.style.display = "none";
                }, 1000);
            }, 3000);
        },
    });
};