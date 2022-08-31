
// this script checks if the input values are valid
$(document).ready(()=> {


  const name = document.getElementById('name')
  const description = document.getElementById('desc')
  const image = document.getElementById('img')
  const price = document.getElementById('price')
  const form = document.getElementById('addProductForm')
  const errorElement = document.getElementById('error')

  form.addEventListener('submit', (e) => {
    let message = []
    if (isNaN(price.value) ) {
      message.push("Invalid price!")
    }

    if (message.length > 0) {
      e.preventDefault()
      errorElement.innerText = message.join(', ')
    }

  })

})
