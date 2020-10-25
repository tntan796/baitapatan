function kiemTraSoChinhPhuong(n){

    for(var i=1;i<=n-1;i++)
    {
        if(i*i==n)
        {
            return true;//là số chính phương
        }
    }
    return false;//không là số chính phương
}
console.log("Số đó là số hoàn hảo "+kiemTraSoChinhPhuong(30))