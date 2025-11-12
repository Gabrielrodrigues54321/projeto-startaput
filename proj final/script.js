
window.addEventListener('load', function() {
  alert("👋 Bem-vindo ao site Laerte Transporte!\nConfira as rotas disponíveis na sua região.");
});


const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert("✅ Obrigado pela mensagem! Em breve entraremos em contato.");
    form.reset(); 
  });
}


const menuLinks = document.querySelectorAll('.menu a');
const menuToggle = document.getElementById('menu-toggle');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
});
