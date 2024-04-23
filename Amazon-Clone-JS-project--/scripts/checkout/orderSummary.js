// import {cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption} from '../../data/cart.js';
// import {products, getProduct} from '../../data/products.js';
// import { currency } from "../utils/money.js";
// import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
// import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
// import {deliveryOptions, getDeliveryOption,calculateDeliveryDate } from "../../data/deliveryOptions.js";
// import {renderPaymentSummary  } from "./paymentSummary.js";
// import { renderCheckoutHeader } from './checkoutHeader.js';
// // import { updatingCartQuantity } from "../amazon.js";



// // // console.log(dayjs());
// // const today = dayjs();
// // const delveryDate = today.add(7,'days');
// // // console.log(delveryDate);
// // const formatOfDate = delveryDate.format('dddd, MMMM D');
// // console.log(formatOfDate);

//  export function renderOrderSummary() {
//     const orderSummary = document.querySelector('.order-summary');

// let cartSummaryHTML='';
// cart.forEach((cartItem)=>{
//     const productId = cartItem.productId;  
//     const matchingProduct = getProduct(productId);
//     // products.forEach((product)=>{
//     //     if(product.id === productIds){
//     //         matchingProduct = product;
//     //     }
       
//     // })
//     // console.log(matchingProduct);
//     // console.log(cartItem);

//     const deliveryOptionId = cartItem.deliveryOptionId;
//     const deliveryOption = getDeliveryOption(deliveryOptionId);

//     // deliveryOptions.forEach((option)=>{ //we take deliveryID form deliveryoption.js
//     //     if(option.id === deliveryOptionId){
//     //         deliveryOption = option;
//     //     };
//     //   })
//       const today= dayjs();
//       const deliveryDate = today.add(
//         deliveryOption.delveryDays,
//          'days'
       
//       );
//       const dateString = deliveryDate.format('dddd, MMMM D');


//     cartSummaryHTML +=
//     `
//     <div class="cart-item-container-${matchingProduct.id} js-cart-item-container-${matchingProduct.id}">
//             <div class="delivery-date">
//               Delivery date: ${dateString}
//             </div>

//             <div class="cart-item-details-grid">
//               <img class="product-image"
//                 src="${matchingProduct.image}">

//               <div class="cart-item-details">
//                 <div class="product-name">
//                 ${matchingProduct.name}
//                 </div>
//                 <div class="product-price">
//                   $${currency(matchingProduct.priceCents)}
//                 </div>
//                 <div class="product-quantity">
//                   <span>
//                     Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
//                   </span>

//                   <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
//                     Update
//                   </span>

//                   <input class="quantity-input js-quantity-input-${matchingProduct.id}">

//                   <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">
//                   Save
//                   </span>

//                   <span class="delete-quantity-link link-primary js-delete-link"
//                   data-delete = "${matchingProduct.id}">
//                     Delete
//                   </span>
//                 </div>
//               </div>

//               <div class="delivery-options">
//                 <div class="delivery-options-title">
//                   Choose a delivery option:
//                 </div>
//                   ${deliveryOptionsHTML(matchingProduct,cartItem)}
//               </div>
//             </div>
//           </div>
//     `;
  

//     function deliveryOptionsHTML(matchingProduct,cartItem) {//we take deliverydays amd priceenst form deliveryoption.js
//       let allJoin = '';
//       deliveryOptions.forEach((deliveryOption)=>{

//         //we need to add the delivery days to the current day
//         const today= dayjs();
//         const deliveryDate = today.add(
//           deliveryOption.delveryDays,
//            'days'   
//         );
//         const dateString = deliveryDate.format('dddd, MMMM D');

//         const priceString =deliveryOption.priceCents===0 ? 'FREE' : `${currency(deliveryOption.priceCents)}-`; //if free FREE below date in checkout page if not price
        
//         const isChecked=  deliveryOption.id ===cartItem.deliveryOptionId;

//         allJoin +=
//         ` <div class="js-delivery-option delivery-option"
//         data-product-id = "${matchingProduct.id}"
//         data-delivery-option-id = "${deliveryOption.id}"
//         >
//         <input type="radio" ${isChecked ? 'checked' : ''}
//           class="delivery-option-input"
//           name="delivery-option-${matchingProduct.id}">
//         <div>
//           <div class="delivery-option-date">
//            ${dateString}
//           </div>
//           <div class="delivery-option-price">
//           ${priceString} - Shipping
//           </div>
//         </div>
//       </div>
//       `
//       });
//      return allJoin;
      
//     }
    

//     orderSummary.innerHTML = cartSummaryHTML;
// //console.log(cartSummaryHTML);//this is added at end to combine all the added cartItem(item added from collection(products.js/ has products ans each product has id,image...) to cart(cartItem/ has productId & quantity))



