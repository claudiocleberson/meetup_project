import * as FireBase from 'firebase'

export default {
  state: {
    loadedMeetups: [
        {
          imageUrl: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg',
          id: '1lkjlfjl923900',
          description: '',
          location: 'New York',
          title: 'Meetu in New York',
          date: new Date(),
          owner: ''
        },
        {
          imageUrl: 'https://assets3.thrillist.com/v1/image/1687992/size/tmg-article_default_mobile.jpg',
          id: '1lkjlfjl923904',
          description: '',
          location: 'Chicago',
          title: 'Meetu Chicago',
          date: new Date(),
          owner: ''
        },
        {
          imageUrl: 'http://www.essexinn.com/d/essexinn/media/Attractions/3583017878_ee2e8e3d8b_b_1423674445483.jpg',
          id: '1lkjlfjl923905',
          description: '',
          location: 'San Francisco',
          title: 'Meetu San Francisco',
          date: new Date(),
          owner: ''
        }
    ]
  },
  mutations: {
    registerUserForMeetup (state, payload) {
      const id = payload.id;
      if(state.user.registeredMeetups.findIndex(meetup => meetup.id == id) >= 0)
      {
        return
      }
      state.user.registeredMeetups.push(id);
      state.user.fbKeys[id] = payload.fbKey;
    },
    unregisterUserFromMeetup (state, payload) {
      const registeredMeetups = state.user.registeredMeetups;
      registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1);
      Reflect.deleteProperty(state.user.fbKeys, payload);
    },
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload;
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload);
    },
    updateMeetup (state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id;
      });
      if(payload.title) {
        meetup.title = payload.title;
      }
      if(payload.description){
        meeupt.description = payload.description;
      }
      if(payload.date){
        meetup.date = payload.date;
      }
    }
  },
  actions: {

    loadMeetups ({commit}) {
      commit('setLoading', true);
      FireBase.database().ref('meetups').once('value')
        .then((data)=>{
          const meetups = [];
          const obj =  data.val();
          for (let key in obj){
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              location: obj[key].location,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              owner: obj[key].owner
            });
          }
          commit('setLoadedMeetups',meetups);
          commit('setLoading', false);
        })
        .catch(
          (error)=>{
            console.log(error);
            commit('setLoading', false);
          }
        );
    },
    createMeetup ({commit, getters}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        owner: getters.user.id
      };
      var imageUrl;
      var key;
      //Creates the Meetup in the database in 3 steps
      //Step1
      FireBase.database().ref('meetups').push(meetup)
              .then((data)=> {
               key = data.key;
               return key;
              })
              //Step2: upload the image
              .then(key => {
                const filename = payload.image.name;
                const ext = filename.slice(filename.lastIndexOf('.'));
                return FireBase.storage().ref('meetups/' + key +'.'+ext).put(payload.image);
              })
              //Step3: extract the Image url and Update the Meetup imageUrl property
              .then(fileData => {
                imageUrl = fileData.metadata.downloadURLs[0];
                return FireBase.database().ref('meetups').child(key).update({imageUrl: imageUrl});
              })
              //Commit the image to the local state(vuex)
              .then(()=>{
                commit('createMeetup', {
                  ...meetup,
                  imageUrl: imageUrl,
                  id: key
                });
              })
              .catch((error)=>{
                console.error(error);
              });
      //Reach out to fire base and store it;
    },
    updateMeetupData ({commit}, payload) {
      commit('setLoading', true);
      const updateObj = {};
      if(payload.title) {
        updateObj.title = payload.title;
      }
      if(payload.description){
        updateObj.description = payload.description;
      }
      if(payload.date){
        updateObj.date = payload.date;
      }
      FireBase.database().ref('meetups').child(payload.id).update(updateObj)
              .then(()=>{
                commit('setLoading', false);
                commit('updateMeetup', payload);
              })
              .catch((error)=>{
                console.log(error);
                commit('setLoading', false);
              });
    },
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB)=>{
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup)=>{
          return meetup.id === meetupId;
        });
      }
    },
  }
};
