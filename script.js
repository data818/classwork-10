fetch("https://fakestoreapi.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    const container = document.getElementById("productList");

    products.forEach(function (product) {
      const productElement = document.createElement("div");

      productElement.innerHTML =
        "<h2>" +
        product.title +
        "</h2>" +
        "<p><strong>Price:</strong> $" +
        product.price +
        "</p>" +
        "<img src='" +
        product.image +
        "' alt='" +
        product.title +
        "' width='100'>" +
        "<hr>";

      container.appendChild(productElement);
    });
  })
  .catch(function (error) {
    console.log("შეცდომა!");
  });
