function timUocLeLonNhat(n)
{ 
    var max=0;
    for (var i=n;i>1;i--)
    {
     if(n%i==0 && i%2!=0)
     {
         max=i;
     }
    }
    return max;
}
console.log("Ước lẻ lớn nhất là"+timUocLeLonNhat(12));