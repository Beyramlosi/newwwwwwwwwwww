const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Lorsque le bouton "Sign Up" est cliqué, on active la section d'inscription
registerBtn.addEventListener('click', () => {
  container.classList.add("active");  // Cela active la section d'inscription
  setTimeout(() => {
    registerBtn.style.display = "none"; // Masquer le bouton "Register"
    loginBtn.style.display = "block"; // Afficher le bouton "Login"
  }, 300);
});

// Lorsque le bouton "Sign In" est cliqué, on active la section de connexion
loginBtn.addEventListener('click', () => {
  container.classList.remove("active");  // Cela désactive la section d'inscription
  setTimeout(() => {
    loginBtn.style.display = "none";  // Masquer le bouton "Login"
    registerBtn.style.display = "block"; // Afficher le bouton "Register"
  }, 300);
});
