const catalog = {
  "P001": { name: "Apple", price: 30 },
  "P002": { name: "Banana", price: 10 },
  "P003": { name: "Orange", price: 20 },
};

const cart = {};

function addProduct() {
  const id = document.getElementById("productId").value.trim().toUpperCase();
  const product = catalog[id];

  if (!product) {
    alert("Invalid Product ID");
    return;
  }

  if (cart[id]) {
    cart[id].quantity += 1;
  } else {
    cart[id] = { ...product, quantity: 1 };
  }

  document.getElementById("productId").value = "";
  updateCart();
}

function updateCart() {
  const cartBody = document.getElementById("cartBody");
  cartBody.innerHTML = "";

  for (let id in cart) {
    const item = cart[id];
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>₹${item.price}</td>
        <td>₹${item.price * item.quantity}</td>
      </tr>
    `;
    cartBody.innerHTML += row;
  }

  document.getElementById("totalAmount").innerText = "";
}

function checkout() {
  let total = 0;
  for (let id in cart) {
    total += cart[id].price * cart[id].quantity;
  }

  document.getElementById("totalAmount").innerText = `Total Amount: ₹${total}`;
}
