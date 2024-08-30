onCheckoutLoad();

function onCheckoutLoad() {
  loadItemOnCheckoutProduct();
  loadCheckoutProduct();
  checkoutTotalPrice();
  OnCheckoutSubmit();
  getCountry();
}

function loadItemOnCheckoutProduct() {

let checkoutItemOrderContainer = document.querySelector(".checkout-order-details");

checkoutItemOrderContainer.innerHTML = `
             <div class="checkout-product-details-title checkout-order-items">
               <h3 class="checkout-product-title-heading">PRODUCT</h3><h3 class="checkout-subtotal-title">SUBTOTAL</h3>
             </div>
             <div class="product-details-checkout">
             </div>
             <div class="product-price-total-checkout checkout-order-items">
             </div>`;
}

function loadCheckoutProduct() {
  
  let productContainer = document.querySelector(".product-details-checkout");
  
  let innerCheckoutCode = "";
  let shippingFee = 0;
  const platformFee = 20;
  bagItemObject.forEach(product => {
    shippingFee += product.shipping_fee;
    innerCheckoutCode += `<div class="checkout-item-load-container"><div class="product-title-checkout">${product.item_name}</div>
               <div class="product-price-checkout">₹${product.current_price}</div></div>`
  });

  productContainer.innerHTML = innerCheckoutCode;
let shippingAndPlatform = document.createElement("div");

shippingAndPlatform.innerHTML = `<div class="checkout-order-items shippingPlatformCheckout">
<div>Shipping Fee</div><div>₹${shippingFee}</div></div>
<div class="checkout-order-items">
<div>Platform Fee</div><div>₹${platformFee}</div></div>
`

  productContainer.appendChild(shippingAndPlatform);
  
}


function checkoutTotalPrice() {  
  let checkoutPriceTotal = document.querySelector(".product-price-total-checkout");
  let currPrice = 0;
  let shippingFee = 0;
  const platformFee = 20;
  bagItemObject.forEach(product => {
    currPrice += product.current_price;
    shippingFee += product.shipping_fee;
  });
  checkoutPriceTotal.innerHTML = `<div class="product-total-checkout">TOTAL</div>
               <div class="product-total-price-checkout">₹${platformFee+shippingFee+currPrice}</div>`;
}

function OnCheckoutSubmit() {
  document.querySelector(".submit-checkout").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Details are wrong!")
  })
}

function getCountry() {
  let select = document.getElementById("country");
  // All countries
// length 252
const countries = [
"Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, Democratic Republic of the Congo","Cook Islands","Costa Rica","Cote D'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kosovo","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, the Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","St Martin","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands, British","Virgin Islands, U.s.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"
];

countries.forEach(name => {
   let options = document.createElement("option");
   options.innerHTML = name;
   select.appendChild(options);
 });

}