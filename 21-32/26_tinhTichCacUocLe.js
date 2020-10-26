function tinhTichCacUocLe(n){
    var tich=1;
    for (var i=1; i<=n;i++)
    {
        if(n%i==0 && i%2!=0)
        {
            tich=tich*i;
        }
    }
    return tich;
}
console.log("Kết quả là:"+tinhTichCacUocLe(10))