function demCacUoc23(n){
    var dem=0;
    for(var i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            console.log("ước của số nguyên "+" "+n+" "+"là "+i);
            dem++;
        }
    }
    console.log("Số ước của "+" "+n+" "+"là "+dem);
}
demCacUoc23(10);