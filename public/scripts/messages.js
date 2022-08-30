$.ajax({
  method: 'GET',
  url: '/api/messages'
})
  .done((response) => {
    const $productsList = $('#products');
    $productsList.empty();

    console.log(response.products);
    for (const product of response.products) {
      appendProduct(product);
    }
  });


