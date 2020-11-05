function timUocChungLonNhat(a,b)
{
    while(a!=b)
    {
        if(a>b)
        {
            a=a-b;
        }
        else
        {
            b=b-a;
        }
    }
    return a;
}
console.log("Ước chung lơn nhât là "+timUocChungLonNhat(6,8) );