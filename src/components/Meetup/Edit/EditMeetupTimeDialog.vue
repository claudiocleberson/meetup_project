<template>
  <v-dialog  persistent max-width="400px" v-model="editDialog">
    <v-btn accent slot="activator"><v-icon>schedule</v-icon></v-btn>
    <v-card style="width: 100%">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>
              Edit Time
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex xs12>
              <v-time-picker v-model="editableTime" style="width: 100%" actions format="24hr">
                <template slot-scope="{save, cancel}">
                  <v-btn class="blue--text darken-1"
                        flat
                        @click.native="editDialog = false">Close</v-btn>
                  <v-btn class="blue--text darken-1"
                        flat
                        @click.native="onSaveChanges">Save</v-btn>
                </template>
              </v-time-picker>
            </v-flex>
          </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
        editDialog: false,
        editableTime: null,
        meetupDateTime: null
    }
  },
  methods: {
    onSaveChanges () {
      const newTime = this.editableTime;
      if(typeof newTime == 'string')
      {
        const hours = this.editableTime.split(':')[0];
        const minutes = this.editableTime.split(':')[1];
        this.meetupDateTime.setHours(Number(hours));
        this.meetupDateTime.setMinutes(Number(minutes));
        console.log(this.meetupDateTime);
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          date: this.meetupDateTime
        });
      }
    }
  },
  created() {
    this.editableTime = new Date(this.meetup.date);
    this.meetupDateTime = new Date(this.meetup.date);
  }
}
</script>

<style>
</style>
