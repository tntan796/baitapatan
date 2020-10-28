function demChuSoDauTien(n){
    var chusodautien=0;
    while(n>0)
    {
        chusodautien=n%10;
        n=Math.floor(n/10);
    }
    return chusodautien;
}
function demchudautien(n){
  var  dem=0;
    var d=demChuSoDauTien(n);
    while(n>0)
    {
        if(d==n%10)
        {
            dem++;
        }
        n=Math.floor(n/10);
    }
    return dem;
}
console.log("Số lượng chữ số đầu tiên là "+demchudautien(4567444444))