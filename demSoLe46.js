function demUocLe(n){
    var dem=0;
    while(n>0)
    {
        if((n%10)%2!=0)
        {
            dem++;
        }
        n=Math.floor(n/10);
    }
    return dem;
}
console.log("Đếm chữ số lẻ là"+demUocLe(1235));