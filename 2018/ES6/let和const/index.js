////#let命令
// for(let i=0;i<10;i++){
//     //...
// }
// console.log(i);
//i只在for代码块下有效。

//暂时性死区
// if(true){
//     temp='abc';// TDZ(暂时性死区)开始
//     console.log(tmp);// 报错

//     let temp;// 绑定了变量temp。TDZ结束
//     console.log(temp);// undefined

//     temp=123;
//     console.log(temp);// 123
// }
//有些“死区”比较隐蔽
// function bar(x=y,y=2){ //x的默认值为y，而y此时还未声明，属于“死区”
//     return [x,y];
// }
// bar();//报错

//不允许重复声明
// function aa(arg){
//    let a=10;
//    let a=1; //报错

//    let arg=10;//报错
//    {
//        let arg=5;// 不报错 因为不在同一个作用域
//    }
// }

////#ES6的块级作用域与函数声明
// function f(){
//     console.log('I am outside!');
// }
// (function (){//立即执行函数IIFE
//     if(false){
//         function f(){//重复声明一次函数
//             console.log('I am inside!');
//         }
//     }
//     f();//报错 f is not a function
// }())

////#const
// const foo={};

// foo.prop=123;//为foo添加属性
// console.log(foo.prop);

// foo ={}//报错，指向了另一个对象，指针指向的地址发生了变化

////#ES6声明变量的6种方法
var a=1;
console.log(this.a);//undefined?? window.a报错 window is not defined
let b=1;
console.log(this.b)//undefined
