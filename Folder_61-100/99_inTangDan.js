var a =2;
var b=10;
var c=3;
    if(a>b)
    {
        var trunggian=a;
        a=b;
        b=trunggian;
    }
    if(a>c)
    {
        trunggian=a;
        a=c;
        c=trunggian;
    }
    if(b>c)
    {
        trunggian=b;
        b=c;
        c=trunggian;
    }
    console.log("Kết quả là ",+a,+b,+c);
