
///////task1
function t1() {
    try{
        console.log(document.querySelector('.input43').value);
    }
    catch (e) {
        document.querySelector('.out1').innerHTML='1';
    }
}
t1();

/////////////////task2
function t2() {
    try{
        console.log(document.querySelector('.input43').value);
    }
    catch (e) {
        document.querySelector('.out2').innerHTML=e;
    }
}
t2();

///////task3
function t3() {
    try{
        console.log(document.querySelector('.input43').value);
    }
    catch (e) {
        let div=document.createElement("div");
        div.innerHTML=e;
        document.body.append(div);
    }
    finally {
        console.log('final task');
    }
}
t3();

