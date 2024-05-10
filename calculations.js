
function addition(num1, num2) {
    let sum = num1 + num2;
    document.getElementById("resultAdd").innerHTML= "a. Addition = "+sum;
}
  
function subtraction(num1, num2) {
    let sub = num1 - num2;
    document.getElementById("resultSub").innerHTML= "b. Subtraction = "+ sub;
}

function multiplication(num1, num2) {
    let mul = num1 * num2;
    document.getElementById("resultMul").innerHTML= "c. Multiplication = "+ mul;
}

function division(num1, num2) {
    let div = num1 / num2;
    document.getElementById("resultDiv").innerHTML= "d. Division = "+ div;
}
function arraySum(){
    const arr = document.getElementById('arr').value.split(" ");
    let sum = arr.reduce(myFunction);
    function myFunction(total, value, index, array) {
        return parseFloat(total) + parseFloat(value);
    }
    document.getElementById("resultSumOfArray").innerHTML= "e. Sum Of Array = "+ sum;
}
/*
function arraySum(){
    const arr = document.getElementById('arr').value.split(" ");
    //let sum = arr.reduce(myFunction);
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+parseFloat(arr[i]);
        //console.log(parseFloat(arr[i]));
    }
    document.getElementById("resultSumOfArray").innerHTML= "Sum Of Array = "+ sum;
}
*/
function taxCalculator(iAmount,tax){
    let TAmount = iAmount*tax/100; 
    let TotalAmount = iAmount + TAmount ; 
    document.getElementById("taxResult").innerHTML= "g. Tax Calculator = [{Tax Amount: "+ TAmount + ", Total Amount : " + TotalAmount +"}]";
}
// rolon =day, month, year, quarter, half-year, week
function  interestCalculator(pri,period,rol,rolon){
    let r;
    switch (rolon){
        case 'day':
            r = 365;
            break;
        case 'month':
            r = 12;
            break;
        case 'year':
            r = 1;
            break;
        case 'quarter':
            r = 4;
            break;
        case 'half-year':
            r = 2;
            break;
        case 'week':
            r = 52;
            break;
    } 
    let d = rol/100; //10/100
    let p = period/r;
    let Amo = Math.round(pri*(1+(d*p)));
    let Int = Math.round(Amo - pri) ;
    document.getElementById("interestResult").innerHTML= "h. Interest Output = Interest: "+ Int + ", Total Amount: " +Amo ;    
}

const dataArray = [{ name: "Mobile", price: 30000, qty: 20 }, { name: "Laptop", price: 100000, qty: 2 }, { name: "PC", price: 200000, qty: 20 }];
let priceS=0,qtyS=0;
/*for(let i=0;i<dataArray.length;i++){
    priceS += dataArray[i].price;
    qtyS += dataArray[i].qty;
}*/
dataArray.map(e=>{   
    priceS += e.price;
    qtyS += e.qty;
});

document.getElementById("dataArray").innerHTML = `i. dataArray = [{ name: "Mobile", price: 30000, qty: 20 }, { name: "Laptop", price: 100000, qty: 2 }, { name: "PC", price: 200000, qty: 20 }];`;
document.getElementById("dataArrayResult").innerHTML=  " Output = [{price: "+ priceS + ", qty : " + qtyS +"}]";

function generateRandomNumber(num){
    //let num  = parseFloat(document.getElementById('iAmount').value);
    let ans;
    if(num==0){
        ans = Math.random();
    }
    else{
        ans = getRndInteger(10**(num-1),(10**num)-1);
    }
    //getRndInteger(10,99);
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    document.getElementById("randomNumResult").innerHTML= "j. Random Number Generaator = "+ ans;    ;

}