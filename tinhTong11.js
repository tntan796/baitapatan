function tinhTong10(n){
var tich=1;
var x=2;
for(var i=2; i<=n;i++)
{
    tich=tich*x*i;
}
return tich;
}
function main(n){
    var tong=1;
    for( var i=2;i<=n;i++)
    {
        tong=tong+tinhTong10(i);
    }
    console.log("Kết quả là:"+tong);
}
main(3);
