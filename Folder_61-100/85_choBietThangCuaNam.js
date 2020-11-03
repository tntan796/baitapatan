function choBietThang(n){
    var thang=n;
    switch(thang)
    {
        case 1,2,3:
            console.log("Là quí 1");
            break;
        case 4,5,6:
            console.log("Là quí 2");
            break;
        case 7,8,9:
            console.log("là quí 3");  
            break;
        case 10,11,12:
            console.log("Là quí 4");
            break;
        default:
            console.log("không có tháng nào ");
        break;
    }
}choBietThang(12);