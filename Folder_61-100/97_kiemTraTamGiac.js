function kiemtratamgiac(a,b,c)
{
    if(a+b>c&& b+c>a && a+c>b)
    {
        console.log("Đây là 3 cạnh của tam giác");
    }
     if((a==b)&&(b==c)&&(c==a))
    {
        console.log("Đây là tam giác đều");
    }
   else if((a==b)||(b==c)||(c==a))
    {
        console.log("Đây là tam giác cân ");
    }
    else if((a*a==b*b+c*c)||(b*b==a*a+c*c)||(c*c==a*a+b*b))
    {
        console.log("Đây là tam giác vuông ");
    }
    else{
        console.log("Đây không phải tam giác ");
    }
}kiemtratamgiac(4,3,3);