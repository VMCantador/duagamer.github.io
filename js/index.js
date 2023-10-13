$(document).ready(function () {

    function formatarMoeda(numero){
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(numero);
    }

    // Obtém a referência para a div do carrossel
    const carouselInner = $('#productCarousel .carousel-inner');

    // Itera sobre a matriz de produtos e adiciona os itens ao carrossel
    products.forEach(product => {

        const precoFormatado = formatarMoeda(product.price);

        const item = `
            <div class="carousel-item">
                <img src="${product.image}" class="" alt="${product.name}" style="max-height: 200px;">
                <div class="carousel-caption d-flex align-items-end justify-content-center ">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 pt-5">
                                <h5>${product.name}</h5>
                                <h6>Preço: ${precoFormatado}</h6>
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
