/* =========================================================
   HAILEY
   SHARED NAVIGATION SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------------------------
       TOP PRIMARY NAVIGATION
       ------------------------------------------------------- */

    const primaryNavigation = [
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
        }
    ];


    /* -------------------------------------------------------
       SECONDARY NAVIGATION
       ------------------------------------------------------- */

    const secondaryNavigation = [
        {
            name: "Portfolio",
            url: "projects.html"
        },
        {
            name: "Personal",
            url: "personal.html"
        }
    ];


    /* -------------------------------------------------------
       CREATE PRIMARY NAVIGATION
       ------------------------------------------------------- */

    const primaryNav =
        document.getElementById("primary-nav");

    if (primaryNav) {

        primaryNavigation.forEach(function (item) {

            const link = document.createElement("a");

            link.href = item.url;
            link.textContent = item.name;

            /* Highlight current page */

            const currentPage =
                window.location.pathname.split("/").pop();

            if (
                currentPage === item.url ||
                (currentPage === "" &&
                 item.url === "index.html")
            ) {
                link.classList.add("active");
            }

            primaryNav.appendChild(link);

        });

    }


    /* -------------------------------------------------------
       CREATE SECONDARY NAVIGATION
       ------------------------------------------------------- */

    const secondaryNav =
        document.getElementById("secondary-nav");

    if (secondaryNav) {

        secondaryNavigation.forEach(function (item) {

            const link = document.createElement("a");

            link.href = item.url;
            link.textContent = item.name;

            secondaryNav.appendChild(link);

        });

    }


    /* -------------------------------------------------------
       LOGO
       ------------------------------------------------------- */

    const logoArea =
        document.getElementById("logo-area");

    if (logoArea) {

        logoArea.innerHTML = `
            <a
                href="index.html"
                class="logo"
                aria-label="Hailey home"
            >
                Hailey
            </a>
        `;

    }

});
