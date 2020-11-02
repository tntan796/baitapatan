function tinhTong(n){
    var tong =0;
    for(var i=1;i<=n;i++)
    {
        tong=tong+i;
    }
    return tong;
}
function main(n){
    var x=2;
    var tong=0; 
    for(var i=1;i<=n;i++)
    {
        tong=tong+ (((-1)**i)*((x**i)/tinhTong(i)));
    }
    return tong;
}
console.log("Kết quả là "+main(2))