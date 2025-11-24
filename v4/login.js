
const form = document.getElementById('registroForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const usuario = document.getElementById('usuario').value;
  alert(`✅ Bem-vindo, ${usuario}! Registro realizado com sucesso.`);
  form.reset(); 
});
