// nav.js
// Shared navigation used across the entire website

document.addEventListener("DOMContentLoaded", function () {

    const navigation = `
        <nav class="site-nav">

            <a href="index.html" class="logo">hailey</a>

            <div class="nav-links">
                <a href="about.html">About Me</a>
                <a href="summary.html">Professional Summary</a>
                <a href="personal.html">Personal</a>
            </div>

        </nav>
    `;

    // Add navigation to the beginning of the page
    document.body.insertAdjacentHTML("afterbegin", navigation);

});
