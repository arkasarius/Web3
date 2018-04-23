const PerfilTemplate = {
props: [],
methods:{
  goToMapa: function(){
      this.$router.push('mapa');
      //console.log("Debug test");
  },
  goToTienda: function(){
      this.$router.push('tienda');
  }
},
data: () => ({

nom: 'Roger',
cognom1: 'Ordoñez',
cognom2: 'Brumós',
correo: 'roger.ordonez.brumos@gmail.com',
events:[
  'id1',
  'id2',
  'id3'
],
gossos:[
  'idg1',
  'idg2'
],
contactes:[
  'correo1',
  'correo2'
],
empresa: false,
bio: 'Hola soc el que programa la app'

}),

template:
`
<md-card>
     <md-card-media>
       <img src="imgres/a.jpg" alt="People">
     </md-card-media>

     <md-card-header>
       <div class="md-title">{{nom}} {{cognom1}} {{cognom2}}</div>
       <div class="md-subhead"><p>{{correo}}</p></div>
     </md-card-header>

     <md-card-actions v-for="a in events">
       <md-button><p>{{a}}</p></md-button>
     </md-card-actions>

     <md-card-content>
       <p>{{bio}}</p>
     </md-card-content>
   </md-card>


{{nom}}
{{cognom1}}
{{cognom2}}
{{correo}}
<li v-for="a in events">
     <p>{{a}}</p>
</li>
<li v-for="a in gossos">
     {{a}}
</li>
<li v-for="a in contactes">
     {{a}}
</li>
{{empresa}}
{{bio}}

`
};
