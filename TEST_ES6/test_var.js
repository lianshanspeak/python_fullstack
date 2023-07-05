// console.log(a);
// var a = 100;
// console.log(a);

// let的三大特征：1、必须先声明在使用2、不能重复声明3、块级作用域，变量只在代码块内有效
// 常量声明，大写
// 1.声明必须赋值2.常量是只读的，不能被赋值，3常量的声明只在代码块内有效
const NAME = 'JS';
console.log(NAME);
// 解构赋值
// 场景：数组，对象，字符串
// 结构赋值失败的之后，赋值为undefined
// 还可以给一个默认值
// let[a,b,c]=[1,2,3];
// let a = [1,2,3];
// let [a1, a2, a3] = a;
// console.log(a1);

// let [b1, ...b] = a;
// console.log('........');
// console.log(b1);

// let {foo, bar} = {foo: 'foo',bar:'bar'};
// console.log(foo);

// 解构方法
// let {PI, sin} = Math
// console.log(sin(PI/2))

// 函数和箭头函数
// 定义箭头函数
let F1 = v=> v;
// 等同于
let f1 =function (v){
    return v;
};


let arr1 = [1,2,3]
arr1.map(function (x){
    return x*x;
});
// 简化为
let arr2 = [1,2,3]
arr2.map(x => x*x);


// 理解this，node中是global,浏览器是windows
