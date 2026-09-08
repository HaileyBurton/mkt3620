const navItems = [
    {
        name: "Home",
        url: "index.html"
    },
    {
        name: "About Me",
        url: "about.html"
    },
    {
        name: "Experience",
        url: "experience.html"
    },
    {
        name: "Projects",
        url: "projects.html"
    },
    {
        name: "Resume",
        url: "resume.html"
    },
    {
        name: "Contact",
        url: "contact.html"
    },
    {
        name: "Portfolio",
        url: "projects.html"
    },
    {
        name: "Personal",
        url: "personal.html"
    }
];


const currentPage =
    window.location.pathname.split("/").pop() || "index.html";


const navigation = document.getElementById("navigation");


navigation.innerHTML = `

    <a href="index.html" class="logo">
        Hailey
    </a>

    <div class="nav-links">

        ${navItems.map(item => `

            <a
                href="${item.url}"
                class="${currentPage === item.url ? "active" : ""}"
            >
                ${item.name}
            </a>

        `).join("")}

    </div>

`;
