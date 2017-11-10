<template>
<body class="w3-content w3-black" style="max-width:1500px;">
<!-- Header with Slideshow -->
<header class="w3-display-container w3-center">
  <div class="mySlides w3-animate-opacity" style="display: block">
    <img class="w3-image" src="/static/app_image_2.jpg" alt="Image 1" style="min-width:500px" width="1500" height="1000">
    <div class="w3-display-left w3-padding w3-hide-small" style="width:35%">
      <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
        <h1 class="w3-xlarge">An App to make friends.</h1>
        <hr class="w3-opacity">
        <p>Get together in the real world!</p>
        <p><button class="w3-button w3-block w3-red w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i></i></button></p>
      </div>
    </div>
    <!--That appears only when app in mobile-->
    <div class="w3-display-left w3-padding w3-hide-large w3-hide-medium" style="width:100%">
      <div class="w3-black w3-opacity w3-hover-opacity-off w3-round-large">
        <h1 class="w3-xlarge">An App to make friends.</h1>
        <hr class="w3-opacity">
        <p class="w3-text-small">Get together in the real world!</p>
        <p><button class="w3-button w3-block w3-red w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i></i></button></p>
      </div>
    </div>
  </div>
  <div class="mySlides w3-animate-opacity">
    <img class="w3-image" src="/static/app_image_1.jpg" alt="Image 2" style="min-width:500px" width="1500" height="1000">
    <div class="w3-display-left w3-padding w3-hide-small" style="width:35%">
      <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
        <h1 class="w3-xlarge w3-text-red">An App to grow your circle.</h1>
        <hr class="w3-opacity">
        <p>Meet new friends around you!</p>
        <p><button class="w3-button w3-block w3-red w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i></i></button></p>
      </div>
    </div>
    <div class="w3-display-left w3-padding w3-hide-large w3-hide-medium" style="width:100%">
      <div class="w3-black w3-opacity w3-hover-opacity-off w3-round-large">
        <h1 class="w3-xlarge w3-text-red">An App to grow your circle.</h1>
        <hr class="w3-opacity">
        <p>Meet new friends around you!</p>
        <p><button class="w3-button w3-block w3-red w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i></i></button></p>
      </div>
    </div>
  </div>
  <div class="mySlides w3-animate-opacity">
    <img class="w3-image" src="/static/app_image_3.jpg" alt="Image 3" style="min-width:500px" width="1500" height="1000">
    <div class="w3-display-left w3-padding w3-hide-small" style="width:35%">
      <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
        <h1 class="w3-xlarge">What makes you tick?</h1>
        <hr class="w3-opacity">
        <p>Find people that like the same as you!</p>
        <p><button class="w3-button w3-block w3-indigo w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i></i></button></p>
      </div>
    </div>
    <div class="w3-display-left w3-padding w3-hide-large w3-hide-medium" style="width:100%">
      <div class="w3-black w3-opacity w3-hover-opacity-off w3-round-large">
        <h1 class="w3-xlarge">What makes you tick?</h1>
        <hr class="w3-opacity">
        <p>Find people that like the same as you!</p>
        <p><button class="w3-button w3-block w3-indigo w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i></i></button></p>
      </div>
    </div>
  </div>
  <a class="w3-button w3-block w3-red w3-hide-large w3-hide-medium" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i></i></a>
  <a class="w3-button w3-black w3-display-right w3-margin-right w3-round w3-hide-small w3-hover-light-grey" v-on:click="plusDivs(1)">Take Tour <i class="fa fa-angle-right"></i></a>
  <a class="w3-button w3-block w3-black w3-hide-large w3-hide-medium" v-on:click="plusDivs(1)">Take Tour <i class="fa fa-angle-right"></i></a>
</header>

<!-- The App Section -->
<div class="w3-padding-64 w3-white" style="display: block">
  <div class="w3-row-padding">
    <div class="w3-col l6 m6">
      <h1 class="w3-xxxlarge w3-text-red"><b>Why Broodcast?</b></h1>
      <p class="w3-large" >Use our mobile app for easy social discovery, to meet new people and build friendships in the real world.</p>
      <button class="w3-button w3-light-grey w3-padding-large w3-section w3-hide-small" onclick="document.getElementById('download').style.display='block'">
        <i class="fa fa-download"></i> Download Application
      </button>
      <p>Available for <i class="fa fa-android w3-xlarge w3-text-red"></i> <i class="fa fa-apple w3-xlarge w3-text-red"></i></p>
    </div>
    <div class="w3-col l6 m6">
      <img src="/static/why_image.jpg" class="w3-image w3-right w3-hide-small">
      <div class="w3-center w3-hide-large w3-hide-medium">
        <button class="w3-button w3-block w3-padding-large" onclick="document.getElementById('download').style.display='block'">
          <i class="fa fa-download"></i> Download Application
        </button>
        <img src="/static/why_image.jpg" class="w3-image w3-margin-top" width="471" height="471">
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="download" class="w3-modal w3-animate-opacity">
  <div class="w3-modal-content" style="padding:32px">
    <div class="w3-container w3-white">
      <i onclick="document.getElementById('download').style.display='none'" class="fa fa-remove w3-xlarge w3-button w3-transparent w3-right w3-xlarge"></i>
      <h2 class="w3-wide">DOWNLOAD</h2>
      <p>Download the app in AppStore or Google Play</p>
      <i class="fa fa-android w3-large"></i> <i class="fa fa-apple w3-large"></i>
      <p><input class="w3-input w3-border" type="text" placeholder="Enter e-mail"></p>
      <button type="button" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom" onclick="document.getElementById('download').style.display='none'">Download</button>
    </div>
  </div>
</div>

