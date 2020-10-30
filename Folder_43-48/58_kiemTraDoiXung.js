function kiemTraDoiXung(n){
   var a = new Number (n);
 var daonguoc="";
    while(n>0){
       daonguoc=daonguoc+n%10;
        n=Math.floor(n/10);    
    }
   if(daonguoc==a)
   {
      console.log("là số đối xứng ");
   }
   else
   {
      console.log("Không là số đối xứng ");
   }
}
kiemTraDoiXung(1221);



