window.addEventListener("DOMContentLoaded", (event) => {
let form = document.querySelector("form");
let select = document.getElementById('items');
let shopping = document.getElementById('shopping-cart');
let quantity = document.getElementById('quantity');
form.addEventListener('submit',event => {
  event.preventDefault()
  localStorage.setItem(`${select.value}`, quantity.value);
  showCart()
})

const showCart = () => {
for (let i = 0; i< localStorage.length; i ++) {
  console.log(localStorage.key(i))
}
};



  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});
