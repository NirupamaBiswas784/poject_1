
function primeNumber(num){
    let count=0;
    for(let i=0;i<=num;i++){
        if(num%i==0){
            count++;

        }
    }
    if(count==2){
        return true;
    }
    return false;
}
let x=primeNumber(13);
if(x==true){
    console.log("prime number");
}
else{
    console.log("not prime number");
}

