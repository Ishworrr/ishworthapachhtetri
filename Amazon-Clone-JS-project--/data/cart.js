export const cart=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
}
];
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
            });
    }

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


