// Client facing scripts here


// A Function to create each product element
const appendProduct = (productObj) =>{
  const productTemplate = `
  <main class="items-container">
  <div class="item">
    <a href="/product/${productObj.id}"><img src="${productObj.photo_url}" /></a>
    <div class="name">${productObj.name}</div>
    <div class="price">$${productObj.price}.00</div>
    <center>
    <details>
      <div>${productObj.description}</div>
    </details>
    </center>
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
