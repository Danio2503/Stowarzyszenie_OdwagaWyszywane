window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");  
    if (!header) {
        console.warn("script.js: No <header> element found.");
        return;
    }
    fetch("../nav.html")
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`);
            return res.text();
        })
        .then((html) => {
            header.innerHTML = html;
        })
        .catch((err) => {
            console.error("nav-loader.js: Failed to load nav.html:", err);
        });
});