const a = 'sssssss'

let syss = 'win'
let sys = 'ubantu'
function A() {
debugger
    this.connectors = [];

}
/***class C: a wrapper of function A*******/
class Wrapper {
    constructor() {
        debugger
        A.apply(this, arguments)
        return this;
    }
}

class C extends Wrapper {
    constructor(name) {
        debugger
        super()
        this.name = name;
        return this;
    }
}
function f(owner, cn) {
    debugger
    owner.connectors.push(cn);
    return this;
}

c1 = new C('c1');
c2 = new C('c2');
f(c1, 1);
f(c1, 2);
f(c2, 3);
f(c2, 4);
f(c2, 5);
console.log("c1.connectors:")
c1.connectors.forEach(function (t) { console.log(t) })//会在控制台输出1，2
console.log("c2.connectors:")
c2.connectors.forEach(function (t) { console.log(t) })//会在控制台输出3,4，5  