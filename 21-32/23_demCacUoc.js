function demCacUoc23(n){
    var dem=0;
    for(var i=1;i<=n;i++)
    {
        if(n%i==0)
        {          
            dem++;
        }
    }
   return dem;
}

console.log("Các ước là :"+demCacUoc23(10));

