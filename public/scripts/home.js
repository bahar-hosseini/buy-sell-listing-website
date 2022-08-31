// Client facing scripts here


// A Function to create each product element
const appendProduct = (productObj) =>{
  const productTemplate = `
  <main class="items-container">
  <div class="item">
    <h2>${productObj.name}</h2>
    <a href="/product/${productObj.id}"><img src="${productObj.photo_url}" /></a>
    <p>price: $${productObj.price}</p>
    <details>
      <p>${productObj.description}</p>
    </details>
  </div>
</main>
  `;
  $('section').append(productTemplate);
};


// This script loads product info when the page loads
$(document).ready(function() {

  // Load product information
  $.ajax({
    method: 'GET',
    url: '/api/products'
  })
    .done((response) => {
      const $productsList = $('#products');
      $productsList.empty();


      console.log(response.products);
      for (const product of response.products) {
        appendProduct(product);
        $(`<li class="product">`).text(product.name).appendTo($productsList);
      }

    });
});
