//task1
// let out1= document.querySelector('.out1');
// let i1= document.querySelector('.input');
// function t1() {
//     i1.oninput=function () {
//
//         out1.innerHTML=i1.value;
//         return  console.log(i1.value);
//     }
//
//
// }
// t1();
//////////////////////////////////////////////////////////
// let out1= document.querySelector('.out1');
// let i1= document.querySelector('.input');
// function t2() {
//     i1.onkeypress=function (event) {
//         console.log(event);
//         out1.innerHTML=event.code;
//     }
//
// }
// t2();
//////////////////////////////////////////////////////////также есть работают согласно названию события onkeyup, onkeydown
let out1= document.querySelector('.out1');
let i1= document.querySelector('.input');
function t3() {
    i1.onkeydown=function (event) {
        let code=event.keyCode;
        if(code<58 && code>47){
            out1.innerHTML='true, digit';
        }
        else {
            out1.innerHTML='false, char';
        }

    }

}
t3();