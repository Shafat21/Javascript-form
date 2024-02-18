document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const formData = new FormData(form);
        const queryParams = new URLSearchParams();
        for (const [key, value] of formData) {
            queryParams.append(key, value);
        }

        window.location.href = `details.html?${queryParams.toString()}`;
    });
});
