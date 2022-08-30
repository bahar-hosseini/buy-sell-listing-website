// Client facing scripts here


// A Function to create each product element
const appendMessage = (messageObj) =>{
  const productTemplate = `
  <div class="product-message">
  <h2>${messageObj.product}</h2>
  <img src="${messageObj.photo}"/>
  <p>${messageObj.username}: ${messageObj.message}</p>
   <p>msg Admin</p>
</div>
  `;
  $('.messages-container').append(productTemplate);
};


// This script loads product info when the page loads
$(document).ready(function() {

  // Load product information
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
    .done((response) => {
      // const $productsList = $('#products');
      // $productsList.empty();

      console.log(response.messages);
      for (const message of response.messages) {
        appendMessage(message);
      }
    });

});