<!-- Clarity Section -->
<div class="w3-padding-64 w3-light-grey">
  <div class="w3-row">
    <div class="w3-col s6 m6 w3-center">
      <img class="w3-image w3-margin-left w3-round-large w3-hide-small" src="/static/app5.png" alt="App" height="471">
    </div>
    <div class="w3-col s6 m6">
      <h1 class="w3-xxlarge w3-margin-top w3-text-red"><b>Local discovery</b></h1>
      <p class="w3-large ww3-margin-top"><span class="w3-xlarge">Our map-based app makes</span> it simpler to interact with people, groups, and find places to go.</p>
    </div>
  </div>
</div>

<!-- Features Section -->
<div class="w3-container w3-padding-64 w3-dark-grey w3-center">
  <h1 class="w3-xxlarge w3-text-white" ><b>Features</b></h1>
  <p>Connecting people with group chat, and a lot of awesome features.</p>

  <div class="w3-row" style="margin-top:64px">
    <div class="w3-col s3">
      <i class="fa fa-globe  w3-text-white w3-xxxlarge"></i>
      <p>Explore</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-users w3-text-white w3-xxxlarge"></i>
      <p>NewsFeed</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-comment w3-text-white w3-xxxlarge"></i>
      <p>Chat</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-comments w3-text-white w3-xxxlarge"></i>
      <p>Groups</p>
    </div>
  </div>

  <div class="w3-row" style="margin-top:64px">
    <div class="w3-col s3">
      <i class="fa fa-calendar w3-text-white w3-xxxlarge"></i>
      <p>Meetups</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-address-book w3-text-white w3-xxxlarge"></i>
      <p>Friends</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-heart w3-text-white w3-xxxlarge"></i>
      <p>Favorite Places</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-user w3-text-white w3-xxxlarge"></i>
      <p>Profile</p>
    </div>
  </div>
  <!--Section disabled
  <div v-if="false" class="w3-row" style="margin-top:64px">
    <div class="w3-col s3">
      <i class="fa fa-user w3-text-sand w3-jumbo"></i>
      <p>Safe</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-shield w3-text-orange w3-jumbo"></i>
      <p>Stabile</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-wifi w3-text-grey w3-jumbo"></i>
      <p>Connected</p>
    </div>
    <div class="w3-col s3">
      <i class="fa fa-image w3-text-pink w3-jumbo"></i>
      <p>HD</p>
    </div>
  </div>-->
</div>

<!--Section discabled -->
<!-- Pricing Section -->
<!--
<div v-if="false" class="w3-padding-64 w3-center w3-white">
  <h1 class="w3-jumbo"><b>Pricing</b></h1>
  <p class="w3-large">Choose a pricing plan that fits your needs.</p>
  <div class="w3-row-padding" style="margin-top:64px">
    <div class="w3-half w3-section">
      <ul class="w3-ul w3-card w3-hover-shadow">
        <li class="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
        <li class="w3-padding-16"><b>250</b> Photos</li>
        <li class="w3-padding-16"><b>10</b> Features</li>
        <li class="w3-padding-16"><b>No</b> Ads</li>
        <li class="w3-padding-16"><b>Office hours</b> Support</li>
        <li class="w3-padding-16">
          <h2 class="w3-opacity">$ 25</h2>
        </li>
        <li class="w3-light-grey w3-padding-24">
          <button class="w3-button w3-black w3-padding-large" onclick="document.getElementById('download').style.display='block'"><i class="fa fa-download"></i> Download</button>
        </li>
      </ul>
    </div>
    <div class="w3-half w3-section">
      <ul class="w3-ul w3-card w3-hover-shadow">
        <li class="w3-red w3-xlarge w3-padding-32">Premium</li>
        <li class="w3-padding-16"><b>1000</b> Photos</li>
        <li class="w3-padding-16"><b>50</b> Features</li>
        <li class="w3-padding-16"><b>No</b> Ads</li>
        <li class="w3-padding-16"><b>Endless</b> Support</li>
        <li class="w3-padding-16">
          <h2 class="w3-opacity">$ 99</h2>
        </li>
        <li class="w3-light-grey w3-padding-24">
          <button class="w3-button w3-black w3-padding-large" onclick="document.getElementById('download').style.display='block'"> <i class="fa fa-download"></i> Download</button>
        </li>
      </ul>
    </div>
  </div>
  <br>
</div>-->
<!-- Footer -->

<footer class="w3-container w3-padding-32 w3-light-grey w3-center w3-xlarge">
  <div class="w3-section">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>

  <p class="w3-medium w3-hover-opacity"  href="" style="cursor: pointer" >Privacy Policy</p>
  <p class="w3-medium w3-hover-opacity"  href="" style="cursor: pointer">Term of use</p>
  <p class="w3-medium w3-hover-opacity"  href="" style="cursor: pointer">About Us</p>
  <p class="w3-medium w3-hover-opacity"  href="" style="cursor: pointer">Contact Us</p>
  <p class="w3-medium">Copyright 2017 Broodcast Inc</a></p>

<!-- Template taken from https://www.w3schools.com/w3css/tryw3css_templates_app_launch.htm-->
  </footer>
</body>
</template>

<script>

  export default {

    data  () {
      return {
        slideIndex: 1
      }
    },

    methods: {
        showDivs (n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {this.slideIndex = 1}
          if (n < 1) {this.slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";
          }
         return  x[this.slideIndex-1].style.display = "block";
        },

        plusDivs (i) {
         return this.showDivs(this.slideIndex += i);
        }
    },
  }
</script>

<style scoped>

body,h1,h2,h3,h4,h5 {font-family: "Poppins", sans-serif}

body {font-size: 16px;}
img {margin-bottom: -8px;}
.mySlides {display: none}

</style>
