const DeTemplate = {
props: [],
created: function(){
  var database = firebase.database();
  var that=this;
  var x="";
  var k=0;
  database.ref("q").once('value').then(function(snapshot) {
    x = JSON.stringify(snapshot.val());
    if(x==="0"){
      k=0;
    }
    if(x==="1"){
      k=1;
    }
    if(x==="2"){
      k=2;
    }//hardcoded perque el parseint no funciona -.-
    var rootRef = database.ref("eventos");
    rootRef.once("value").then(function(snapshot) {
      var vnts = Object.values(snapshot.val());
      //alert(k);
      //alert(JSON.stringify(vnts[k]));
      that.evento=vnts[k];
    });
  });


},
data: () => ({
evento:{
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
}
}),
methods:
{
  apuntarse: function(){
    alert("apuntado");
  }
},

template:
`
<md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="imgres/c.jpg" alt="imagen">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">{{evento.nom}}</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>{{evento.direccio}}</span>
          </div>
        </md-card-header>

        <md-card-content>
          {{evento.descripcioLlarga}}
        </md-card-content>
      </md-card-area>

      <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-layout md-gutter">
            <div class="md-layout-item">{{evento.creador}}</div>
            <div class="md-layout-item">Precio estimado:{{evento.preu}}€</div>
            <div class="md-layout-item">{{evento.direccio}}</div>
      </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary" @click="apuntarse">Apuntame!</md-button>
      </md-card-actions>
    </md-card>
`
};
