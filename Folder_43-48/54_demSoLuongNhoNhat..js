function demChuSomin(n)
{
    var min=9;
    while(n>0)
    {
        if( min > n%10)
        {
            min=n%10;

        }
        n=Math.floor(n/10);
    }
    return min;
}
function demChuSoNho(n)
{
    var m= demChuSomin(n);
    var dem=0;
    while(n>0)
    {
      if(m==n%10)
      {
          dem++;
      }
      n=Math.floor(n/10)
    }
    return dem;
}
console.log("Số lượng chữ sô nhỏ nhất là "+demChuSoNho(564333333));
