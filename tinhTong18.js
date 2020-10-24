function tinhTong18 (n){
var tich=1;

for(var i=1;i<=n;i++)
{
    tich=tich*i;
}
return tich;
}
var tong=1;
var x=2;
var n=3;
for(var i=1;i<=n;i++)
{
tong=tong+ (x**(2*i)/(tinhTong18(2*i)));
}
console.log("Kết quả là:"+tong);