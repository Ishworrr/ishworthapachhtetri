// const products = [{
//     image: "images/products/athletic-cotton-socks-6-pairs.jpg",
//     name: "  Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating:{
//         stars:4.5,
//         count:87,
//     },
//     priceCents: 1090,
//     },
//     {
//      image: "images/products/intermediate-composite-basketball.jpg",
//     name: "Intermediate Size Basketball",
//     rating:{
//         stars:4,
//         count:127,
//     },
//     priceCents: 2095,

//     },
//     {
//         image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//        name: "Adults Plain Cotton T-Shirt - 2 Pack",
//        rating:{
//            stars:4.5,
//            count: 56,
//        },
//        priceCents: 799,
   
//        }
// ];

import {cart, addingToCart,calculateCartQuantity, updateQuantity} from '../data/cart.js'
import {products} from '../data/products.js';
import { currency } from "./utils/money.js";

let productsHTML = ''; //done after const html because we wnat to add all product

products.forEach((product)=>{
    //console.log(product);
    //const html=`
     productsHTML +=`
            <div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${(product.rating.stars)*10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
            </div>

            <div class="product-price">
            $${currency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
            <select class="quantity-selector-${product.id} quantity-selector">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
            </div>
                                                                
            <button class="add-to-cart-button button-primary" data-a = '${product.id}'>
            Add to Cart             
            </button>
        </div>
    `;
    // console.log(productsHTML);

});

const productsGrid = document.querySelector(".products-grid");
const cartQuantityDiv = document.querySelector(".cart-quantity");

productsGrid.innerHTML = productsHTML;



const AddToCart = document.querySelectorAll(".button-primary");

   
   export function updatingCartQuantity(productId) {
        // let cartQuantity=0;

        // cart.forEach((cartItem)=>{
        //     cartQuantity +=cartItem.quantity;
        // })
        const cartQuantity = calculateCartQuantity();

                            const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
                                    // // const p = document.createElement('h4');
                                    // addedMessage.innerHTML = 'Added';
                                    // addedMessage.classList.add('added-to-cart-message');
                                    //         // addedMessage.appendChild(p);
                                    //             setTimeout(() => {
                                    //                 addedMessage.innerHTML = '';
                                    //             }, 1000);

                            addedMessage.classList.add('added-to-cart-visible');

                                // setTimeout(() => {
                                //     addedMessage.classList.remove('added-to-cart-visible');
                                // }, 2000);
                                const addedMessageTimeouts = {};
                                const previousTimeoutId = addedMessageTimeouts[productId];
                        if (previousTimeoutId) {
                            clearTimeout(previousTimeoutId);
                        }

                        const timeoutId = setTimeout(() => {
                            addedMessage.classList.remove('added-to-cart-visible');
                        }, 2000);

                        // Save the timeoutId for this product
                        // so we can stop it later if we need to.
                        addedMessageTimeouts[productId] = timeoutId;

        cartQuantityDiv.innerHTML = cartQuantity;

        console.log(cartQuantity);
        console.log(cart);

    }




AddToCart.forEach((button)=>{
    button.addEventListener("click",()=>{
    //    alert("Added to cart");
      console.log(button.dataset.a)

      const productId = button.dataset.a;

      addingToCart(productId);
      updatingCartQuantity(productId);


    });
});



//   quantitySelector.addEventListener('change', () => {
//     const quantityValue = Number(quantitySelector.value);
//     console.log(quantityValue);
//   });
