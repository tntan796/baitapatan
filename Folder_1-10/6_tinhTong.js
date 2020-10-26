function tinhTongCau6(n){
    var tong=0;
    var x=2;
    for( var i=1; i<=n;i++)
    {
        tong=tong+ (1/(i*x*(i+1)));
    }
    return tong;
}
console.log("kết quả là "+tinhTongCau6(2));