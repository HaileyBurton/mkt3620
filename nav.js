/* =========================================================
   HAILEY WEBSITE
   Reusable Navigation System
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------------------------------------
       MAIN NAVIGATION
       Change the hrefs here if your filenames are different
       ------------------------------------------------------- */

    const navigationItems = [
        {
            name: "About Me",
            url: "about.html"
        },
        {
            name: "Personal",
            url: "personal.html"
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
       Optional — remove items if you don't need them
       ------------------------------------------------------- */

    const secondaryItems = [
        {
            name: "Home",
            url: "index.html"
        },
        {
            name: "Portfolio",
            url: "projects.html"
        }
    ];


    /* -------------------------------------------------------
       FIND NAVIGATION CONTAINERS
       ------------------------------------------------------- */

    const primaryNavigation =
        document.getElementById("primary-navigation");

    const secondaryNavigation =
        document.getElementById("secondary-navigation");


    /* -------------------------------------------------------
       CREATE PRIMARY NAVIGATION
       ------------------------------------------------------- */

    if (primaryNavigation) {

        navigationItems.forEach(function (item) {

            const link = document.createElement("a");

            link.href = item.url;
            link.textContent = item.name;

            /*
               Automatically identify the current page
            */

            if (
                window.location.pathname.endsWith(item.url)
            ) {
                link.classList.add("active");
            }

            primaryNavigation.appendChild(link);

        });
    }


    /* -------------------------------------------------------
       CREATE SECONDARY NAVIGATION
       ------------------------------------------------------- */

    if (secondaryNavigation) {

        secondaryItems.forEach(function (item) {

            const link = document.createElement("a");

            link.href = item.url;
            link.textContent = item.name;

            if (
                window.location.pathname.endsWith(item.url)
            ) {
                link.classList.add("active");
            }

            secondaryNavigation.appendChild(link);

        });
    }


    /* -------------------------------------------------------
       LOGO
       Clicking Hailey always returns home
       ------------------------------------------------------- */

    const logo = document.getElementById("site-logo");

    if (logo) {

        logo.innerHTML = `
            <a href="index.html" aria-label="Hailey home">
                Hailey
            </a>
        `;

    }

});
