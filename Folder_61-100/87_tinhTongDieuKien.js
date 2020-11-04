function tinhTong87(n)
{
    var Ketqua=1;
    var tong =0;
    for(var i=1;i<10000;i++)
    {
       
        tong=tong+i; 
    }
    if(tong>10000)
    {
        Ketqua=Ketqua*i;
    }
    return Ketqua;

}
console.log("Kết quả n thỏa mãn là "+Ketqua);