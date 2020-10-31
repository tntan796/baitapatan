function giaiPTB2(a,b,c)
{   
     var x= -b/2*a;
    var delta=(b**b)-(4*a*c);
    var x1=(-b+Math.sqrt(delta))/2*a;
    var x2=(-b-Math.sqrt(delta))/2*a;
    
    if(a==0)// trở thành phương trình bâc 
    {
        if(b!=0)
        {
            console.log("Phương trình có nghiệm  x ="+-c/b);
        }else 
        {
          if(c==0)
          {
           console.log("Phương trình vô số nghiệm ");
          }
          else
          {
              console.log("Phương trình vô nghiệm ")
          }
        }
    }
    else{
        if(delta<0)
        {
            console.log("Phương trình vô nghiệm ");
        }else if(delta==0)
        {
            console.log("Phương trình có nghiệm kép x="+x);
        }
        else
        {
            console.log("Phương trình có 2 nghiệm x1="+x1+"và x2="+x2);
        }
    }
    return x1,x2;
}
giaiPTB2(1,3,-4);