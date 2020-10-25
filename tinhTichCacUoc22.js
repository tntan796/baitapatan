function tinhTinhCacUoc22(n){
 var tich=1;
     for(var i=1;i<=n;i++)
        {
            if(n%i==0)
            {
                tich=tich*i;
            }
        }
        console.log("Tích các ước của số nguyên"+" "+n+" "+"là "+tich);
}
tinhTinhCacUoc22(10);