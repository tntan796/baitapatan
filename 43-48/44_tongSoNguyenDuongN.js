function tongSoNguyenN(n){
   var tong=0;
    while(n>0)
    {
        tong=tong+(n%10);
        n=Math.floor(n/10);
    }
    return tong;
}
console.log("Tổng các chữ sô nguyên dương là "+tongSoNguyenN(143));