function addToCart(shoe){
    const orderRows = JSON.parse(localStorage.getItem('orderRows') || "[]"); 
    orderRows.push(shoe);
    localStorage.setItem('orderRows', JSON.stringify(orderRows));
    addOrderRowToHtml(shoe, 'cart');
    updateTotal();
}

function addOrderRowToHtml(shoe, id){
    const cart = document.getElementById(id);
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const price = document.createElement("td");
    name.innerHTML = shoe.name;
    price.innerHTML = shoe.price;
    row.appendChild(name);
    row.appendChild(price);
    cart.appendChild(row);
}

function loadOrderRows(id){
    const orderRows = JSON.parse(localStorage.getItem('orderRows') || "[]");
    for (const orderRow of orderRows){
        addOrderRowToHtml(orderRow, id);
    }
}

function updateTotal() {
    const orderRows = JSON.parse(localStorage.getItem('orderRows') || "[]");
    let totalPrice = 0;
    for (const orderRow of orderRows) {
        totalPrice += orderRow.price;
    }
    document.getElementById("total-price").textContent = totalPrice;
}

loadOrderRows('cart');
updateTotal();

const buyButton = document.getElementById('buy-btn');
buyButton.addEventListener('click', () => {
    localStorage.clear();
    document.getElementById('cart').innerHTML = '';
    updateTotal();
    alert('Tack för ditt köp!');
});

//map (kopierad)
document.addEventListener('DOMContentLoaded', function() {
    mapboxgl.accessToken = 'YOUR_ACCESS_TOKEN'; // Byt ut med din egen access token från Mapbox
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // Byt ut med den önskade kartstilen från Mapbox
        center: [59.4, 49.3], // Byt ut med koordinaterna för den plats du vill centrera kartan på
        zoom: 12 // Justera zoomnivån efter behov
    });

    // Lägg till markör för platsen på kartan
    var marker = new mapboxgl.Marker()
        .setLngLat([59.3, 49.3]) // Byt ut med koordinaterna för den plats du vill ha markören på
        .addTo(map);
});
