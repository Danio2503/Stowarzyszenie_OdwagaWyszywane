async function LoadLanguage(lang) { // async bcuz fetch wants it idk
    const response = await fetch(`../lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll('[text]').forEach(el => {
        const key = el.getAttribute('text');
        if (translations[key]) el.innerHTML = translations[key];
    });

    // Save preference if you want
    localStorage.setItem('language', lang);
}

// get saved language
const savedLang = localStorage.getItem("language") || "pl";
LoadLanguage(savedLang);
document.getElementById("language-selector").value = savedLang;

// listen for language change
document.getElementById("language-selector").addEventListener("change", (e) => {
    LoadLanguage(e.target.value);
});

