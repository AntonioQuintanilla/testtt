const s = new String("hello world");

String.prototype.concatTest = function () {
    return this + " test";
}

console.log("My name is Antonio".concatTest());

console.log(s.concatTest());