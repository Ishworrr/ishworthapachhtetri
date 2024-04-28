// import {cart17} from '../data/cart-class.js';
export let cart;
loadFromStorageJAsmine()
// //get cart after set 
// JSON.parse(localStorage.getItem('cartt'));
// if(!cart){ //if no cart in local storage or empty we give default value
//     cart=[
//         {
//         productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//         quantity: 2,
//         deliveryOptionId:'1',
       
//     },{
//         productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//         quantity: 1,
//         deliveryOptionId:'2',
//     }
// ];
// }

export function loadFromStorageJAsmine(){
    cart=
//get cart after set 
JSON.parse(localStorage.getItem('cartt'));
if(!cart){ //if no cart in local storage or empty we give default value
    cart=[
        {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId:'1',
       
    },{
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId:'2',
    }
];
}
}

function saveToStorage() {
    localStorage.setItem("cartt", JSON.stringify(cart));
    
}
// export function loadFromStorage() {
//     const cartt = localStorage.getItem("cartt");
//     if (cartt) {
//         cart = JSON.parse(cartt);
//     }
// }
//moved from amazon.js (it was in AddTOCart.foreach())

export function addingToCart(productId){
    let matchingItem;

    cart.forEach((cartItem)=>{
    if(cartItem.productId === productId){
    //   item.quantity++;
        matchingItem=cartItem;
    }
    })

                    const quantitySelector = document.querySelector(`.quantity-selector-${productId}`);
                    const quantityy = Number(quantitySelector.value);
    if(matchingItem){
        matchingItem.quantity+=quantityy; //+=1
    }else{
        cart.push(
            {  
                productId,  // productId: productId,
                quantity: quantityy,  //  quantity: 1
                deliveryOptionId:'1'//(added lesson15)
            });
    }
saveToStorage();
//before
//   if(matchingItem){
//     matchingItem.quantity++;
//   }else{
//     cart.push(
//         {   productId: productId,
//             quantity: 1,
//         });
//        // console.log(cart);

//     }
}



export function removeFromCart(deleteID) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== deleteID) {  //cartItem is from cart.js's productid and quantity, if not equal to delteID which we have given ${macthingPRoduct.id}
            newCart.push(cartItem);
        }
    });
    
    cart = newCart; //updating after delete from above(scrol abpve)

    saveToStorage();
}

export function calculateCartQuantity() {
    let cartQuantity = 0;
  
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  
    return cartQuantity;
  }

// This code was copied from the solutions of exercises 14f - 14n.
export function updateQuantity(productId, newQuantity) {

    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) { 
        matchingItem = cartItem;
      }
    });
   
    matchingItem.quantity = newQuantity;
    saveToStorage();
  
  }


  export function updateDeliveryOption(productId,deliveryOptionId) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) { 
        matchingItem = cartItem;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}


