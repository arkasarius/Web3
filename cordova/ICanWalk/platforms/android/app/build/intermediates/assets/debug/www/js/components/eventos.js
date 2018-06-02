const EventosTemplate = {
props: [],
created: function(){
  var database = firebase.database();
  var that=this;
  database.ref("eventos").once('value').then(function(snapshot) {
    //this.eventos=snapshot.val();
    var x = Object.values(snapshot.val());
    //alert(JSON.stringify(x));
  //  alert(x[0].nom);
    that.eventos=x;
    //alert(JSON.stringify(snapshot.val()));
});

},
methods:
{
  test: function(){
    var ul = document.getElementById("list");
  },
  select: function(event) {
      targetId = event.currentTarget.id;
      //alert(targetId);
      var firebaseRef = firebase.database().ref();
      firebaseRef.child("q").set(targetId); // returns 'foo'
      this.$router.push('de');
  }
},
data: () => ({
eventos:[{
  nom:"",
  direccio:"",
  mid:"",
  creador:"",
  posicio:[{
    lat:"",
    lon:""
  }],
  data:[{
    date:"",
    day:"",
    hours:"",
    minutes: "",
    seconds:"",
    time:"",
    timezoneOffset:"",
    year:""
  }],
  descripcioCurta:"",
  descripcioLlarga:"",
  direccio:"",
  geolocalitzacio:[{
    lat:"",
    lon:""
  }],
  limitUsuaris:"",
  usuarisRegistrats:[{
  }],
  preu:""
}]
}),
template:
`
<md-list>
<md-card class="md-card-example" v-for="a in eventos" md-inset>
<md-card-media-cover md-ratio="16:9">
<md-card-media md-ratio="16:9">
<img src="imgres/b.jpg">
</md-card-media>
<md-card-area>
<h2 class="md-title">{{a.nom}}</h2>
</md-card-media-cover>
<div class="md-subhead">
<md-icon>location_on</md-icon>
<span>{{a.direccio}}</span>
</div>
<md-card-content>
{{a.descripcioCurta}}
</md-card-content>
</md-card-area>
<md-card-actions>
<md-button class="md-primary" v-bind:id="a.mid" @click="select">Más información</md-button>
</md-card-actions>
</md-card-content>
</md-card>
</md-list>
`
};
