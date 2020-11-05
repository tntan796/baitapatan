function inloaitru(n)
{
    for(var i=1;i<n;i++)
    {
        if(i%2 !=0)
        {
           if(i==5 || i==7 || i==93)
           {
               continue;
           }
           console.log(i);
        }
        
    }
    
}
inloaitru(100);

