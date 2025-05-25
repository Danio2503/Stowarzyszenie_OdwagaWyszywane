fetch('/nav.html')
    .then(res => res.text())
    .then(data => {
        console.log('Fetched nav.html:', data); // See exactly what is fetched
        document.querySelector('header').innerHTML = data;
    })
    .catch(err => console.error('Error loading nav:', err));




document.addEventListener('DOMContentLoaded', () => {   
    const pathParts = window.location.pathname.split('/');
    const depth = pathParts.length - 2;
    const navPath = '../'.repeat(depth) + 'nav.html';
    fetch(navPath, { cache: 'no-store' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const header = document.querySelector('header');
            if (header) {
                header.innerHTML = html;
            } else {
                console.error('No <header> element found in the document.');
            }
        })
        .catch(error => {
            console.error('Failed to load nav.html:', error);
        });
});
