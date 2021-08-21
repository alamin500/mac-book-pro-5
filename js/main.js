// total amount 
function total(count){
    // best price
    const bestPrice = document.getElementById('best-price').innerText;
    // extra storage cost 
    const extraStorage = document.getElementById('extra-storage').innerText;
    // extra memory cost 
    const extraMemory = document.getElementById('extra-memory').innerText;
    // delivery charge 
    const primaryDelivery = document.getElementById('delivery-charge').innerText;

    let amount = parseInt(bestPrice) + parseInt(extraMemory) + parseInt(extraStorage) + parseInt(primaryDelivery);

     if(count == 'true'){
             let sum = amount * 20; 
        let discount = amount - sum / 100; 
         document.getElementById('sum').innerText = discount;
     }
     else{
        document.getElementById('total').innerText = amount;
        document.getElementById('sum').innerText = amount;
     }
    return amount;
}

// free delivery 
function freeDelivery(){
    const deliveryFree = document.getElementById('delivery-charge');
     deliveryFree.innerText = 0;
     total();
}

// delivery with charge 
function deliveryCostButton(){
    const primaryDelivery = document.getElementById('delivery-charge');
     primaryDelivery.innerText = 20;
    total();
}

// Pomo code
function pomoCode(){
    const coupon = document.getElementById('coupon').value;
     if(coupon === 'stevekaku'){
        total(count='true');
        document.getElementById('success').innerText = 'coupon Applied successfully';
        document.getElementById('error').innerText = '';
     }
     else{
        total(count='false');
        document.getElementById('error').innerText = 'coupon is incorrect';
        document.getElementById('success').innerText = '';
     }
}
// handle 8gb memory button event
document.getElementById('8gb-button').addEventListener('click',function(){

    // update memory
    const gb8Memory = document.getElementById('extra-memory');
    gb8Memory.innerText =  0;
    total()
})

// handle 16gb memory button event
document.getElementById('16gb-button').addEventListener('click',function(){

    // update extra memory
    const gb16Memory = document.getElementById('extra-memory');
    gb16Memory.innerText =  180;
    total()
})

// handle 256gb ssd button event
document.getElementById('256gb-button').addEventListener('click',function(){

    // update 256gb ssd
    const ssd256Gb = document.getElementById('extra-storage');
    ssd256Gb.innerText =  0;
    total()
})

// handle 512gb ssd button event
document.getElementById('512gb-button').addEventListener('click',function(){

    // update 512gb ssd
    const ssd512Gb = document.getElementById('extra-storage');
    ssd512Gb.innerText =  100;
    total()
})

// handle 1tb ssd button event
document.getElementById('1tb-button').addEventListener('click',function(){

    // update 1tb ssd
    const ssd1tb = document.getElementById('extra-storage');
    ssd1tb.innerText =  180;
    total()
})


