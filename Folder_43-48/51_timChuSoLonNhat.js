function timCSLN(n){
    var max=0;
  var m;
    while(n>0)
    {
         m=n%10;
    
       if(m>max)
    {
        max=m;
    }
    n=Math.floor(n/10);
    }
    
    return max;
}   
console.log("Chũ số lớn nhất là:"+timCSLN(587));