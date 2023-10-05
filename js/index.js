$(document).ready(function () {
    // Obtém a referência para a div do carrossel
    const carouselInner = $('#productCarousel .carousel-inner');

    // Itera sobre a matriz de produtos e adiciona os itens ao carrossel
    products.forEach(product => {
        const item = `
            <div class="carousel-item">
                <img src="${product.image}" class="d-block w-100" alt="${product.name}" style="max-height: 200px; max-width: 200px;">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                    <p>Preço: R$ ${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        carouselInner.append(item);
    });

    // Ativa o primeiro item do carrossel
    $('#productCarousel .carousel-item').first().addClass('active');
});
