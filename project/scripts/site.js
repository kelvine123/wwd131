/* =========================
   JOIN THE MOVEMENT FORM
========================= */
const donationForm = document.getElementById("donationForm");
const formConfirmation = document.getElementById("formConfirmation");

if (donationForm && formConfirmation) {
    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value;

        formConfirmation.textContent =
            `Thank you, ${fullName}! Your information has been successfully submitted.`;
        formConfirmation.classList.add("thank-you");

        donationForm.reset();
    });
}

/* =========================
   DONATION AMOUNT SELECTION
========================= */
const amountButtons = document.querySelectorAll(".amount");
const otherAmount = document.getElementById("otherAmount");
const donationMessage = document.getElementById("donationMessage");
const submitDonationBtn = document.getElementById("submitDonationBtn");
const donationConfirmation = document.getElementById("donationConfirmation");

// Handle preset donation buttons
amountButtons.forEach(button => {
    button.addEventListener("click", () => {
        amountButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        if (otherAmount) otherAmount.value = "";

        const amount = Number(button.dataset.value);

        donationMessage.textContent =
            `Your $${amount}.00 monthly donation can give ${amount * 6} people clean water every year.`;

        // Clear previous thank-you message
        donationConfirmation.textContent = "";
        donationConfirmation.classList.remove("thank-you");
    });
});

/* =========================
   CUSTOM DONATION AMOUNT
========================= */
if (otherAmount) {
    otherAmount.addEventListener("input", () => {
        amountButtons.forEach(btn => btn.classList.remove("active"));

        const value = Number(otherAmount.value);
        if (value > 0) {
            donationMessage.textContent =
                `Your $${value}.00 monthly donation helps fund clean water projects.`;

            donationConfirmation.textContent = "";
            donationConfirmation.classList.remove("thank-you");
        }
    });
}

/* =========================
   SUBMIT DONATION BUTTON
========================= */
if (submitDonationBtn && donationConfirmation) {
    submitDonationBtn.addEventListener("click", () => {
        donationConfirmation.textContent =
            "Thank you for your generous support! Your donation makes a real difference 💚";

        donationConfirmation.classList.add("thank-you");
    });
}
// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.createElement("button");
menuToggle.id = "menuToggle";
menuToggle.className = "menu-toggle";
menuToggle.innerHTML = "☰"; // hamburger icon
document.querySelector("header").appendChild(menuToggle);

const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("show");
    menuToggle.textContent = navigation.classList.contains("show") ? "✖" : "☰";
});

// Handle all back-arrow links
document.querySelectorAll('[data-back]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // prevent default "#" behavior
        history.back(); // go back to previous page
    });
});

/* =========================
   FOOTER INFO
========================= */
// Set current year
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Set last modified date
const lastModified = document.getElementById("lastModified");
if (lastModified) lastModified.textContent = `Last Modified: ${document.lastModified}`;