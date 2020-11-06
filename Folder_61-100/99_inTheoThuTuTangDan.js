
  var a=6;
  var b=5;
  var c=3;
  if(a>b)
  {
    var giua=a;
    a=b;
    b=giua;
  }
 if(a>c)
  {
    giua=a;
    a=c;
    c=giua;
  }
  if(b>c)
  {
    giua=b;
    b=c;
    c=giua;
  }
console.log("Thứ tự các chữ số theo chiều tăng dần là " +a,+b,+c)


  

