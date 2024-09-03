document.addEventListener("DOMContentLoaded", function () {
  const showLoginButton = document.getElementById('showLogin');
  const showRegisterButton = document.getElementById('showRegister');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // Mostrar o formulário de login e esconder o formulário de cadastro
  showLoginButton.addEventListener('click', function () {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  // Mostrar o formulário de cadastro e esconder o formulário de login
  showRegisterButton.addEventListener('click', function () {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });
});


// REDIRECIONAR PARA OUTRA TELA

function redirecionarParaProdutos() {
  console.log('Redirecionando para a página de produtos...');

  // Agora faça o redirecionamento
  window.location.href = 'produtos.html';
}