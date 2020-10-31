function luuDoUCLN(a,b){
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
console.log("Ước chung lớn nhất là "+luuDoUCLN(6,8))