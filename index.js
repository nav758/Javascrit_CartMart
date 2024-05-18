function Component(elementId, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error fetching the component:", error));
}

Component("header", "header.html");
Component("footer", "footer.html");

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("products-container");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$${product.price}`;
    const buy = document.createElement("button");
    buy.classList.add("buy");
    const link = document.createElement("a");
    link.href = `buy.html`;
    link.appendChild(document.createTextNode("Buy"));

    buy.appendChild(link);

    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(description);
    productDiv.appendChild(price);
    productDiv.appendChild(buy);
    container.appendChild(productDiv);
  });
}

fetchProducts();
