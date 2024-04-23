import { addingToCart,cart,loadFromStorageJAsmine } from "../../data/cart.js";

describe('test suite: addTOcart',()=>{
    spyOn(localStorage,'getItem').and.callFake(() => {
        return JSON.stringify([{
            productId:' e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:0,
        deliveryOptionId:'1'
        }])
        
    })
    //console.log(localStorage.getItem('cartt'))
    loadFromStorageJAsmine();
    expect(cart.length).toEqual(1); //means  adding item to cart
           expect(localStorage.setItem)
        //    .toHaveBeenCalledWith('cartt',JSON.stringify(cart));
        .toHaveBeenCalledWith(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        })

    
        it('adds new product to cart',()=>{

         //  spyOn(localStorage,'setItem'); //so that it doesnot affect real one, adding mock

            spyOn(localStorage,'getItem').and.callFake(() => {
                return JSON.stringify([]);
            })
            //console.log(localStorage.getItem('cartt'))
            loadFromStorageJAsmine();

           addingToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
           expect(cart.length).toEqual(1); //means  adding item to cart
           expect(localStorage.setItem)
        //    .toHaveBeenCalledWith('cartt',JSON.stringify(cart));
        .toHaveBeenCalledWith(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
        })
