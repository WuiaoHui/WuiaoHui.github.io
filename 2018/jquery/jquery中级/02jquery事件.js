// blur() 失去焦点
// focus() 获得焦点
// change() 表单输入改变
// mouseenter() 鼠标进入
// mouseleave() 鼠标移出
// mouseover() 鼠标进入（进入子元素也触发）
// mouseout() 鼠标移出（移出子元素也触发）
// 当元素不断移入移出时，浏览器会记住次数，从而导致鼠标离开元素很久，元素仍在触发事件，所以添加stop()可以确保在下一个动作触发前，前一个动作已结束。
// resize() 窗口改变尺寸的时候
// keyup()  键盘松开



// 自定义事件
//绑定多个事件
$('#box1').bind('mouseover click',function(){
    alert('hello');

    //解绑事件
    $('#box1').unbind('click');
});

//绑定hello事件
$('#box').bind('hello',function(){
    alert('hello');

    //解绑事件
    $('#box').unbind('hello');
});

//触发hello事件
$('btn').click(function(){
    $('#box').trigger('hello');
})