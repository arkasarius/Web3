const InicioTemplate = {
props: [],
template:
`
<md-list>

<md-list-item @click="goToEventos()">
  <md-icon>list</md-icon>
  <span class="md-list-item-text">Eventos</span>
</md-list-item>

<md-list-item @click="goToMapa()">
  <md-icon>map</md-icon>
  <span class="md-list-item-text">Mapa</span>
</md-list-item>

<md-list-item @click="goToTienda()">
  <md-icon>shopping_cart</md-icon>
  <span class="md-list-item-text">Tienda</span>
</md-list-item>

<md-list-item @click="goToCalendario()">
  <md-icon>today</md-icon>
  <span class="md-list-item-text">Calendario</span>
</md-list-item>

<md-list-item @click="goToContactos()">
  <md-icon>contacts</md-icon>
  <span class="md-list-item-text">Contactos</span>
</md-list-item>

<md-list-item @click="goToConfiguracion()">
  <md-icon>settings</md-icon>
  <span class="md-list-item-text">Configuración</span>
</md-list-item>

<md-list-item @click="goToFeedback()">
  <md-icon>feedback</md-icon>
  <span class="md-list-item-text">Feedback</span>
</md-list-item>
</md-list>
`,
methods:{
  goToMapa: function(){
      this.$router.push('mapa');
      //console.log("Debug test");
  },
  goToTienda: function(){
      this.$router.push('tienda');
  },
  goToCalendario: function(){
      this.$router.push('calendario');
  },
  goToContactos: function(){
      this.$router.push('contactos');
  },
  goToConfiguracion: function(){
      this.$router.push('configuracion');
  },
  goToFeedback: function(){
      this.$router.push('feedback');
  },
  goToEventos: function(){
      this.$router.push('eventos');
  }
}
};
