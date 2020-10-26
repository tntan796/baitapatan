function tinhTongCau5(n){
 var tong=0;
 for(var i=0;i<=n;i++)
 {
     tong=tong+1/(2*i+1)
 }
 return tong;
}
console.log("Kết quả là:"+tinhTongCau5(2));