/* =========================================================
   HAILEY SHARED NAVIGATION
   ========================================================= */


const navigationItems = [

    {
        name: "Home",
        url: "index.html"
    },

    {
        name: "Explore",
        url: "#explore"
    },

    {
        name: "Projects",
        url: "projects.html"
    },

    {
        name: "About Me",
        url: "about.html"
    },

    {
        name: "Contact",
        url: "contact.html"
    }

];


document.addEventListener("DOMContentLoaded", function () {


    const nav = document.getElementById("nav");


    if (!nav) {
        return;
    }


    let currentPage =
        window.location.pathname
            .split("/")
            .pop();


    if (currentPage === "") {
        currentPage = "index.html";
    }


    let html = '<div class="nav-links">';


    navigationItems.forEach(function (item) {


        let active = "";


        if (item.url === currentPage) {
            active = "active";
        }


        if (
            item.name === "Explore" &&
            window.location.hash === "#explore"
        ) {
            active = "active";
        }


        html += `

            <a
                href="${item.url}"
                class="${active}"
            >
                ${item.name}
            </a>

        `;

    });


    html += "</div>";


    nav.innerHTML = html;

});
