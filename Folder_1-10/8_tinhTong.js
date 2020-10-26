function tinhTong8 (n){
    var tong=0;
    for(var i=0; i<=n;i++)
    {
        tong=tong +(2*i+1)/(2*i+2);
    }
    return tong;
}
console.log("Kết quả là:"+tinhTong8(2));