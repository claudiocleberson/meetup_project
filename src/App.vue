<template>
  <v-app light style="overflow: hidden">
    <v-navigation-drawer  temporary v-model="sideNav">
      <v-list >
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onLogout" v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dark
      dense
      v-if="false"
      :style="isHome ? 'background-color:rgba(0, 0, 0, 0.2)' : ''"
      :class="!isHome ? 'primary' : ''"
      :absolute="isHome ? true : false"
      :flat="isHome"
      >
    <v-toolbar-side-icon
      @click.stop="sideNav = !sideNav" class="hidden-sm-and-up">
    </v-toolbar-side-icon>
       <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            Broodcast
          </router-link>
       </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="item in menuItems"
                 :key="item.title"
                 :to="item.link">
            <v-icon left>{{item.icon}}</v-icon>
            </v-btn>
            <v-btn v-if="userIsAuthenticated" flat @click="onLogout">
              <v-icon left>exit_to_app</v-icon>
              Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
       <main >
         <keep-alive>
         <router-view></router-view>
       </keep-alive>
    </main>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      isHome: true
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'face', title: 'Sign Up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'}
      ];
      if(this.userIsAuthenticated) {
        menuItems = [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
          {icon: 'person', title: 'Profile', link: '/profile'},
        ];
      }
      return menuItems;
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    },
  },
  watch: {
    '$route': function(value) {
     let current = this.$route.name;
      if(current == 'Home')
      {
        this.isHome = true;

      }else{
        this.isHome = false;
      }
      console.log(this.$route.name);
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  },
  created () {
      this.$i18n.locale = navigator.language;
  }
}
</script>
