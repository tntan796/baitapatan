function tinhTong10(n){
var tich=1;
var x=2;
for(var i=2; i<=n;i++)
{
    tich=tich*x*i;
}
return tich;
}

var tong=1;
 var n=3;
 for( var i=2;i<=n;i++)
 {
     tong=tong+tinhTong10(i);
 }
 console.log("Kết quả là:"+tong);