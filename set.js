//task2
let input=document.querySelector('.input');
let button=document.querySelector('.button');
let out=document.querySelector('.out');
let s=new Set();
button.onclick=function () {
    let item=input.value;
    s.add(item);
    console.log(s)
    let outString='';
    for(let item of s){

        outString+=item +'  ';
    }
    console.log(outString);
    out.innerHTML=outString;
}
////////////////////////////////////////////////////task 3
let input=document.querySelector('.input');
let button=document.querySelector('.button');
let out=document.querySelector('.out');
let s=new Set([21,23,65,64]);

button.onclick=function () {
    let item=Number(input.value);

    if(s.has(item)){
        s.delete(item);
        console.log(s);
        let outString='';
        for(let item of s){

            outString+=item +'  ';
        }
        console.log(outString);
        out.innerHTML=outString;
    }
    else{
        console.log(s)
        let outString='';
        for(let item of s){

            outString+=item +'  ';
        }
        console.log(outString);
        out.innerHTML=outString;
    }
}