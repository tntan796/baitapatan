function tinhTong9(n){
    var tich=1;
    var x =2;
    for(var i=2;i<=n;i++)
    {
        tich=tich*i*x;
    }
    return tich;
}
console.log("Kết quả là:"+tinhTong9(3));