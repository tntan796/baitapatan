function tinhTong17 (n){
    tich=1;
    for(var i=1;i<=n;i++)
    {
        tich=tich*i;
    }
    return tich;
}
var tong=0;
var x=2;
var n=3;
for(var i=1;i<=n;i++)
{
    tong=tong+(x**i/tinhTong17(i));
}
console.log("Kêt quả là:"+tong);