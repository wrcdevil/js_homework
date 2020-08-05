//task1
let div1=document.querySelector('.div1');
let div2=document.querySelector('.div2');
// div1.onclick=function (event) {
//     console.log(event);
//     console.log('click');
// }
// div2.onclick=function () {
//     console.log('click2');
// }
// let out1=document.querySelector('.out1');
// div1.onclick = function t1() {
//      let text=div1.textContent;
//      return  out1.innerHTML=text;
//
// }
// task2 (зажат ли альт во время клика)
let out2=document.querySelector('.out2');
// function t2() {
//
//     onclick = function (event) {
//         console.log(event);
//         if(event.altKey===true){
//             return out2.innerHTML="true";
//         }
//         else{
//             return out2.innerHTML="false";
//         }
//
//     }
// }
// div1.onclick=t2();
/////////////////////////////////////////////
// есть распространенные ивенты:  onmouseup -down onmouseenter onmouseleave
//task3
let w=55;
div2.onclick=function () {
    div2.style.width= w +'px';
    w=w+5;
    console.log(w);
    out2.innerHTML='temp width = ' +w+ 'px';
}