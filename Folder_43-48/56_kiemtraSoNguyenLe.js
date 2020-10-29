function kiemtrasonguyenle(n){
    
    while(n>0)
    {
        kiemtra=n%10;
        if(kiemtra%2==0)
        {
            return false;////Sai.
            break;
        }
        n=Math.floor(n/10)
    }
    return true;///Đúng.toàn chữ số lẻ.
}
console.log(kiemtrasonguyenle(333));