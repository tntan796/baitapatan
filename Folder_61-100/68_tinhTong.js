function tinhTong(n){
    var x =2;
    tong =0;
    for(var i=1;i<=n;i++)
    {
      tong =tong +((-1)**i)*(x**(2*i));
    }
    return tong;
}
console.log("Kết quả là :"+tinhTong(2))