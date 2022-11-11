/* ===============
   functions
================= */
function randMultiple() {
   num = Math.floor(Math.random() * 900);
   if (num % 100 == 0 && num !== 0) {
      return num;
   } else {
      return randMultiple();
   }
}

/* ===============
   main
================= */
const { createApp } = Vue;

createApp({
   data() {
      return {
         message: 'questo è il mio primo messaggio di vue',
         imgSrc: 'https://picsum.photos/600/300',
         team: [
            {
               fristname: 'Wayne',
               lastName: 'Barnett',
               role: 'Founder & CEO',
               photo: 'wayne-barnett-founder-ceo.jpg',
            },

            {
               fristname: 'Angela',
               lastName: 'Caroll',
               role: 'Chief Editor',
               photo: 'angela-caroll-chief-editor.jpg',
            },

            {
               fristname: 'Walter',
               lastName: 'Gordon',
               role: 'Office Manager',
               photo: 'walter-gordon-office-manager.jpg',
            },

            {
               fristname: 'Angela',
               lastName: 'Lopez',
               role: 'Social Media Manager',
               photo: 'angela-lopez-social-media-manager.jpg',
            },

            {
               fristname: 'Scott',
               lastName: 'Estrada',
               role: 'Developer',
               photo: 'scott-estrada-developer.jpg',
            },
         ],
         changeSrc: function () {
            this.imgSrc = `https://picsum.photos/${randMultiple()}/${randMultiple()}`;
         },
      };
   },
}).mount('#app');
