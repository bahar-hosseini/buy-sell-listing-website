// Client facing scripts here


// A Function to create each product element
const appendMessage = (messageObj) =>{
  // escape function to prevent xxs

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






const $messageForm = $('form');
$messageForm.submit((event)=>{
  event.preventDefault();
  $.ajax({
    type: 'POST',
    url:'/api/messages',
    data: $messageForm.serialize(),
  })
    .done((res)=>{
      console.log('ajax post success',res);
      // window.location.reload(true);
    })
    .fail(err =>console.log('ajax post failure:',err));
});




// This script loads product info when the page loads
$(document).ready(function() {

  // Load product information
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
    .done((response) => {

      console.log('THIS IS RESPONSE.MESSAGE',response.messages);
      for (const message of response.messages) {
        appendMessage(message);
      }
    });

});
