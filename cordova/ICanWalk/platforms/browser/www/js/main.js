Vue.use(VueMaterial.default);
Vue.use(VueRouter);
Vue.material.setCurrentTheme('about');
function init(){
  const routes = [
                //{path: '/inbox', name: 'inbox', component: MailListTemplate},
            {path: '/settings', name: 'settings',  component: SettingsTemplate}
            ,{path: '/simplelist', name: 'simplelist', component: SimpleListTemplate}
            ,{path: '/inicio', name: 'inicio', component: InicioTemplate}
            ,{path: '/perfil', name: 'perfil', component: PerfilTemplate}
            ,{path: '/mapa', name: 'mapa', component: MapaTemplate}
            ,{path: '/tienda', name: 'tienda', component: TiendaTemplate}
            ,{path: '/calendario', name: 'calendario', component: CalendarioTemplate}
            ,{path: '/contactos', name: 'contactos', component: ContactosTemplate}
            ,{path: '/configuracion', name: 'configuracion', component: ConfiguracionTemplate}
            ,{path: '/feedback', name: 'feedback', component: FeedbackTemplate}
            ];

        const router = new VueRouter({
                routes // short for `routes: routes`
            });

    const app = new Vue({
        el: '#app',
        router,
        data: { showNavigation: false,
                showSidepanel: false,
              message: 'navigation'},
        methods: {
            goToInbox: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('inbox');
                },
            goToSettings: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push({ name: 'settings'})
                },
            goToSimpleList: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('simplelist');
                },
            goToInicio: function(){
                this.showNavigation = false;
                router.push('inicio');
            },
            goToPerfil: function(){
              this.showNavigation = false;
              router.push('perfil');
            },
            goToMapa: function(){
              this.showNavigation = false;
              router.push('mapa');
            },
            goToTienda: function(){
              this.showNavigation = false;
              router.push('tienda');
            },
            goToCalendario: function(){
              this.showNavigation = false;
              router.push('calendario');
            },
            goToContactos: function(){
              this.showNavigation = false;
              router.push('contactos');
            },
            goToConfiguracion: function(){
              this.showNavigation = false;
              router.push('configuracion');
            },
            goToFeedback: function(){
              this.showNavigation = false;
              router.push('feedback');
            }
        }

      }).$mount('#app');

    //router.push('settings');
    router.push({ name: 'settings'})
}
