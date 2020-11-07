function kiemtracungdau(a,b){
   
    var ketqua=a*b;
    if(ketqua > 0)
    {
        console.log("2 số vừa nhập là cùng dấu");
    }
    else
    {
        console.log("2 số vừa nhập là trái dấu")
    }
}
kiemtracungdau(2,-2);

// Hàm trả lại kết trả kiểm tra ví dụ như true thì là cùng dấu, false thì là khác dấu.
// Kết thúc hàm thì gọi kiểm tra if(kiemtracungdau(3,2) == true) {}
// Không console bài kiểm tra ở trong hàm
