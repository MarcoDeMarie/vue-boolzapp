const {createApp} = Vue;

createApp({


  data(){
    return{
      contatti: [
        {
          name: 'Luca',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
          ],

        },


        {
          name: 'Marco',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
          ],
        },


        {
          name: 'Luigi',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
          ],
        },


        {
          name: 'Mario',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
          ],
        },


        {
          name: 'Matteo',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
          ],

        }
      ],

      contattoAttivo: '',
      messageWrote:'',
      searchText:'',


    }
  },

  watch:{
    searchText(nuovoValore,vecchioValore){
      console.log('Prima: ' + vecchioValore)
      console.log('Dopo: ' + nuovoValore)
    }
  },



  methods:{
    apriChat(contatto){
      this.contattoAttivo = contatto
    },

    sendMessage(){
      const messaggio = {
        date: '20/03/2020 16:35:00',
        message: this.messageWrote,
        status: 'sent'
      }
      this.contattoAttivo.messages.push(messaggio)
      this.messageWrote= ''
      setTimeout(this.receiveMessage, 1000)

    },

    receiveMessage(){
      const risposta = {
        date: '20/03/2020 16:35:00',
        message: 'ok',
        status: 'received'
      }
      this.contattoAttivo.messages.push(risposta)
    },

    searchContact(){
      return this.contacts.filter(contatto =>{
        return contatto.name.toLowerCase().indexOf(this.searchText.toLowerCase());
      })
      
    },


  },

    
      
  
    
  

  



}).mount('#app')