function tinhTong15(n)
{
    var tong=0;
    for(var i=1;i<=n;i++)
    {
        tong=tong+i;
    }
    return tong;
}
var tong=0;
var n=3;
 for(var i=1;i<=n;i++)
 {
     tong=tong+1/tinhTong15(i);
 }
 console.log("Kết quả là:"+tong);
