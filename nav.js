/* =========================================================
   HAILEY
   SHARED NAVIGATION
   ========================================================= */


const navigationItems = [

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


document.addEventListener(
    "DOMContentLoaded",
    function () {


        const navigationContainer =
            document.getElementById("navigation");


        if (!navigationContainer) {

            return;

        }


        /* -----------------------------------------
           FIND CURRENT PAGE
           ----------------------------------------- */

        let currentPage =
            window.location.pathname
                .split("/")
                .pop();


        if (!currentPage) {

            currentPage = "index.html";

        }


        /* -----------------------------------------
           CREATE NAVIGATION
           ----------------------------------------- */

        navigationContainer.innerHTML = `

            <div class="nav-links">

                ${navigationItems.map(function (item) {

                    const isActive =
                        currentPage === item.url;

                    return `

                        <a
                            href="${item.url}"
                            class="${isActive ? "active" : ""}"
                        >
                            ${item.name}
                        </a>

                    `;

                }).join("")}

            </div>

        `;

    }
);
