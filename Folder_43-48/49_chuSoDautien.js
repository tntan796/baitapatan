function timChuSoDauTien(n){
    var chusodautien=0;
    while(n>0)
    {
        chusodautien=n%10;
        n=Math.floor(n/10);
    }
    return chusodautien;
}
console.log("Chũ số đầu tiên của số nguyên dương là:"+ timChuSoDauTien(537));