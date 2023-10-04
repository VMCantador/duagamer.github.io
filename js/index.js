function displayProductsInCarousel() {
    const carouselItemsContainer = document.querySelector("#products-carousel .carousel-inner");
    const productItemTemplate = document.querySelector("#products-carousel .carousel-item .col-lg-4");

    products.forEach(product => {
        const productItem = productItemTemplate.cloneNode(true);
        productItem.classList.add("active"); // Adiciona a classe 'active' ao primeiro item
        productItem.style.display = "block"; // Mostra o item clonado

        const productImage = productItem.querySelector(".img-mod");
        const productName = productItem.querySelector(".h4");
        const productDescription = productItem.querySelector(".mt-3");

        productImage.src = product.image;
        productImage.alt = product.name;
        productName.textContent = product.name;
        productDescription.textContent = product.description;

        // Adiciona o produto à lista
        carouselItemsContainer.appendChild(productItem);
    });
}

// Chama a função para exibir produtos no carrossel quando a página for carregada
window.onload = displayProductsInCarousel;
