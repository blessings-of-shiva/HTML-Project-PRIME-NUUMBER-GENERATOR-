const lowernumber=parseInt(prompt('Enter lower number: '));
const highernumber=parseInt(prompt('Enter higher number: '));
var s=""
for(let i=lowernumber; i<=highernumber;i++)
{
    let flag=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0)
        s=s+`${i} ` 
}
document.getElementById("value").innerText=s