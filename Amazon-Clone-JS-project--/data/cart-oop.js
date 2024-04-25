function CartAdd(localStorageKey) {
    const cart17={     //in video cart
        cart :undefined   ,    // in video cartItem, I kept original
      
      loadFromStorageJAsmine(){   //made function for jasmine
             this.cart=JSON.parse(localStorage.getItem(localStorageKey));//get cart after set 
      
          if(!this.cart){ //if no cart in local storage or empty we give default value
             this.cart=[   //cart17 is this, to improve code, and doesnot matter variable name
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
      
          },
          saveToStorage:function () {
              localStorage.setItem(localStorageKey, JSON.stringify(this.cart)); //from 'cartt' to 'cart-oop' so no affect original
              
          },
      
        addingToCart(productId){
              let matchingItem;
          
              this.cart.forEach((cartItem)=>{
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
                  this.cart.push(
                      {  
                          productId,  // productId: productId,
                          quantity: quantityy,  //  quantity: 1
                          deliveryOptionId:'1'//(added lesson15)
                      });
              }
          this.saveToStorage(); //to access fn inside object
      
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
          },
      
           removeFromCart(deleteID) {
              const newCart = [];
              this.cart.forEach((cartItem) => {
                  if (cartItem.productId !== deleteID) {  //cartItem is from cart.js's productid and quantity, if not equal to delteID which we have given ${macthingPRoduct.id}
                      newCart.push(cartItem);
                  }
              });
              
              this.cart = newCart; //updating after delete from above(scrol abpve)
          
              this.saveToStorage();
          },
      
       calculateCartQuantity() { //extra from exercise
              let cartQuantity = 0;
            
              this.cart.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
              });
            
              return cartQuantity;
            },
      
      
      // This code was copied from the solutions of exercises 14f - 14n.
      updateQuantity(productId, newQuantity) {  //extra
      
          let matchingItem;
        
          this.cart.forEach((cartItem) => {
            if (productId === cartItem.productId) { 
              matchingItem = cartItem;
            }
          });
         
          matchingItem.quantity = newQuantity;
          this.saveToStorage();
        
        },
      
      updateDeliveryOption(productId,deliveryOptionId) {
          let matchingItem;
        
         this.cart.forEach((cartItem) => {
            if (productId === cartItem.productId) { 
              matchingItem = cartItem;
            }
          });
          matchingItem.deliveryOptionId = deliveryOptionId;
      
         this.saveToStorage();
      }
      
      
      };

      return cart17;
     // cart17.loadFromStorageJAsmine()
      
      
      // cart17.addingToCart('id2');
      //console.log(cart17);
      
      
      // export function loadFromStorage() {
      //     const cartt = localStorage.getItem("cartt");
      //     if (cartt) {
      //         cart = JSON.parse(cartt);
      //     }
      // }
      //moved from amazon.js (it was in AddTOCart.foreach())
}


const cart17 = CartAdd('cart-oop');
const businessCart17 = CartAdd("cart-business");

cart17.loadFromStorageJAsmine()

businessCart17.loadFromStorageJAsmine()
  

  console.log(cart17);
  console.log(businessCart17);






//business cart

// const businessCart17={     //in video cart
//     cart :undefined   ,    // in video cartItem, I kept original
  
//   loadFromStorageJAsmine(){   //made function for jasmine
//          this.cart=JSON.parse(localStorage.getItem('cartt-business'));//get cart after set 
  
//       if(!this.cart){ //if no cart in local storage or empty we give default value
//          this.cart=[   //cart17 is this, to improve code, and doesnot matter variable name
//                   {
//                   productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                   quantity: 2,
//                   deliveryOptionId:'1',
              
//               },{
//                   productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//                   quantity: 1,
//                   deliveryOptionId:'2',
//               }
//                   ];
//           }
  
//       },
//       saveToStorage:function () {
//           localStorage.setItem("cartt-business", JSON.stringify(this.cart)); //from 'cartt' to 'cart-oop' so no affect original
          
//       },
  
//     addingToCart(productId){
//           let matchingItem;
      
//           this.cart.forEach((cartItem)=>{
//           if(cartItem.productId === productId){
//           //   item.quantity++;
//               matchingItem=cartItem;
//           }
//           })
      
//                           const quantitySelector = document.querySelector(`.quantity-selector-${productId}`);
//                           const quantityy = Number(quantitySelector.value);
//           if(matchingItem){
//               matchingItem.quantity+=quantityy; //+=1
//           }else{
//               this.cart.push(
//                   {  
//                       productId,  // productId: productId,
//                       quantity: quantityy,  //  quantity: 1
//                       deliveryOptionId:'1'//(added lesson15)
//                   });
//           }
//       this.saveToStorage(); //to access fn inside object
  
//       //before
//       //   if(matchingItem){
//       //     matchingItem.quantity++;
//       //   }else{
//       //     cart.push(
//       //         {   productId: productId,
//       //             quantity: 1,
//       //         });
//       //        // console.log(cart);
      
//       //     }
//       },
  
//        removeFromCart(deleteID) {
//           const newCart = [];
//           this.cart.forEach((cartItem) => {
//               if (cartItem.productId !== deleteID) {  //cartItem is from cart.js's productid and quantity, if not equal to delteID which we have given ${macthingPRoduct.id}
//                   newCart.push(cartItem);
//               }
//           });
          
//           this.cart = newCart; //updating after delete from above(scrol abpve)
      
//           this.saveToStorage();
//       },
  
//    calculateCartQuantity() { //extra from exercise
//           let cartQuantity = 0;
        
//           this.cart.forEach((cartItem) => {
//             cartQuantity += cartItem.quantity;
//           });
        
//           return cartQuantity;
//         },
  
  
//   // This code was copied from the solutions of exercises 14f - 14n.
//   updateQuantity(productId, newQuantity) {  //extra
  
//       let matchingItem;
    
//       this.cart.forEach((cartItem) => {
//         if (productId === cartItem.productId) { 
//           matchingItem = cartItem;
//         }
//       });
     
//       matchingItem.quantity = newQuantity;
//       this.saveToStorage();
    
//     },
  
//   updateDeliveryOption(productId,deliveryOptionId) {
//       let matchingItem;
    
//      this.cart.forEach((cartItem) => {
//         if (productId === cartItem.productId) { 
//           matchingItem = cartItem;
//         }
//       });
//       matchingItem.deliveryOptionId = deliveryOptionId;
  
//      this.saveToStorage();
//   }
  
  
//   };
  
//   businessCart17.loadFromStorageJAsmine()
  

//   console.log(cart17);
//   console.log(businessCart17);








