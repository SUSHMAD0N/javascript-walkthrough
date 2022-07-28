function f (x, y, ...a) {
    console.log('x, y, ...a',x, y, ...a)
    console.log('a.length',a.length);
    console.log('a[0',a[0])
    return (x + y) * a.length
}
const i=f(1, 2, "hello", true, 7) === 9

console.log('i',i)


//Es-5
function f1(x, y) {
    console.log('Array.prototype',Array.prototype.slice.call(arguments, 2))
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
const y= f1(1, 2, "hello", true, 7) === 9;
console.log('y',y)
