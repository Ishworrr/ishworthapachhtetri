import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import currency from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";


// const today = dayjs()
// const dateTodayFormat = today.format('ddd')

// const date = today.add(5,'days')
// const date5DayFormat = date.format('MMMM D')

// const dateMonth = today.subtract(1,'month')
// const dateMonthFormat = dateMonth.format('MMMM D')

// const dateYear = today.add(1,'year')
// const dateYearFormat = dateYear.format('ddd D MMMM MM YYYY dddd')
// console.log(dateTodayFormat);
// console.log(date5DayFormat);
// console.log(dateMonthFormat);
// console.log(dateYearFormat);

function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
  }

  // Test this function using a few different dates.
  let date = dayjs();
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));

  date = dayjs().add(2, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));

  date = dayjs().add(4, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));

  date = dayjs().add(6, 'day');
  console.log(date.format('dddd, MMMM D'));
  console.log(isWeekend(date));



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

   //to update Items(3) in order summary to dynamic
   let cartQuantity = 0;

  cart.forEach((cartItem) => {cartQuantity += cartItem.quantity});

   const paymentSummaryHTML= 
   `
   <div class="payment-summary-title">
   Order Summary
 </div>

 <div class="payment-summary-row">
   <div>Items (${cartQuantity}):</div>
   <div class="payment-summary-money">$${currency(productPriceCents)}</div>
 </div>

 <div class="payment-summary-row">
   <div>Shipping &amp; handling:</div>
   <div class="payment-summary-money">$${currency(shippingPriceCents)}</div>
 </div>

 <div class="payment-summary-row subtotal-row">
   <div>Total before tax:</div>
   <div class="payment-summary-money">$${currency(totalBeforeTaxCenst)}</div>
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
console.log(cartQuantity);
console.log(paymentSummaryHTML);

}