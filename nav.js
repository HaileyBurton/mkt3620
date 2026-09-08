/* =========================================================
   HAILEY
   SHARED NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

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
        }
    ];


    /* =====================================================
       LOGO
       ===================================================== */

    const logoContainer =
        document.getElementById("logo-container");

    if (logoContainer) {

        logoContainer.innerHTML = `
            <a
                href="index.html"
                class="logo"
                aria-label="Hailey home"
            >
                Hailey
            </a>
        `;

    }


    /* =====================================================
       NAVIGATION LINKS
       ===================================================== */

    const navContainer =
        document.getElementById("nav-links");

    if (navContainer) {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop();


        navigationItems.forEach(function (item) {

            const link =
                document.createElement("a");

            link.href = item.url;

            link.textContent = item.name;


            /* Highlight current page */

            if (
                currentPage === item.url ||
                (
                    currentPage === "" &&
                    item.url === "index.html"
                )
            ) {

                link.classList.add("active");

            }


            navContainer.appendChild(link);

        });

    }

});
