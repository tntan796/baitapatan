function timChuSoDauTien(n){
    var chusodautien=0;
    while(n>0)
    {
        chusodautien=n%10;
        n=Math.floor(n/10);
    }
    return chusodautien;
}
console.log("chữ số đầu tiên của sô nguyên dương n là"+timChuSoDauTien(3456))