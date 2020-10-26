function tichSoLe(n){
    var tich =1;
    while(n>0)
    {
        if((n%10)%2!=0)
        {
            tich=tich*(n%10);
        }
         n=Math.floor(n/10);
    }
    return tich;
}
console.log("kết quả là "+tichSoLe(2345));