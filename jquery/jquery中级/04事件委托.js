// 事件委托就是利用事件冒泡的原理，把事件加到父级上，通过判断事件来源的子集，执行相应的操作，事件委托首先首先可以极大减少事件绑定次数，提高性能，其次可以让新加入的子元素也可以拥有相同的操作。
// 例如：
$(function(){
    //将事件绑定在ul上，ul的li都可以触发该事件
    $('#list').delegate('li','click',function(){
        alert($(this).html());
    })

})

// HTML:
/* 
<ul id="list"
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul> 
*/

//取消事件委托：
$('#list').undelegate();