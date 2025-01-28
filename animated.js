function showLoadingAnimation(event) {
    event.preventDefault(); // Zatrzymanie domyślnego działania linku
    const href = event.currentTarget.getAttribute('href');

    // Dodaj efekt zanikania przed przejściem
    document.body.style.animation = "fadeOut 0.5s ease-in-out";

    // Po zakończeniu animacji przenieś na nową stronę
    setTimeout(() => {
        window.location.href = href;
    }, 500);
}
