function A() {
    console.log(1);
    B();
    console.log(2);
}
function B() {
    console.log(3);
    C();
    console.log(4);
}
function C() {
    console.log(5);
}

A();