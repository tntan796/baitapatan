function tinhTongSoChan47 (n)
{
    var tong=0;
    while(n>0)
    {
        if((n%10)%2==0)
        {
            tong=tong+n%10;
        }
    n=Math.floor(n/10);
    }
    return tong;
}
console.log("Kết quả là "+tinhTongSoChan47)