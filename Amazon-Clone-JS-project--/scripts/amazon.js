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
            $${(product.priceCents/100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
            <select>
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

            <div class="added-to-cart">
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

AddToCart.forEach((button)=>{
    button.addEventListener("click",()=>{
    //    alert("Added to cart");
      console.log(button.dataset.a)
      const productId = button.dataset.a;
     
      let matchingItem;

      cart.forEach((item)=>{
        if(item.productId === productId){
        //   item.quantity++;
          matchingItem=item;
        }
      })

      if(matchingItem){
        matchingItem.quantity++;
      }else{
        cart.push(
            {   productId: productId,
                quantity: 1,
            });
           // console.log(cart);
          
        }

        let cartQuantity=''

        cart.forEach((item)=>{
            cartQuantity +=item.quantity;
        })
        
        cartQuantityDiv.innerHTML = cartQuantity;


        console.log(cartQuantity);
      console.log(cart)
      

    });
});
