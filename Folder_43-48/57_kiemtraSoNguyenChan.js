function kiemtraSoNguyenChan(n){
    while(n>0)
    {
        kiemtra=n%10;
        if(kiemtra%2!=0)
        {
            return false;
            break;
        }
        n=Math.floor(n/10);
    }
    return true;
}
console.log(kiemtraSoNguyenChan(22))