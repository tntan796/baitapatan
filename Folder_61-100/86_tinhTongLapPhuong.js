function tinhTongLapPhuong(n)
{
    var tong=0;
    for(var i=1;i<=n;i++)
    {
        tong=tong+i*i*i;
    }
    return tong;
}
console.log("Kết quả là:"+tinhTongLapPhuong(2))