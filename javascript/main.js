/* =========================================
   OPEN WEBSITE
========================================= */

const openWebsite = document.getElementById("openWebsite");

const openingScreen =
    document.getElementById("openingScreen");

const mainWebsite =
    document.getElementById("mainWebsite");


openWebsite.addEventListener("click", () => {

    openingScreen.style.opacity = "0";

    openingScreen.style.transition =
        "opacity 0.8s ease";

    setTimeout(() => {

        openingScreen.style.display = "none";

        mainWebsite.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});



/* =========================================
   BIRTHDAY CAKE
========================================= */

const cake =
    document.getElementById("cake");

const wishMessage =
    document.getElementById("wishMessage");


cake.addEventListener("click", () => {

    if (cake.classList.contains("blown")) {
        return;
    }

    cake.classList.add("blown");

    wishMessage.innerHTML =
        "✨ May your birthday wish come true, Beryl. ❤️";

    createConfetti();

});



/* =========================================
   OPEN WHEN
========================================= */

const envelopes =
    document.querySelectorAll(".envelope");

const messageModal =
    document.getElementById("messageModal");

const modalMessage =
    document.getElementById("modalMessage");

const closeModal =
    document.getElementById("closeModal");


envelopes.forEach((envelope) => {

    envelope.addEventListener("click", () => {

        const message =
            envelope.getAttribute("data-message");

        modalMessage.textContent =
            message.trim();

        messageModal.classList.add("show");

    });

});


closeModal.addEventListener("click", () => {

    messageModal.classList.remove("show");

});


messageModal.addEventListener("click", (event) => {

    if (event.target === messageModal) {

        messageModal.classList.remove("show");

    }

});



/* =========================================
   GIFT BOX
========================================= */

const giftBox =
    document.getElementById("giftBox");

const presentReveal =
    document.getElementById("presentReveal");

const giftHint =
    document.getElementById("giftHint");


giftBox.addEventListener("click", () => {

    if (giftBox.classList.contains("open")) {
        return;
    }

    giftBox.classList.add("open");

    giftHint.textContent =
        "✨ Opening your surprise...";


    setTimeout(() => {

        presentReveal.classList.add("show");

        giftHint.textContent =
            "🎀 Your surprise is here!";

        createConfetti();


        setTimeout(() => {

            presentReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 400);

    }, 900);

});



/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const amount = 100;

    const colors = [
        "#ff8fc5",
        "#ffb6d7",
        "#ffffff",
        "#ffd37a",
        "#ff5fa2"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.style.position = "fixed";

        piece.style.width =
            Math.random() * 8 + 5 + "px";

        piece.style.height =
            Math.random() * 12 + 8 + "px";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";


        const duration =
            Math.random() * 3 + 3;


        piece.style.animation =
            `confettiFall ${duration}s linear forwards`;


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, duration * 1000);

    }

}



/* =========================================
   CONFETTI ANIMATION
========================================= */

const confettiStyle =
    document.createElement("style");


confettiStyle.innerHTML = `

@keyframes confettiFall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(confettiStyle);



/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.innerHTML = "♡";


    heart.style.position = "fixed";

    heart.style.bottom = "-30px";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";

    heart.style.color =
        "#ff8fc5";

    heart.style.opacity =
        Math.random() * 0.5 + 0.3;

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex = "1";


    heart.style.animation =
        "heartFloat 7s linear forwards";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}


setInterval(createHeart, 1800);



/* =========================================
   HEART ANIMATION
========================================= */

const heartStyle =
    document.createElement("style");


heartStyle.innerHTML = `

@keyframes heartFloat {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;

    }

    15% {

        opacity: 0.7;

    }

    100% {

        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(heartStyle);