// const DeleteLink = document.querySelectorAll('.js-delete-link');

// DeleteLink.forEach((link)=>{
//     link.addEventListener('click',()=>{
//        // console.log('delete');
//       const deleteID= link.dataset.delete;
//      //console.log(deleteID);
//      removeFromCart(deleteID);
//      console.log(cart);

//      const container = document.querySelector(`.cart-item-container-${deleteID}`);
//      console.log(container);
//      container.remove(); //this is to remove the item from the cart
// //used  renderOrderSummary(); insted of 3 above line.

// updateCartQuantity()
//     renderOrderSummary();
    

// renderPaymentSummary();
//     })
// });
// })

// function updateCartQuantity() {
//     const cartQuantity = calculateCartQuantity();
//     document.querySelector('.js-return-to-home-link')
//       .innerHTML = `${cartQuantity} items`;
//   }
  
//   updateCartQuantity();

// document.querySelectorAll('.delivery-option')
// .forEach((option) => {
//   option.addEventListener('click', () => {
//     // const productId = option.dataset.productId;
//     // const deliveryOptionId = option.querySelector('input').value;
//     const {productId,deliveryOptionId} = option.dataset;

//     updateDeliveryOption(productId, deliveryOptionId);
//     renderOrderSummary();
//     renderPaymentSummary();
 
//   });
// });





// // This code was copied from the solutions of exercises 14f - 14n.
// document.querySelectorAll('.js-update-link') //update
//   .forEach((link) => {
//     link.addEventListener('click', () => {
//       const productId = link.dataset.productId;
//     //   console.log(productId);
//     const container = document.querySelector(
//         `.cart-item-container-${productId}`
//       );
//       container.classList.add('is-editing-quantity');
//     });

//     updateCartQuantity()
  
//     renderOrderSummary();
   

//     renderPaymentSummary();
//   });



//   document.querySelectorAll('.js-save-link').forEach((link) => {//save
//     link.addEventListener('click', () => {
//       const productId = link.dataset.productId;

//       // Here's an example of a feature we can add: validation.
//       // Note: we need to move the quantity-related code up
//       // because if the new quantity is not valid, we should
//       // return early and NOT run the rest of the code. This
//       // technique is called an "early return".

 

//       const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
//       const newQuantity = Number(quantityInput.value);
//       if (newQuantity < 0 || newQuantity >= 1000) {
//         alert('Quantity must be at least 0 and less than 1000');
//         return;
//       }
//      updateQuantity(productId, newQuantity);
//      const container = document.querySelector(`.js-cart-item-container-${productId}`);
//      container.classList.remove('is-editing-quantity');

//       const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
//       quantityLabel.innerHTML = newQuantity;
//       updateCartQuantity();
  
 
//     renderOrderSummary();
   

//       renderPaymentSummary();
//     });
//   });


// }

import {cart, removeFromCart, updateDeliveryOption,calculateCartQuantity,updateQuantity} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import {currency} from '../utils/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOptions.js';
import {renderPaymentSummary} from './paymentSummary.js';

export function renderOrderSummary() {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    cartSummaryHTML += `
      <div class="cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              $${currency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity js-product-quantity-${matchingProduct.id}">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link"
              data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-link"
              data-product-id="${matchingProduct.id}">
              Save
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.delveryDays,
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );

      const priceString = deliveryOption.priceCents === 0
        ? 'FREE'
        : `$${currency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });

    return html;
  }

  document.querySelector('.order-summary').innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
          
        );
        container.remove();
        updateCartQuantity();
        renderPaymentSummary();
      });
    });


function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();
    document.querySelector('.js-return-to-home-link')
      .innerHTML = `${cartQuantity} items`;
  }
  
  updateCartQuantity();



    

 // This code was copied from the solutions of exercises 14f - 14n.

document.querySelectorAll('.js-update-link')    //update
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
    //   console.log(productId);
    const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add('is-editing-quantity');
    });


  });

  document.querySelectorAll('.js-save-link').forEach((link) => {//save
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      // Here's an example of a feature we can add: validation.
      // Note: we need to move the quantity-related code up
      // because if the new quantity is not valid, we should
      // return early and NOT run the rest of the code. This
      // technique is called an "early return".
      const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
      const newQuantity = Number(quantityInput.value);
      if (newQuantity < 0 || newQuantity >= 1000) {
        alert('Quantity must be at least 0 and less than 1000');
        return;
      }
     updateQuantity(productId, newQuantity);

     const container = document.querySelector(`.js-cart-item-container-${productId}`);
     container.classList.remove('is-editing-quantity');

      const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
      quantityLabel.innerHTML = newQuantity;
      updateCartQuantity();
  
 
    renderOrderSummary();
   

      renderPaymentSummary();
    });
  });


  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {productId, deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummary();
        renderPaymentSummary();
      });
    });


}