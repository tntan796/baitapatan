function tinhTong16(n){
    var tong=0;
    for( var i=1;i<=n;i++)
    {
        tong=tong+i;
    }
    return tong;
}
var tong=0;
var x=2;
var n=3;
for(var i=1;i<=n;i++)
{
    tong=tong+(x**i)/(tinhTong16(i))
}
console.log("Kết quả là:"+tong);