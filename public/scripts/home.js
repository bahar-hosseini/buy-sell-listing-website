// Client facing scripts here
$(() => {
  $('#fetch-products').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/home'
    })
      .done((response) => {
        const $productList = $('#products');
        $productList.empty();

        for (const product of response.products) {
          $(`<li class="user">`).text(product.name).appendTo($productList);
        }
      });
  });
});
