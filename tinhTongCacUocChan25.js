function  tinhTongCacChan(n)
{
var tong=0;
 for(var i= 0;i<=n;i++)
 {
     if(n%i==0 && i%2==0)
     {
         tong=tong+i;
     }
 }
 return tong;
}
console.log("Tổng các ước số chắn là:"+tinhTongCacChan(10));