function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('login-error');

    errorMsg.style.display = 'none';

    if (!username || !password) {
        errorMsg.textContent = 'Please enter both username and password.';
        errorMsg.style.display = 'block';
        return;
    }

    // Simulate credential check (never hardcode credentials in production)
    if (username === 'admin' && password === 'password123') {
        errorMsg.style.color = 'green';
        errorMsg.textContent = 'Login successful!';
        errorMsg.style.display = 'block';
        // Redirect or further logic here
    } else {
        errorMsg.style.color = 'red';
        errorMsg.textContent = 'Invalid username or password.';
        errorMsg.style.display = 'block';
    }
}
favouriteMovieGenre('Cowboy')
favouriteFruit('Mango')
favouritMode("Dark")
favouriteEdgeStyle("Rounded")