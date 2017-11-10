<template>
  <v-container>
    <v-layout  row wrap>
      <v-flex xs12 sm10 md10  offset-sm1 offset-md1>
          <v-card class="info mb-2" v-for="meetup in meetups" :key="meetup.id" >
            <v-container fluid>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-card-media
                       :src="meetup.imageUrl"
                       height="130px"
                     ></v-card-media>
                </v-flex>
                <v-flex xs7 sm8 md9>
                  <v-card-title primary-title>
                    <div>
                      <h6 class="white--text mb-1" >{{meetup.title}}</h6>
                      <div>{{meetup.date | date}}</div>
                      <div>{{meetup.description}} </div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat :to="'/meetup/' + meetup.id">
                      <v-icon left light>arrow_forward</v-icon>
                      Details</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    }
  }
}
</script>

<style>

</style>
