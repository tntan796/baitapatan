function tinhTinhCacUoc22(n){
 var tich=1;
     for(var i=1;i<=n;i++)
        {
            if(n%i==0)
            {
                tich=tich*i;
               
            } 
        } 
        return tich;      
    }
  console.log("kết quả là"+tinhTinhCacUoc22(10));