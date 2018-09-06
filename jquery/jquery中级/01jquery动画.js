$(function(){

    /*动画参数：
    1.属性设置{param1:value1,param2:value2}
    2.speed 时间 ms
    3.swing 默认值 开始和结束慢速，中间快速 linear 匀速
    4.回调函数
    */
    $('#div').animate({
        width:300,
        height:300
    },1000,swing,function(){
        alert('ok!');
    });


    //尺寸相关、滚动事件
    /*
    1.获取和设置元素的尺寸
        width()、height()    获取元素width和height
        innerWidth()、innerHeight()  包括padding的width和height
        outerWidth()、outerHeight()  包括padding和border的width和height
        outerWidth(true)、outerHeight(true)  包括padding和border以及margin的width和height
    2.获取元素相对页面的绝对位置
        offset()
            含有属性width和height
    3.获取可视区高度
        $(windows).height();
    4.获取页面高度
        $(document).height();
    5.获取页面滚动高度
        $(window).scroll(function(){

        })
    */

    
})