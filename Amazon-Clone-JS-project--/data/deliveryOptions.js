import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export const deliveryOptions = [
    {
    id:'1',
    delveryDays :7,
    priceCents :0
},
{
    id:'2',
    delveryDays :3,
    priceCents :499,
},
{
    id:'3',
    delveryDays :7,
    priceCents :999
}

]

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option)=>{ //we take deliveryID form deliveryoption.js
      if(option.id === deliveryOptionId){
          deliveryOption = option;
      };
    });
    return deliveryOption;
  }
  
  function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
  }

  export function calculateDeliveryDate(deliveryOption) {
    // const today = dayjs();
    // const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    let remainingDays = deliveryOption.deliveryDays;
    let deliveryDate = dayjs();
  
    while (remainingDays > 0) {
      deliveryDate = deliveryDate.add(1, 'day');
  
      if (!isWeekend(deliveryDate)) {
        remainingDays--;
        // This is a shortcut for:
        // remainingDays = remainingDays - 1;
      }
    }

    const dateString = deliveryDate.format('dddd, MMMM D');
  
    return dateString;
  }

/*  deleted from checlout instead ${deliveryOptionsHTMl}
<div class="delivery-option">
<input type="radio" checked
  class="delivery-option-input"
  name="delivery-option-${matchingProduct.id}">
<div>
  <div class="delivery-option-date">
    Tuesday, June 21
  </div>
  <div class="delivery-option-price">
    FREE Shipping
  </div>
</div>
</div>
<div class="delivery-option">
<input type="radio"
  class="delivery-option-input"
  name="delivery-option-${matchingProduct.id}">
<div>
  <div class="delivery-option-date">
    Wednesday, June 15
  </div>
  <div class="delivery-option-price">
    $4.99 - Shipping
  </div>
</div>
</div>
<div class="delivery-option">
<input type="radio"
  class="delivery-option-input"
  name="delivery-option-${matchingProduct.id}">
<div>
  <div class="delivery-option-date">
    Monday, June 13
  </div>
  <div class="delivery-option-price">
    $9.99 - Shipping
  </div>
</div>
</div> */