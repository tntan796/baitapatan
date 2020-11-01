function tinhPT(a,b,c){
 
var delta = b*b-4*a*c;

if(a==0)
{
    if(b==0 && c==0 )
    {
    console.log("Phương trình có vô số nghiệm");
    }else
    {
    console.log("Phương trình vô nghiệm ");
    }
}
else
{
    if(delta<0)
    {
        console.log("Phương trình vô nghiệm ");
    }
    else if(delta ==0)
    {
        console.log("Phườn trình có nghiệm kép"+-b/2*a);
    }else
    {
        console.log("Phương trình có 2 nghiệm phân biệt x1="+(-b+Math.floor(delta))/(2*a)+"và x2 ="+(-b-Math.floor(delta))/(2*a));
    }
}
if((-b+Math.floor(delta))/(2*a) >=0 )
{
var x= -(Math.floor((-b+Math.floor(delta))/(2*a)));
}else if((-b-Math.floor(delta))/(2*a) >=0 )
{
var x= -(Math.floor((-b-Math.floor(delta))/(2*a)));
}
return x;
}

console.log(tinhPT(2,4,-6));