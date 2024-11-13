const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

// Função para exibir o popup de confirmação
function showConfirmation(event) {
  event.preventDefault(); // Impede que o formulário seja enviado (evitar o recarregamento da página)
  
  // Exibir o popup de confirmação
  document.getElementById("confirmationPopup").style.display = "block";
}

// Selecionando o slide do carrossel
const carouselSlide = document.querySelector('.carousel-slide');

// Pegando todas as imagens do carrossel
const carouselItems = document.querySelectorAll('.carousel-item');

// Definindo o índice inicial
let index = 0;

// Função para mover o carrossel
function moveCarousel() {
    // Move o carrossel para a próxima imagem (em pixels)
    carouselSlide.style.transform = `translateX(-${index * 100}%)`;
    
    // Atualiza o índice para a próxima imagem
    index++;

    // Se o índice for maior que o número de imagens, reinicia o carrossel
    if (index >= carouselItems.length) {
        index = 0;
    }
}

// Faz o carrossel rodar a cada 3 segundos (3000ms)
setInterval(moveCarousel, 2000);


// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

// Digitando Telefone
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
  if (value.length > 10) value = value.slice(0, 11); // Limita a 11 dígitos para celular

  // Formata o número conforme o usuário digita
  if (value.length > 6) {
    e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  } else if (value.length > 2) {
    e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else if (value.length > 0) {
    e.target.value = `(${value}`;
  }
});

// Data Atual no Calendário
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const day = String(today.getDate()).padStart(2, '0'); 
document.getElementById('date').value = `${year}-${month}-${day}`;