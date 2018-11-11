1.1
// console.log('\u{1F680}');

1.2

var s = '𠮷a';
// console.log(s.codePointAt(0));//134071
// console.log(s.codePointAt(1).toString(16));//dfb7
// console.log(s.charAt(0));//�
// console.log(s.charCodeAt(0));//55362

// function is32Bit(c){
    // return c.codePointAt(0) > 0xFFFF;
// }
// console.log(is32Bit('𠮷'));//true

1.3
// console.log(String.fromCodePoint(0x20BB7));//𠮷

1.5
// console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());//true

1.8
// console.log('x'.repeat(3));//xxx

1.9 
// console.log('x'.padStart(5,'ab'));//ababx

1.10
var greeting = `\`Yo\`World!`;
// console.log(greeting);//`Yo`World!

var no =`
<ul>
    <li><li>
</ul>
`.trim();
// console.log(no);
                /*<ul>
                     <li><li>
                  </ul> */

function tag(stringArr,...value){
console.log(...value);//Array(4) [1, 2, 3, 4]
}
tag('okk',[1,2,3,4]);//1 2 3
// console.log(...[1, 2, 3])//1 2 3