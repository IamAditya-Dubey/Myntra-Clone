let bagItemObject = "";
let innerCartCode = "";
let innerHTMLCartReview = "";
onLoad();

function onLoad() {
  loadBagItemObject();
  displayItemsOnCart();
  loadCartReview()
}

function closeCartItem(productId) {
  innerCartCode = "";
  bagItems = bagItems.filter(itemId => itemId != productId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObject();
  displayItemsOnCart();
  bagItemCount();
  loadCartReview();
}

function loadBagItemObject() {
  bagItemObject = bagItems.map(itemId => {
    for(let i= 0; i <= productsList.length; i++) {
    if (itemId == productsList[i].id) {
      return productsList[i];
    }
    }
  })
}

function displayItemsOnCart() {
  let cartContainer = document.querySelector(".cart-items-container");
  if (!cartContainer) {
    return;
  }
  for(let product of bagItemObject) {
    innerCartCode += getItemsHTMLCode(product);
  }
  cartContainer.innerHTML = innerCartCode;
}

function getItemsHTMLCode(product) {
  return `<div class="cart-item">
         <div class="cart-product-img"><img src="../${product.image}" alt="Img"></div>
         <div class="content">
          <div class="company-name">${product.company}</div>
        <div class="product-title">${product.item_name}</div>
        <div class="seller">Sold by: Maya sellers</div>
        <div class="price">
          <span class="sale-price">₹${product.current_price}</span>
          <span class="original-price">₹${product.original_price}</span>
          <span class="discount">-${product.discount_percentage}%</span>
          </div>
           <div class="return-period"><strong>${product.return_period ? product.return_period : 0} </strong>return available</div>
         </div>
         <div class="close-button"><button onclick="closeCartItem(${product.id})" >X</button></div>
       </div>`
}

///////Cart Review///////

function loadCartReview() {
  let cartReview = document.querySelector(".cart-review");
  if(!cartReview) {
    return;
  }
  let itemCount = bagItemObject.length;
  let original = 0;
  let discount = 0;
  let shippingFee = 0;
  const platformFee = 20;
  
  for(product of bagItemObject) {
    original += product.original_price;
    discount += (product.original_price - product.current_price);
    shippingFee += product.shipping_fee;
  }
  innerHTMLCartReview = `<h4 class="price-details">Price Details (${itemCount} items)</h4>
       <div class="all-fees">
         <div class="fee-details">
           <p class="total-mrp cart-fee-text">Total MRP</p>
           <p class="total-mrp-price fee-cart">₹${original}</p>
         </div>
         <div class="fee-details">
           <p class="discount-mrp cart-fee-text">
             Discount on MRP
           </p>
           <p class="discount-cart-price fee-cart">-₹${discount}</p>
         </div>
         <div class="fee-details">
           <p class="platform-fee cart-fee-text">Platform fee</p>
           <p class="platform-fee-price fee-cart">₹${platformFee}</p>
         </div>
         <div class="fee-details">
           <p class="shipping-fee cart-fee-text">Shipping fee</p>
           <p class="shipping-fee-price fee-cart">₹${shippingFee}</p>
         </div>
         <div class="fee-details total-section">
           <p class="total">Total</p>
           <p class="total-price">₹${original - discount + shippingFee + platformFee}</p>
         </div>
       </div>
       <div class="place-order"><a href="./checkout.html"><button>Proceed to Checkout</button></a></div>`;
  cartReview.innerHTML = innerHTMLCartReview;
}