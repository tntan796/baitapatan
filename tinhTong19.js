function tinhTong19 (n){
  var tich=1;
  for( var i=1;i<=n;i++)
  {
      tich=tich*i;
  }
  return tich;
}
var tong =1;
var x=2;
var n=3;
for(var i=0;i<=n;i++)
{
    tong =tong + (x**(2*i+1)/tinhTong19(2*i+1));
}
console.log("Kết quả là:"+tong);