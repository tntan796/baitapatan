function tinhTong18 (n){
var tich=1;

for(var i=1;i<=n;i++)
{
    tich=tich*i;
}
return tich;
}
function main(n){
    var tong=1;
    var x=2;
    for(var i=1;i<=n;i++)
    {
    tong=tong+ (x**(2*i)/(tinhTong18(2*i)));
    }
    console.log("Kết quả là:"+tong);
}
main(3);
