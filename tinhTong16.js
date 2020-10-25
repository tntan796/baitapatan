function tinhTong16(n){
    var tong=0;
    for( var i=1;i<=n;i++)
    {
        tong=tong+i;
    }
    return tong;
}
function main(n){
    var tong=0;
    var x=2;
    for(var i=1;i<=n;i++)
    {
        tong=tong+(x**i)/(tinhTong16(i))
    }
    console.log("Kết quả là:"+tong);
}
main(3);
