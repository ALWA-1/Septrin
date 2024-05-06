const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', function() {
   body.classList.toggle('dark-theme');
   themeToggle.classList.toggle('fa-sun');
   themeToggle.classList.toggle('fa-moon');
 });