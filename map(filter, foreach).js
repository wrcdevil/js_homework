let input=document.querySelector('.input');
let button=document.querySelector('.button');
let out=document.querySelector('.out');


task1
const a1=[4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
let a1_res=a1.map(function (value, index) {
    return value*2
});
function f1() {
    return console.log(a1_res);
}

//task2
const a2= [2,3,4,5,10,11,12];
function f2() {
    let res2=a2.map((value)=>Math.pow(value,2));
    return console.log(res2);
}
f2();
task3
const a3 = [4,"3",6,7,"12",34,"56",78,90,11]
function f3() {
    let res3=a3.map(function (value) {
        if(Number.isFinite(value))
        {
            return value;
        }
        else return NaN
    });
    return console.log(res3);
}
f3();
// split записывает в масив строку с указанным разделителем
// join масив в строку
// for each task
//
let a4 = [2, "hello", 3, "hi", 4, "Mazai"];
function f4() {
    let res4=[];
    a4.forEach(function (elem , index) {
        if(Number.isFinite(elem)){
            return res4.push(elem);
        }
    });
    return console.log(res4)
}
f4();