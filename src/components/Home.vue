<template>
  <v-container>
    <v-layout class="mt-5 pt-5 mb-1"  row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row v-if="isLoading">
      <v-flex x12 class="text-xs-center">
         <v-progress-circular
          indeterminate
          :width="4"
          :size="70"
          color="purple">
        </v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="!isLoading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
           <v-carousel-item
           v-for="(item,i) in meetups"
           v-bind:src="item.imageUrl"
           @click="onLoadMeetup(item.id)"
           :key="i">
            <div name="title" class="title">{{item.title}}</div>
           </v-carousel-item>
         </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout class="mt-1" row wrap>
      <v-flex xs12  class="text-xs-center">
        <p>Join Our Awesome Meetup!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups  () {
      return this.$store.getters.featuredMeetups;
    },
    isLoading () {
      return this.$store.getters.isLoading;
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetup/' + id);
    }
  }
}
</script>

<style scoped>
.title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 15px;
  }
</style>
