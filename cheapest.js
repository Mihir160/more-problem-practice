const phones = [
    {name : 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name : 'Walton', camera: 20, storage: '32gb', price: 6000, color: 'silver'},
    {name : 'iphone', camera: 90, storage: '32gb', price: 94000, color: 'silver'},
    {name : 'xaomi', camera: 10, storage: '32gb', price: 22000, color: 'golden'},
    {name : 'Oppo', camera: 60, storage: '32gb', price: 95000, color: 'silver'},
    {name : 'Nokia', camera: 12, storage: '32gb', price: 10000, color: 'black'},
    {name : 'HTC', camera: 20, storage: '32gb', price: 30000, color: 'silver'},
];

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }

// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.camera < cheapest.camera){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }


function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price > cheapest.price && phone.camera > cheapest.camera){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
