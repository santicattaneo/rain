const form = document.getElementById('hablemos-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('/api/hablemos', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status === 201) {
            window.location.href = '/gracias';
        } else {
            window.location.href = '/error';
        }
    })
    .catch(error => {
        window.location.href = '/error';
    });
});