function timChuSoNhoNhat(n){
    
    var min = 9;
    while (n>0)
    {   
        
        if(min > n%10)
        {
            min=n%10;
        }
        n=Math.floor(n/10);
     }
    return min;
}
console.log("Số bé nhất trong số nguyên dương la"+timChuSoNhoNhat(963));    