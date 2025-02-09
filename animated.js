document.addEventListener("DOMContentLoaded", () => {
    // Animacja uruchamia się, gdy strona jest w pełni załadowana
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
        element.style.visibility = "visible"; // Pokazuje element przed animacją
        element.classList.add("visible");
    });
});

function showLoadingAnimation(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    document.body.style.animation = "fadeOut 0.5s ease-in-out";

    setTimeout(() => {
        window.location.href = href;
    }, 500);
}
