Vue.component('blog-post', {
    props: ['post'],
    template: `<div class="blog-post">
                <h3>{{ post.title }}</h3>
                <div v-html="post.content"></div>
                </div>`
  })

  Vue.component('blog-post2', {
    props: ['post'],
    template: `
      <div class="blog-post2">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
          Enlarge text
        </button>
        <div v-html="post.content"></div>
      </div>
    `
  })

  Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
  })

new Vue({
    el:'#app',
    data:{
        message:'',
        checked:false,
        picked:'',
        selected:'',
        select:[],
        msg:'',
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
          ],
        postFontSize:1,



    },
    methods:{
       
    }
})