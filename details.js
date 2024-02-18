document.addEventListener('DOMContentLoaded', function() {
    function parseQueryParams() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const params = {};
        for (const [key, value] of urlParams) {
            params[key] = value;
        }
        return params;
    }

    const userDetailsDiv = document.getElementById('userDetails');
    const params = parseQueryParams();

    let content = '<ul>';
    if (Object.keys(params).length) {
        for (const [key, value] of Object.entries(params)) {
            const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            content += `<li>${formattedKey}: <strong>${value || 'Not provided'}</strong></li>`;
        }
    } else {
        content += '<li>No details were provided.</li>';
    }
    content += '</ul>';

    userDetailsDiv.innerHTML = content;
});
