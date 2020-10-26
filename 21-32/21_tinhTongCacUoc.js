function tinhTongCacUoc21(n){
    var tong=0;
    for(var i=1;i<=n;i++)
    {
        if (n%i==0)
        {
          tong=tong+i;
        }
    }
    return tong;
   
}
console.log("Tổng các ước là" +tinhTongCacUoc21(10));


