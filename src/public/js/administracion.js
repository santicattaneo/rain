document.getElementById('admin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const verifyDiv = document.querySelector('.verify');
    if (password === "comunicacionalways") {
        verifyDiv.style.display = 'none';
    }
});