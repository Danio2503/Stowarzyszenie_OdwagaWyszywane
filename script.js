document.addEventListener('DOMContentLoaded', () => {
    // Automatically detect the path to nav.html
    const levelsUp = location.pathname.split('/').length - 2;
    const navPath = '../'.repeat(levelsUp) + 'nav.html';    
    console.log('Trying to fetch nav from:', navPath); // Debug info    
    fetch(navPath, { cache: 'no-store' })
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            return res.text();
        })
        .then(html => {
            const header = document.querySelector('header');
            if (header) {
                header.innerHTML = html;
            } else {
                console.error('No <header> found to inject nav into.');
            }
        })
        .catch(err => {
            console.error('Failed to load nav.html:', err);
        });
});
