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


document.addEventListener(
    "DOMContentLoaded",
    function () {


        const navigationContainer =
            document.getElementById("navigation");


        if (!navigationContainer) {

            return;

        }


        let currentPage =
            window.location.pathname
                .split("/")
                .pop();


        if (!currentPage) {

            currentPage = "index.html";

        }


        navigationContainer.innerHTML = `

            <div class="nav-links">

                ${navigationItems.map(function (item) {

                    let isActive = false;


                    if (
                        item.url === currentPage
                    ) {

                        isActive = true;

                    }


                    if (
                        item.name === "Explore" &&
                        window.location.hash === "#explore"
                    ) {

                        isActive = true;

                    }


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
