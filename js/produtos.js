document.addEventListener('DOMContentLoaded', function() {
    // Dados dos produtos
    const products = [
      {
        name: "Produto 1",
        description: "Descrição breve do Produto 1.",
        price: "R$ 100,00",
        images: [
          "img/LogoVerde.png",
          "img/Logobranco.png",
          "img/Logoverde.png"
        ]
      },
      {
        name: "Produto 2",
        description: "Descrição breve do Produto 2.",
        price: "R$ 150,00",
        images: [
          "img/Logoverde.png",
          "img/Logobranco.png",
          "img/Logoverde.png"
        ]
      },
      {
        name: "Produto 3",
        description: "Descrição breve do Produto 3.",
        price: "R$ 200,00",
        images: [
          "img/Logoverde.png",
          "img/Logobranco.png",
          "img/Logoverde.png"
        ]
      },
      {
        name: "Produto 4",
        description: "Descrição breve do Produto 4.",
        price: "R$ 250,00",
        images: [
          "img/Logoverde.png",
          "img/Logobranco.png",
          "img/Logoverde.png"
        ]
      }
    ];
  
    // Contêiner para os cards
    const container = document.getElementById('productsContainer');
  
    // Função para criar um carrossel
    function createCarousel(images, index) {
      const carouselId = `carousel-${index}`;
      return `
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            ${images.map((_, i) => `
              <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>
            `).join('')}
          </div>
          <div class="carousel-inner">
            ${images.map((imgSrc, i) => `
              <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="${imgSrc}" class="d-block w-100" alt="Produto Image ${i + 1}">
              </div>
            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      `;
    }
  
    // Função para criar um card
    function createCard(product, index) {
      return `
        <div class="col-md-6 mb-4">
          <div class="card">
            ${createCarousel(product.images, index)}
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-price">${product.price}</p>
            </div>
          </div>
        </div>
      `;
    }
  
    // Adiciona todos os cards ao contêiner
    container.innerHTML = products.map((product, index) => createCard(product, index)).join('');
  
    // Configura o intervalo de tempo para o carrossel
    document.querySelectorAll('.carousel').forEach(carousel => {
      new bootstrap.Carousel(carousel, {
        interval: 10000, // Tempo de transição em milissegundos (5 segundos)
        ride: 'carousel'
      });
    });
  });