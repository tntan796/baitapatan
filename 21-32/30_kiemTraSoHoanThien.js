function kiemTraSoHoanThien(n){
    var tong=0;
    for (var i=1;i<=(n-1);i++)
    {
        if(n%i==0)
        {
            tong=tong+i;
        }
    }
    if(tong==n)
    {
        return true;//Là số hoàn thiện 
    }
    return false;//Không là số hàan thiện 
}
console.log("Số đó là "+kiemTraSoHoanThien(6));