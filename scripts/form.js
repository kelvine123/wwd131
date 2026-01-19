// Product Array
const products = [
    { id: "p100", name: "Solar Water Pump" },
    { id: "p101", name: "Smart Irrigation Controller" },
    { id: "p102", name: "Water Filtration System" },
    { id: "p103", name: "Rainwater Harvesting Tank" }
];

// Populate product select
const productSelect = document.querySelector("#product");
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Review counter using localStorage
const reviewCountDisplay = document.querySelector("#reviewCount");
if (reviewCountDisplay) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    reviewCountDisplay.textContent = `You have submitted ${count} review(s).`;
}

// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;