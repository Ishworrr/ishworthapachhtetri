import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import currency from "../utils/money.js";

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents=0
   cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
   productPriceCents += product.priceCents * cartItem.quantity;

 const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
 shippingPriceCents+=deliveryOption.priceCents;

   });
   console.log(productPriceCents);
   console.log(shippingPriceCents);

   const totalBeforeTaxCenst = productPriceCents + shippingPriceCents;
   const taxCents = totalBeforeTaxCenst * 0.1;
   const totalCents = totalBeforeTaxCenst + taxCents;

   const paymentSummaryHTML= 
   `
   <div class="payment-summary-title">
   Order Summary
 </div>

 <div class="payment-summary-row">
   <div>Items (3):</div>
   <div class="payment-summary-money">$${currency(productPriceCents)}</div>
 </div>

 <div class="payment-summary-row">
   <div>Shipping &amp; handling:</div>
   <div class="payment-summary-money">${currency(shippingPriceCents)}</div>
 </div>

 <div class="payment-summary-row subtotal-row">
   <div>Total before tax:</div>
   <div class="payment-summary-money">${currency(totalBeforeTaxCenst)}</div>
 </div>

 <div class="payment-summary-row">
   <div>Estimated tax (10%):</div>
   <div class="payment-summary-money">$${currency(taxCents)}</div>
 </div>

 <div class="payment-summary-row total-row">
   <div>Order total:</div>
   <div class="payment-summary-money">${currency(totalCents)}</div>
 </div>

 <button class="place-order-button button-primary">
   Place your order
 </button>
`;
document.querySelector(".payment-summary").innerHTML=paymentSummaryHTML;
}