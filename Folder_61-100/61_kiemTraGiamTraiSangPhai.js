function kiemTraGiamTraiSangPhai(n){
    var GiamDan=n%10;
    n=Math.floor(n/10);
    var kiemtra="";
    while(n>0)
    {
          kiemtra=n%10;
        if(kiemtra<=GiamDan)
        {
            return false;
            
        }
        n=Math.floor(n/10);
    }
    return true;
    
}
console.log("In ra kết quả "+kiemTraGiamTraiSangPhai(12345));
