function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price =  ticketQuantity * first100Rate;
        return price;
     }

     else if(ticketQuantity <= 200){
        const first100price = 100 * first100Rate;
        console.log(first100price);
        const restTicketquantity = ticketQuantity - 100;
        console.log(restTicketquantity);
        const restTicketPrice = restTicketquantity * second100Rate;
        console.log(restTicketPrice);
        const totalPrice = first100price + restTicketPrice;

        return totalPrice; 
     }
    
    else {
        const first100price = 100 * first100Rate;
        console.log(first100price);
        const second100price = 100 * second100Rate;
        console.log(second100price);
        const restTicketquantity = ticketQuantity - 200;
        console.log(restTicketquantity);
        const restTicketPrice = restTicketquantity * restTicketRate;
        console.log(restTicketPrice);
        const totalprice3 = first100price + second100price + restTicketPrice;
        return totalprice3;
    }  
}

const total = ticketPrice(350);
console.log('total price',total);












