window.addEventListener("DOMContentLoaded", (event) => {
let form = document.querySelector("form");
let select = document.getElementById('items');
let shopping = document.getElementById('shopping-cart');
let quantity = document.getElementById('quantity');
let ul = document.createElement('ul');
shopping.appendChild(ul);
form.addEventListener('submit',event => {
  event.preventDefault()
  localStorage.setItem(`${select.value}`, quantity.value);
 // location.reload()
})

const showCart = () => {
  ul.innerHTML = ''
for (let i = 0; i< localStorage.length; i ++) {
  let li = document.createElement('li');
  let id = JSON.stringify(localStorage.key(i))
  li.setAttribute('id', id)
li.innerHTML = `${localStorage.key(i)}: <input type=number placeholder='${localStorage.getItem(localStorage.key(i))}'</input> <button id=${id}>remove</button>`
ul.appendChild(li);
}
};
showCart()
ul.addEventListener('input', event => {
let key = event.target.parentNode.id
localStorage.setItem(key, event.target.value)
})
ul.addEventListener('click',event => {
  //console.log(event.target.parentNode.innerText)
  localStorage.removeItem(event.target.id)
 // location.reload()
})



  // const storeItem = () => {

  // };

  // const removeItem = () => {

  // };

});
