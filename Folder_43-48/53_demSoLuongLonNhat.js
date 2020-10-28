
function demSoLuongChuSOmax(n){
var max=0;
while(n>0)
{
    if(n%10 > max )
    {
        max=n%10;
    }
    n=Math.floor(n/10);
}
return max;
}
 function demmax(n)
{
    var m= demSoLuongChuSOmax(n);
    var dem=0;
    while(n>0)
    {
        
        if(m==n%10)
        {
            dem++;
        }
        n=Math.floor(n/10);
    }
    return dem;
}
console.log("Số lần xuất hiện số lớn nhất của số nguyên dương n là:"+demmax(34567777));
