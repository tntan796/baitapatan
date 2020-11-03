function timsolonnhat(a,b,c)
{
    var max =a;
    if(b > max)
    {
        max=b;
    }
    if(c >max)
    {
        max=c;
    }
    return max;
}
console.log("chữ số lớn nhất là "+timsolonnhat(6,9,8))