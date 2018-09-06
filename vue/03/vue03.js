new Vue({
    el:"#app",
    data:{
        count:0,
    },
    methods:{
        add:function(){
            this.count++;
        },
        say:function(say){
            alert(say);
        },
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        },
        dothat:function(){
            console.log('dothat');
        },
        doThis:function(){
            console.log('dothis');
        },
        submit:function(){
            console.log('submit');
        }
    },

})