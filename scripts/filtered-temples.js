const temples = [{
        templeName: "Nairobi Kenya",
        location: "Nairobi, Kenya",
        dedicated: "2025-05-18",
        area: 9800,
        imageUrl: "images/nairobi.jpeg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41010,
        imageUrl: "images/rome.jpeg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "images/salt.jpeg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17500,
        imageUrl: "images/accra.jpeg"
    },
    {
        templeName: "Johannesburg",
        location: "Johannesburg, South Africa",
        dedicated: "1985-08-24",
        area: 19184,
        imageUrl: "images/johannesburg.jpeg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44175,
        imageUrl: "images/paris.jpeg"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958-09-07",
        area: 42652,
        imageUrl: "images/london.jpeg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "images/aba.jpeg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984-09-25",
        area: 26683,
        imageUrl: "images/manila.jpeg"
    }
];

const container = document.querySelector(".gallery");

function displayTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(img);
        card.appendChild(caption);
        container.appendChild(card);
    });
}

// Default display
displayTemples(temples);

// Filters
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", () =>
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);
document.querySelector("#new").addEventListener("click", () =>
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);
document.querySelector("#large").addEventListener("click", () =>
    displayTemples(temples.filter(t => t.area > 90000))
);
document.querySelector("#small").addEventListener("click", () =>
    displayTemples(temples.filter(t => t.area < 10000))
);

// Footer dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;