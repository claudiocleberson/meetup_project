// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import App from './App'
import VueI18n from 'vue-i18n'
import  * as FireBase from 'firebase'
import router from './router'
import { store } from './store/index'
import DateFilter from './Filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetup from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDate from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTime from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'
import messages from './locale/locale'


Vue.use(Vuetify);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pt-BR',
  messages,
});

Vue.filter('date', DateFilter);
Vue.config.productionTip = false;
Vue.component('app-alert', AlertCmp);
Vue.component('app-edit-meetup', EditMeetup);
Vue.component('app-edit-meetup-date', EditMeetupDate);
Vue.component('app-edit-meetup-time', EditMeetupTime);
Vue.component('app-register-dialog', RegisterDialog);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
    created() {
    var config = {
     apiKey: 'AIzaSyCveXdlHaNDxyMVHqFQu5tiWKppD7DgYIg',
     authDomain: 'vuejs-http-b0979.firebaseapp.com',
     databaseURL: 'https://vuejs-http-b0979.firebaseio.com',
     projectId: 'vuejs-http-b0979',
     storageBucket: 'gs://vuejs-http-b0979.appspot.com',
     messagingSenderId: '714668037501'
   };
   FireBase.initializeApp(config);

   FireBase.auth().onAuthStateChanged((user)=>{
     if(user){
       this.$store.dispatch('autoSignIn', user);
       this.$store.dispatch('fetchUserData');
     }
   });

   this.$store.dispatch('loadMeetups');
  }
});
