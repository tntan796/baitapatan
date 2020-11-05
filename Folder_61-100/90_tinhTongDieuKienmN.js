function tinhTongDieuKien(n)
{
     var tong=0;
     var Ketqua=1;
     for (var i=1;i<n;i++)
     {
         tong=tong+i;
         Ketqua=i-1;
         if(tong>n)
         {
             break;
         }
     }
     console.log("m là"+Ketqua);
}

tinhTongDieuKien(20);