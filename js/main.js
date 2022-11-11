const { createApp } = Vue;

createApp({
   data() {
      return {
         message: 'questo è il mio primo messaggio di vue',
         imgSrc: 'https://picsum.photos/600/300',
      };
   },
}).mount('#app');
