

// function f1(mess){
//     console.log(mess);
// }// my task
let  b1=document.querySelector('.b1');
let out1 =document.querySelector('.out1');
let out2 =document.querySelector('.out2');
b1.onclick=function () {
    let xhttp=new XMLHttpRequest();
    xhttp.open("GET","http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9b161b7b579ffa46817c55a4817da08c",true);
    xhttp.responseType='json';
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if (this.status==200 && this.readyState==4){
            info(xhttp);
        }
    }
    function info(data) {
        let obj=data.response;
        console.log(obj)
        out1.innerHTML='+'+ Math.round(obj.main.temp-273) + 'C';
        out2.innerHTML=obj.name;
    }
}
