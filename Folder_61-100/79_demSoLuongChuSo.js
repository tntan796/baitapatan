function demSoLuong(n){
 var dem=0;
 while(n>0)
 {
    
     dem++;
    n=Math.floor(n/10);
 }
 return dem;
}
console.log("Số lượng chữ số của số nguyên dương n:"+demSoLuong(16789));