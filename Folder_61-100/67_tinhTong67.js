function tinhTong67(n)
{  var tong =0;
    var x =2;
    for(var i=1;i<=n;i++)
    {
        tong =tong +((-1)**(i+1))*x**i;
    }
    return tong;
}
console.log("Kết quả bằng "+tinhTong67(2))