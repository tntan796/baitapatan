function tinhTong17 (n){
    tich=1;
    for(var i=1;i<=n;i++)
    {
        tich=tich*i;
    }
    return tich;
}
function main(n){
    var tong=0;
    var x=2;
    for(var i=1;i<=n;i++)
    {
        tong=tong+(x**i/tinhTong17(i));
    }
    console.log("Kêt quả là:"+tong);
}
main(3);
