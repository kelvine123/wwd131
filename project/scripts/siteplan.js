// Toggle mobile navigation
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// Footer year
document.querySelector("#currentyear").textContent = new Date().getFullYear();