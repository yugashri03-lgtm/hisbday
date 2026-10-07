/* =========================================
   BIRTHDAY DATE
========================================= */

// October 9, 2026
// 12:00:00 AM
// Indian Standard Time (+05:30)

const birthday =
    new Date("2026-10-09T00:00:00+05:30").getTime();


/* =========================================
   ELEMENTS
========================================= */

const countdownSection =
    document.getElementById("countdownSection");

const birthdaySection =
    document.getElementById("birthdaySection");


/* =========================================
   COUNTDOWN
========================================= */

function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        birthday - now;


    /* -------------------------------------
       BEFORE MIDNIGHT
    ------------------------------------- */

    if (distance > 0) {

        // Keep birthday message LOCKED
        countdownSection.classList.remove("hidden");

        birthdaySection.classList.add("hidden");


        // Calculate time

        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        // Display countdown

        document.getElementById("days")
            .textContent =
            String(days).padStart(2, "0");


        document.getElementById("hours")
            .textContent =
            String(hours).padStart(2, "0");


        document.getElementById("minutes")
            .textContent =
            String(minutes).padStart(2, "0");


        document.getElementById("seconds")
            .textContent =
            String(seconds).padStart(2, "0");


        return;
    }


    /* -------------------------------------
       EXACTLY 12:00 AM
    ------------------------------------- */

    countdownSection.classList.add("hidden");

    birthdaySection.classList.remove("hidden");


    // Start celebration
    createConfetti();
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    // Don't create it repeatedly
    if (
        document.querySelector(".confetti-piece")
    ) {
        return;
    }


    const container =
        document.getElementById("confetti");


    const confettiColors = [
        "#c9a45c",
        "#ffffff",
        "#e8b4b8",
        "#d8c1ff"
    ];


    for (let i = 0; i < 180; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        // Random horizontal position

        piece.style.left =
            Math.random() * 100 + "vw";


        // Random animation delay

        piece.style.animationDelay =
            Math.random() * 2 + "s";


        // Random size

        piece.style.width =
            Math.random() * 6 + 5 + "px";

        piece.style.height =
            Math.random() * 10 + 8 + "px";


        // Random color

        piece.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];


        container.appendChild(piece);
    }
}


/* =========================================
   START
========================================= */

updateCountdown();


// Update every second

setInterval(
    updateCountdown,
    1000
);