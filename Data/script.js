let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayProductsOnHome();
  bagItemCount()
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  bagItemCount()
}

function bagItemCount() {
  let bagIcon = document.querySelector(".bagIcon");
  bagIcon.innerText = bagItems.length;
  if (bagIcon.innerText == 0) {
    bagIcon.style.display = "none";
  } else {
    bagIcon.style.display = "block";
  }
}

function displayProductsOnHome() {
let container = document.querySelector(".items-container");
if (!container) {
  return;
}
let innerCode = "";

for(let product of productsList) {
    innerCode += `
<div class="item-container">
        <div class="product-img"><img src="./${product.image}" alt="item-image"></div>
        <div class="rating"><span class="review-count">${product.rating.stars}</span>
        <span class="material-symbols-outlined star-icon">star</span><span class="review-people"> | ${product.rating.count}</span></div>
        <div class="product-content">
        <div class="company-name">${product.company}</div>
        <div class="product-title">${product.item_name}</div>
        <div class="price">
          <span class="sale-price">₹${product.current_price}</span>
          <span class="original-price">₹${product.original_price}</span>
          <span class="discount">-${product.discount_percentage}%</span>
          </div>
        </div>
        <div class="add-to-bag"><button onclick="addToBag(${product.id})">Add to Cart</button></div>
      </div>
    `
  }
container.innerHTML = innerCode;
}