// Client facing scripts here

// This script loads product info when the page loads
$(document).ready( function () {

  // Load product information
  $.ajax({
    method: 'GET',
    url: '/api/products'
  })
  .done((response) => {
    const $productsList = $('#products');
    $productsList.empty();

    for(const product of response.products) {
      $(`<li class="product">`).text(product.name).appendTo($productsList);
    }
  });

});
