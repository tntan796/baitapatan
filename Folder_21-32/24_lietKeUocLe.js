function lietKeUocLe(n){
    for(var i=1;i<=n;i++)
    {
      if(n%i==0 && i%2!=0)
      {
        console.log("Các ước lẻ của sô nguyên"+" "+n+" "+"là"+i);
      }  
    }
}lietKeUocLe(10);