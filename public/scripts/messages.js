// Client facing scripts here


// A Function to create each product element
const appendMessage = (messageObj) =>{

  const productTemplate = `
  <div class="product-message">
  <h2>${messageObj.product}</h2>
  <a href="/product/${messageObj.product_id}"><img src="${messageObj.photo}"/></a>
  <p> Username: ${messageObj.username}</p>
  <p> Message: ${messageObj.message}</p>

</div>
  `;
  $('.messages-container').append(productTemplate);
};


// This script loads messages when the page loads
$(document).ready(function() {

  // Ajax message post
  const $messageForm = $('#messsage-form');
  $messageForm.submit((event)=>{
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url:'/api/messages',
      data: $messageForm.serialize(),
    })
      .done((res)=>{
        console.log('ajax post success',res);
        $('#list-messages').append(`${res.messages.message}`);
      })
      .fail(err =>console.log('ajax post failure:',err));
  });

  // Load product information
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
    .done((response) => {

      for (const message of response.messages) {
        appendMessage(message);
      }
    });
});





