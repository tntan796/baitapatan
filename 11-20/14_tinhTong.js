function tinhTong14(n){
    var tich=1;
    var x=2;
    tich=tich*x**(2*n+1);
    return tich;
}
function main(n){
    var tong=0;
  
    for(var i=0;i<=n;i++)
    {
        tong=tong+tinhTong14(i);
    }
    console.log("kết quả là:"+tong);
}
main(2);
