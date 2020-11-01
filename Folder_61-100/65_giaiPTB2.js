function giaiPTB2(a,b,c)
{  
    var delta=(b*b)-(4*a*c);
    
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
            console.log("Phương trình có nghiệm kép x="+-b/2*a);
        }
        else
        {
            console.log("Phương trình có 2 nghiệm x1="+(-b+Math.sqrt(delta))/(2*a)+"và x2="+(-b-Math.sqrt(delta))/(2*a));
        }
    }
    
}
giaiPTB2(1,-3,2);