const products = [
    {
        id: 1,
        name: "Playstation 4",
        description: "Em otimo estado de conservação",
        image: "img/ofertas/ps-4.jpg",
        price: 5250.00
    },
    {
        id: 2,
        name: "God Of War Ragnarok",
        description: "O mais recente jogo da franquia para PS-4",
        image: "img/ofertas/GOW-Ragnarok-ps4.jpg",
        price: 550.00
    },
    {
        id: 3,
        name: "Playstation 2",
        description: "Game em bom estado de conservação",
        image: "img/ofertas/ps-2.jpg",
        price: 1250.00
    },
    {
        id: 4,
        name: "God Of War 1",
        description: "O primeiro jogo da serie",
        image: "img/ofertas/GOW-Ps2.jpg",
        price: 250.00
    },
    // Adicione mais produtos conforme necessário
];


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
        productPrice.textContent = `$${product.price.toFixed(2)}`;

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

// Chame a função para exibir produtos quando a página for carregada
window.onload = displayProducts;