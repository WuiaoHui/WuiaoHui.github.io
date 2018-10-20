new Vue({
    el:'#app',
    data:{
        ok:false,
        type:'a',
        loginType:'username',
        seen:false,
        parentMessage:'parent',
        items:[
            {message:'111',id:'aaa'},
            {message:'222',id:'bbb'},
            {message:'333',id:'ccc'}
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
          },
          numbers: [ 1, 2, 3, 4, 5 ],
          todos:[{},{},{}],
          

        

    },
    computed: {
        evenNumbers: function () {
          return this.numbers.filter(function (number) {
            return number % 2 === 0
          })
        }
    },
})