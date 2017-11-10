<template>
 <v-container>
   <v-layout  row v-if="isLoading">
     <v-flex x12 class="text-xs-center">
        <v-progress-circular
         indeterminate
         color="purple">
       </v-progress-circular>
     </v-flex>
   </v-layout>
   <v-layout row wrap v-else>
     <v-flex xs12>
       <v-card>
         <v-card-title>
          <h6 class="primary--text">
              {{meetup.title}}
          </h6>
          <template v-if="isOwner">
            <v-spacer></v-spacer>
            <app-edit-meetup :meetup="meetup"></app-edit-meetup>
          </template>
         </v-card-title>
         <v-card-media
              :src="meetup.imageUrl"
              height="400px"
            ></v-card-media>
            <v-card-text>
              <div class="info--text">{{meetup.date | date}} - {{meetup.location}}</div>
              <div>
                <app-edit-meetup-date :meetup="meetup" v-if="isOwner"></app-edit-meetup-date>
                <app-edit-meetup-time :meetup="meetup" v-if="isOwner"></app-edit-meetup-time>
               </div>
              <div>{{meetup.description}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            <app-register-dialog v-if="userIsAuthenticated && !isOwner" :meetupId="meetup.id"></app-register-dialog>
            </v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id);
    },
    isOwner () {
      if(!this.userIsAuthenticated){
        return false;
      }
      return this.$store.getters.user.id === this.meetup.owner;
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    },
    isLoading () {
      return this.$store.getters.isLoading;
    }
  }
}
</script>

<style>

</style>
