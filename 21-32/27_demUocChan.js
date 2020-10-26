function demUocChan(n){
    var dem=0;
    for(var i=1;i<=n;i++)
    {
        if(n%i==0 && i%2==0)
        {
            dem++;
        }
    }
    return dem;
}
console.log("Số ước chẵn là:"+demUocChan(10));