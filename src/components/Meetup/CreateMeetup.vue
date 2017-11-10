<template>
<v-container>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <h4 class="primary--text">Create a New Meetup</h4>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex xs12>
      <form @submit.prevent="onCreateMeetup">
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="title"
              required>
              </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="location"
              label="Location"
              id="location"
              v-model="location"
              required>
              </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked">
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="200">
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
              name="description"
              label="Descrition"
              id="descrition"
              v-model="description"
              required
              multi-line
              row="3">
              </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <h6>Choose a Date and Time</h6>
          </v-flex>
        </v-layout>
        <v-layout row class="mb-3">
          <v-flex xs12 sm6 offset-sm3>
          <v-time-picker format="24hr" v-model="time"></v-time-picker>
        </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-date-picker v-model="date"></v-date-picker>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-btn
                  class="primary"
                  type="submit"
                  :disabled="!formIsValid">
              Create meetup
            </v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: new Date(),
        time: new Date(),
        image: null
      }
    },
    computed: {
      formIsValid () {
        return this.title !== ''
        && this.location !== ''
        && this.imageUrl !== ''
        && this.description !== '';
      },
      submitableDateTime () {
        var date = new Date(this.date);
        if(typeof this.time === 'string')
        {
          const hours = this.time.split(':')[0];
          const minutes = this.time.split(':')[1];
          date.setHours(Number(hours));
          date.setMinutes(Number(minutes));
        }else{
          date.setHours(Number(this.time.getHours()));
          date.setMinutes(Number(this.time.getMinutes()));
        }

        return date;
      }
    },
    methods: {
      onCreateMeetup () {
        if(!this.formIsValid || !this.image)
        {
          return;
        }
        const meetup = {
          title: this.title,
          location: this.location,
          image: this.image,
          description: this.description,
          date: this.submitableDateTime,
        };

        this.$store.dispatch('createMeetup', meetup);
        this.$router.push('/meetups');
      },
      onPickFile () {
        //that method is simulate a click on Input of type 'file';
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files;
        let fileName = files[0].name;
        if(fileName.lastIndexOf('.') <= 0){
          return alert('Please add a valid file!');
        }
        const fileReader = new FileReader();
        fileReader.addEventListener('load', ()=>{
          this.imageUrl = fileReader.result;
        })
        fileReader.readAsDataURL(files[0]);
        this.image = files[0];
      }
    }
}
</script>

<style>

</style>
