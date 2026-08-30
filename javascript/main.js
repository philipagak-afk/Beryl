const giftBox = document.getElementById("giftBox");
const presentReveal = document.getElementById("presentReveal");
const clickText = document.getElementById("clickText");
const closeGift = document.getElementById("closeGift");


// =========================
// OPEN GIFT
// =========================

giftBox.addEventListener("click", function () {

    // Prevent clicking multiple times
    if (giftBox.classList.contains("open")) {
        return;
    }

    // Open the box
    giftBox.classList.add("open");

    // Change instruction
    clickText.textContent = "✨ Your surprise is here...";

    // Wait for the lid animation
    setTimeout(() => {

        presentReveal.classList.add("show");

        // Create confetti
        createConfetti();

        // Scroll smoothly to the present
        setTimeout(() => {
            presentReveal.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 300);

    }, 700);

});


// =========================
// CLOSE GIFT
// =========================

closeGift.addEventListener("click", function () {

    presentReveal.classList.remove("show");

    giftBox.classList.remove("open");

    clickText.textContent = "🎁 Click the gift to open it again";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// CONFETTI
// =========================

function createConfetti() {

    const numberOfPieces = 80;

    for (let i = 0; i < numberOfPieces; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti-piece");

        // Random position
        confetti.style.left =
            Math.random() * 100 + "vw";

        // Random size
        confetti.style.width =
            Math.random() * 8 + 5 + "px";

        confetti.style.height =
            Math.random() * 12 + 8 + "px";

        // Random rotation
        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        // Random animation duration
        confetti.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        // Random delay
        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";

        // Random color
        const colors = [
            "#ff8fc5",
            "#ffd1e5",
            "#ffffff",
            "#f4b942",
            "#ff5fa2"
        ];

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(confetti);


        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 6000);

    }

}