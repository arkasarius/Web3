const PerfilTemplate = {
props: [],
methods:{
  goToMapa: function(){
      this.$router.push('mapa');
      //console.log("Debug test");
  },
  goToTienda: function(){
      this.$router.push('tienda');
  },
  testdata: function () {
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("text").set("adeu");
    var a=this.$data.correo;
    a=a.replace(/\./g,'%2E');
    console.log(a);
    firebaseRef.child("users").child(a).set(this.$data);
  },jump: function(){
    this.$router.push('de');
  }
},
data: () => ({

nom: 'Roger',
cognom1: 'Ordoñez',
cognom2: 'Brumós',
correo: 'roger.ordonez.brumos@gmail.com',
events:[
  'Degustación de helados'
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
bio: 'Esto es una pequeña Bio de usuario donde se puede poner información de todo tipo.'

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

     <md-card-content>
       <p>{{bio}}</p>
     </md-card-content>

     <md-card-content>
     <md-list>
     <md-list-item v-for="a in events">
       <md-button @click="jump"><p>{{a}}</p></md-button>
     </md-list-item>
     </md-list>
     </md-card-content>


</md-card>


`
};
