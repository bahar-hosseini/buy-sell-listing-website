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








// This script loads product info when the page loads
$(document).ready(function() {

  // Ajax message post
  const $messageForm = $('#messsage-form');
  $messageForm.submit((event)=>{
    event.preventDefault();
    console.log('hello world');
    $.ajax({
      type: 'POST',
      url:'/api/messages',
      data: $messageForm.serialize(),
    })
      .done((res)=>{
        console.log('ajax post success',res);
        $(`ul`).append(`${res.messages.message}`)
      // window.location.reload(true);
      })
      .fail(err =>console.log('ajax post failure:',err));
  });




  console.log('new test');
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




  // $('#messsage-form').submit((event)=>{
  //   alert('test ')
  //   event.preventDefault();
  //   console.log('hello world');
  // });

});
