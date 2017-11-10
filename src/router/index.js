import Vue from 'vue'
import Router from 'vue-router'
import LandPage from '@/components/Landpage/LandPage.vue'
import Home from '@/components/Home.vue'
import CreateMeetup from '@/components/Meetup/CreateMeetup.vue'
import Meetups from '@/components/Meetup/Meetups.vue'
import Profile from '@/components/User/Profile.vue'
import SignUp from '@/components/User/SignUp.vue'
import SignIn from '@/components/User/SignIn.vue'
import Meetup from '@/components/Meetup/Meetup.vue'
import Privacy from '@/components/TermPrivacy/privacy.vue'
import Terms from '@/components/TermPrivacy/term.vue'
import AuthGuard from './auth-guard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landpage',
      name: 'Landpage',
      component: LandPage
    },
    {
      path: '/',
      name: 'Home',
      component: LandPage
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/term',
      name: 'Term',
      component: Terms
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      beforeEnter: AuthGuard,
      component: CreateMeetup
    },
    {
      path: '/meetup/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      beforeEnter: AuthGuard,
      component: Profile
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ],
  mode: 'history'
})
