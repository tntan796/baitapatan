function tichSoNguyenDuong(n){
   tich=1;
    while(n>0)
    {
    tich=tich*(n%10)
    n=Math.floor(n/10);
    }
    return tich;
} 
console.log("Kết quả là "+tichSoNguyenDuong(153));