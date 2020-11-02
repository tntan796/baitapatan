function tinhTong(n){
    var tich=1;
    for(var i=1;i<=n;i++)
    {
        tich=tich*i;
    }
  return tich;   
}
function main(n)
{
 var x=2 ;
 var tong= -1;
 for(var i=1;i<=n; i++)
 {
    tong=tong + ((-1)**(i+1)*(x**(2*i)/(tinhTong(2*i))));
 }
 return tong;
}
console.log("Kết quả là:"+main(2));