let firstname = prompt("İsminizi Giriniz:")
let info = document.querySelector("#myName")
info.innerHTML = `${firstname}`
showTime()
function showTime()
{
    var days = ["Pazartesi" , "Salı" , "Çarşamba" , "Perşembe" , "Cuma" , "Cumartesi" , "Pazar"]
    let date=new Date().toLocaleTimeString('tr-TR');
    let dayname=new Date();
    let clock = document.getElementById("myClock").innerHTML=date+" "+days[dayname.getDay()];
    setInterval("showTime()", 1000);
}