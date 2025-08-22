// AOS
AOS.init({ once: true, duration: 700, offset: 60 });

// Typed hero
new Typed('#typed', {
  strings: ['I build AI/ML projects 🤖', 'I code in Python & C++ 💻', 'I love problem solving 🧠', 'Engineering clarity in every line of code ✨'],
  typeSpeed: 45, backSpeed: 18, backDelay: 1200, loop: true
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
function setTheme(t){
  document.documentElement.setAttribute('data-bs-theme', t);
  localStorage.setItem('theme', t);
  themeToggle.innerHTML = t === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
}
const saved = localStorage.getItem('theme'); setTheme(saved || 'dark');
themeToggle.addEventListener('click', ()=> setTheme(document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'));

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{ backToTop.style.display = window.scrollY > 500 ? 'inline-flex' : 'none'; });
backToTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

/* --- Personalization (edit these) --- */
const PROFILE = {
  name: 'Ishu Chaudhary',
  email: 'chaudharyphogat04@gmail.com',
  phone: '+91 70889 50229',
  links: {
    github: 'https://github.com/IshuChaudhary22',
    linkedin: 'https://www.linkedin.com/in/ishu-phogat-ba9850312/',
    twitter: 'https://twitter.com/',   // update to your handle if any
    kaggle: 'https://kaggle.com/'      // update to your profile if any
  }
};

// Inject values into HTML
document.getElementById('yourName').textContent = PROFILE.name;
document.getElementById('footerName').textContent = PROFILE.name;
document.getElementById('emailLink').href = `mailto:${PROFILE.email}`;
document.getElementById('emailLink').textContent = PROFILE.email;
document.getElementById('phoneLink').href = `tel:${PROFILE.phone.replace(/\s+/g,'')}`;
document.getElementById('phoneLink').textContent = PROFILE.phone;
document.getElementById('githubLink').href = PROFILE.links.github;
document.getElementById('linkedinLink').href = PROFILE.links.linkedin;
document.getElementById('twitterLink').href = PROFILE.links.twitter;
document.getElementById('kaggleLink').href = PROFILE.links.kaggle;
