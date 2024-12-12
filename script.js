// JavaScript to create a "twinkle" effect for the star and gifts
document.addEventListener("DOMContentLoaded", function () {
    const gifts = document.querySelectorAll(".gift");
    gifts.forEach(gift => {
        setInterval(() => {
            gift.style.boxShadow = `0 0 ${Math.random() * 10 + 10}px rgba(255, 255, 255, 0.7)`;
        }, 500);
    });

    const star = document.querySelector(".star");
    setInterval(() => {
        star.style.opacity = Math.random() * 0.5 + 0.5;  // Star twinkling effect
    }, 300);
});
