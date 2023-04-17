const {createApp} = Vue;

createApp({


  data(){
    return{
      contatti: [
        {
          name: 'Luca',
          avatar: './img/avatar_1.jpg',
          visible: true,
        },
        {
          name: 'Marco',
          avatar: './img/avatar_2.jpg',
          visible: true,
        },
        {
          name: 'Luigi',
          avatar: './img/avatar_3.jpg',
          visible: true,
        },
        {
          name: 'Giuseppe',
          avatar: './img/avatar_4.jpg',
          visible: true,
        },
        {
          name: 'Matteo',
          avatar: './img/avatar_5.jpg',
          visible: true,
        }
      ]

    }
  },



  methods:{

    
  },



}).mount('#app')