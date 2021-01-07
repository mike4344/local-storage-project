window.addEventListener("DOMContentLoaded", (event) => {
let form = document.querySelector("form")
let select = document.getElementById('items')
let count = 0
form.addEventListener('submit',event => {
  event.preventDefault()
  count ++
  localStorage.setItem(`cart${count}`, select.value)

})
  // const showCart = () => {

  // };

  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});
