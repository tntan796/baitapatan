function luuDoBCNN(a,b){
    
    while(a!=b)
    {
        if(a>b)
        {
            a=a-b;
        }
        else
        {
        b=b-a;
        }
    }
    return a;
}
function main(a,b)
{
    var c=a*b;
    var bcnn=c/luuDoBCNN(a,b);
    return bcnn;
}
console.log("Bội chung nhỏ nhất là:"+main(6,8));
