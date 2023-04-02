// 1st problem

function seerToMon(seer){
    let mon = 0.025 * seer ;
    return mon;
}

const result1 = seerToMon(100);
console.log(result1);





// 2nd problem

function totalSales(shirtQuantity , pantQuantity , shoesQuantity){
    let perShirtPrice = 100;
    let perPantPrice = 200;
    let perShoesPrice = 500;

    const totalShirtPrice = perShirtPrice * shirtQuantity;
    const totalPantPrice = perPantPrice * pantQuantity;
    const totalShoesPrice = perShoesPrice * shoesQuantity;

    const totalAmount = totalShirtPrice + totalPantPrice + totalShoesPrice;
     return totalAmount;
}

const result2 = totalSales( 2 , 3 , 4);
console.log(result2);





// 3rd problem

function deliveryCost(shirtAmount){
    var first100 = 100;
    var second100 = 80;
    var last = 50;

    if (shirtAmount <= 100){
        const deliveryAmount = shirtAmount * first100;
        return deliveryAmount;
    }
    else if (shirtAmount <= 200){
        const first100Amount = 100 * first100;
        const second100Amount = (shirtAmount - 100) * second100;
        const totalDeliveryAmount = first100Amount + second100Amount;
        return totalDeliveryAmount;
    }
    else{
        const first100Price = 100 * first100;
        const second100Price = 100 * second100;
        const lastPrice = (shirtAmount - 200) * last;
        const totalPrice = first100Price + second100Price + lastPrice;
        return totalPrice;
    }
}

const result3 = deliveryCost(101);
console.log(result3);





// 4th problem


const friendsDetails = [
    { name : "Tara" , age : 18, collageName : "RMPI"},
    { name : "Hafsa" , age : 19, collageName : "RMPI"},
    { name : "Mithila akter" , age : 18, collageName : "RMPI"},
    { name : "Meghla" , age : 19, collageName : "RMPI"},
    { name : "Tamanna" , age : 18, collageName : "RMPI"},
    { name : "Noorjahan" , age : 18, collageName : "RMPI"},
    { name : "Priya" , age : 18, collageName : "RMPI"},
    { name : "Meherunnesa" , age : 18, collageName : "RMPI"},
    { name : "Rani" , age : 18, collageName : "RMPI"},
    { name : "Hani" , age : 19, collageName : "RMPI"},
    { name : "Shila" , age : 18, collageName : "RMPI"},
    { name : "Tania" , age : 19, collageName : "RMPI"},
    { name : "Mounota" , age : 18, collageName : "RMPI"},
    { name : "Asha" , age : 18, collageName : "RMPI"},
    { name : "Aysha" , age : 19, collageName : "RMPI"},
    { name : "supti" , age : 19, collageName : "RMPI"},
    
];  

function perfectFriend(friends){
    let names = friendsDetails[0];
    for( var friend of friends){
        if (friend.name.length === 5 ){
           names = friend;
           break;
        }
    }
    return friend;
}

const result4 = perfectFriend(friendsDetails);
console.log(result4);