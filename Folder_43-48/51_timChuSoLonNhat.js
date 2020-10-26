function timChuSoLonNhat(n){
    var max=0;
    var kiemtra;
    while(n>0)
    {
        kiemtra=n%10;
        if(kiemtra>max)
        {
            kiemtra=max;
        }

    }
    return kiemtra;
}
console("Chũ số lớn nhất là:"+timChuSoLonNhat(354));