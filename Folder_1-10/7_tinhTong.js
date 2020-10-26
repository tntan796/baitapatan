function tinhTongCau7(n){
    var tong=0;
    for(var i=1;i<=n;i++)
    {
        tong=tong+(i/(i+1))
    }
    return tong;
}
console.log("Kết quả là:"+tinhTongCau7(2));