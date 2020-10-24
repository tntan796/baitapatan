function tinhTong14(n){
    var tich=1;
    var x=2;
    tich=tich*x**(2*n+1);
    return tich;
}
var tong=0;
var n=2;
for(var i=0;i<=n;i++)
{
    tong=tong+tinhTong14(i);
}
console.log("kết quả là:"+tong)