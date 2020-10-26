function daonguocso(n){
    var daoso="";
    while(n>0)
    {
        daoso=daoso+n%10;
        n=Math.floor(n/10);
    }
        return daoso;
}
console.log("Số đảo ngược là:"+daonguocso(3445));
