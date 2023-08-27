document.getElementById("submit").addEventListener("click",bmiCalculator);
function bmiCalculator()
{
    var cm=parseFloat(document.getElementById("cm").value);
    var kg=parseFloat(document.getElementById("kg").value);
    var bmi=((kg*10000)/(cm*cm)).toFixed(1);
    bmi=parseFloat(bmi);
    var cond;
    if(bmi<18.6)
    {
        cond="Under Weight";
    }
    else if(cond>=18.6&&cond<=24.9)
    {
        cond="Normal Weight";
    }
    else
    {
        cond="OverWeight";
    }
    document.getElementById("result").innerHTML="BMI is : "+bmi;
    document.getElementById("aboutWeight").innerHTML=cond;
}