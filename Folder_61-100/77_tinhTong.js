function tinhTong (n){
    var tong=0;
    for(var i=1;i<=n;i++)
    {
        tong=tong +i;
    }
    return tong;
}
console.log("Kết quả là:"+tinhTong(3))