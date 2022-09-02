// Client facing scripts here

// This scripts loads filtered products to the page

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
  ////////////////////////////////////////////////////////////
  const max = document.getElementById('maxId')
  const min = document.getElementById('minId')
  const errorElement = document.getElementById('error')

  $("form").submit((e) => {
    let message = []
    if (isNaN(max.value) || isNaN(min.value)) {
      message.push("Invalid input!")
    }

    if (message.length > 0) {
      e.preventDefault()
      errorElement.innerText = message.join(', ')
    }

  })

///////////////////////////////////////////////////////////////
  // Load product information
  $("form").submit(function (event) {
    event.preventDefault();

     $('section').empty();
    let val = $('#addProductForm').serialize()
    console.log(val)

    $.ajax({
      method: 'POST',
      url: '/api/filter/list',
      data: val,
    })
      .done((response) => {
        for (const product of response) {
          appendProduct(product);
        }

        $("form").trigger("reset")
      });
  })
});
