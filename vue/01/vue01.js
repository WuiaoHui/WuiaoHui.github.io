//注册组件，要放在定义的vue之前，不然找不到绑定的根节点
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
  })

var vm = new Vue({
    el:"#app",
    data:{
        title:"今天天好",
        rawHtml:"<h2>title h2</h2>",
        cla:"head",
        dynamicId:"main",
        tit:"title1",
        number:5,
        ok:false,
        items:[{
            message:"1111"
        },{
            message:"2222"
        },{
            message:"3333"
        }],
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
        isActive:true,
        offError:true,
        object:{
            active:true,
            'offerror':false
        },
        isActive: true,
        error: null,
        activeClass:'active',
        errorClass:'error',
        activeColor: 'red',
        fontSize: '30px',



    },
    methods:{
        onclick:()=>{
            console.log("you click me!");
        },
        // 在这里只能用function定义函数，不能用=> 因为当调用Math等包时，不能用
        reversedMessage1:function(){
            return this.tit.split('').reverse().join('')
        }

    },
    computed:{
        // 在这里只能用function定义函数，不能用=> 因为当调用Math等包时，不能用
        reversedMessage:function(){
            return this.tit.split('').reverse().join('')
        },
        FullName: function () {
            return this.firstName + ' ' + this.lastName
        },
        classObject: function () {
            return {
              active: this.isActive && !this.error,
              'text-danger': this.error && this.error.type === 'fatal'
            }
          }
    },
    watch: {
        firstName: function (val) {
          this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
        }
      }

})



