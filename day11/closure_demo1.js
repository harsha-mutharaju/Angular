// closure scope - will be seen only for inner functions , where it is accessing outer function data

var a = 10;
var b = 20;

function f1(){
    let c = 30;

    function f2(){
        let d = 50
    }
    f2();
}
f1();
console.dir(f1);