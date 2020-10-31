function kiemTraTraiQuaPhai(n){
    var TangDan=n%10;
    n=Math.floor(n/10);
    var kiemtra="";
    while(n>0)
    {
          kiemtra=n%10;
        if(kiemtra<=TangDan)
        {
            return true;
            
        }
        n=Math.floor(n/10);
    }
    return false;
    
}
console.log("In ra kết quả "+kiemTraTraiQuaPhai(1357))