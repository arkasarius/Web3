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
  }
},
data: () => ({
eventos:[{
  nom:"",
  direccio:"",
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
<md-list-item>hola</md-list-item>
<md-list-item v-for="a in eventos" >{{a.nom}}</md-list-item>
</md-list>

`
};
