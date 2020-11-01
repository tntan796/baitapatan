function tinhTong(n)
{
    var x =2;
    var tong=0;
    for (var i=0;i<=n;i++)
    {
        tong=tong +((-1)**i)*(x**(2*i+1));
    }
    return tong;
}
console.log("Kết quả là:"+tinhTong(1));