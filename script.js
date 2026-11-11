// Realistic Falling Rose Petals

const petalsContainer = document.querySelector(".petals-container");

function createPetal() {
    const petal = document.createElement("img");

    petal.src = "images/rose-petal.png";
    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.width =
        Math.random() * 20 + 25 + "px";

    petal.style.animationDuration =
        Math.random() * 5 + 6 + "s";

    petal.style.setProperty(
        "--drift",
        (Math.random() * 200 - 100) + "px"
    );

    petal.style.setProperty(
        "--rotation",
        (Math.random() * 720) + "deg"
    );

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 500);



// Open Your Surprise

function showMessage() {
    document.getElementById("surprise").innerHTML = `
        <div class="surprise-hearts">
            <span>💖</span>
            <span>💕</span>
            <span>✨</span>
        </div>
        <h2>Forever & Always ❤️</h2>
        <p>Two Hearts, One Beautiful Love Story.</p>
    `;
}