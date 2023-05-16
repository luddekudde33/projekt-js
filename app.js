function addToCart(shoe){
    const orderRows= JSON.parse(localStorage.getItem('orderRows')|| "[]" ) 
    orderRows.push(shoe)
    localStorage.setItem('orderRows', JSON.stringify(orderRows))
    addOrderRowToHtml(shoe, 'cart')
    updateTotal()
}
function addOrderRowToHtml(shoe, id){
    const cart=document.getElementById(id)
    const row=document.createElement("tr")
    const name=document.createElement("td")
    const price=document.createElement("td")
    name.innerHTML = shoe.name
    price.innerHTML = shoe.price
    row.appendChild(name)
    row.appendChild(price)
    cart.appendChild(row)
}
function loadOrderRows(id){
    const orderRows= JSON.parse(localStorage.getItem('orderRows')|| "[]" )
    for (const orderRow of orderRows){
        addOrderRowToHtml(orderRow, id)
    }
}
function updateTotal() {
    const orderRows = Json.parse(localStorage.getItem('orderRows' || "[]"))
    let totalPrice = 0
    for (const orderRow of orderRows) {
        totalPrice += orderRow.price
    }
    document.getElementById("total-price").textContent = totalPrice
}

loadOrderRows('cart')
updateTotal()

const buyButton = document.getElementById('buy-btn');
buyButton.addEventListener('click', () => {
    localStorage.clear();
    document.getElementById('cart').innerHTML = '';
    updateTotal();
    alert('Tack för ditt köp!');
});
