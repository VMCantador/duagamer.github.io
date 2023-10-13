function formatarMoeda(numero){
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(numero);
}

function displayProducts() {
    const productList = document.getElementById("product-list");
    const productItemTemplate = document.getElementById("product-item-template");

    products.forEach(product => {
        // Clonar o template do item do produto
        const productItem = productItemTemplate.cloneNode(true);
        productItem.style.display = "block"; // Mostrar o item clonado

        // Preencher as informações do produto
        const productImage = productItem.querySelector(".product-image");
        const productName = productItem.querySelector(".product-name");
        const productDescription = productItem.querySelector(".product-description");
        const productPrice = productItem.querySelector(".product-price");

        productImage.src = product.image;
        productImage.alt = product.name;
        productName.textContent = product.name;
        productDescription.textContent = product.description;

        const precoFormatado = formatarMoeda(product.price);
        productPrice.textContent = precoFormatado;

        // Adicionar classes para o card
        productItem.querySelector(".card").classList.remove("d-none");

        // Adicionar o produto à lista
        productList.appendChild(productItem);
    });
}

function openProductDetails(product) {
    const windowHeight = window.innerHeight * 0.8;
    const windowWidth = window.innerWidth * 0.8;

    const popupWindow = window.open("", "_blank", `height=${windowHeight},width=${windowWidth}`);

    const productDetails = document.createElement("div");
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>Preço:</strong> $${product.price.toFixed(2)}</p>
        <img src="${product.image}" alt="${product.name}" style="max-height: 800px;">
    `;

    popupWindow.document.body.appendChild(productDetails);
}

// Chame a função para exibir produtos no carrossel quando a página for carregada

window.onload = displayProducts;