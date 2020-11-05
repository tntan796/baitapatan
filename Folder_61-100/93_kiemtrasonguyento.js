function kiemTraSoNguyenTo(n)
{
if(n<2)
{
return false;
}
else
{
    for(var i=2;i<=n-1;i++)
    {
        if(n%i==0)
        {
            return false;//Không là sô nguyên tố 
        }
    }
    return true; // Là số nguyên tố 
}
}
console.log(kiemTraSoNguyenTo(10));