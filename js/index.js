$(document).ready(function () {
    // Obtém a referência para a div do carrossel
    const carouselInner = $('#productCarousel .carousel-inner');

    // Itera sobre a matriz de produtos e adiciona os itens ao carrossel
    products.forEach(product => {
        const item = `
            <div class="carousel-item prod-item">
                <img src="${product.image}" class="" alt="${product.name}" style="max-height: 200px;">
                <div class="carousel-caption ">
                    <div class="container">
                        <div>
                            <div class="col-lg-7 pt-5">
                                <h5>${product.name}</h5>
                                <h6>${product.description}</h6>
                                <h6>Preço: R$ ${product.price.toFixed(2)}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        carouselInner.append(item);
    }); 

    // Ativa o primeiro item do carrossel
    $('#productCarousel .carousel-item').first().addClass('active');
});
