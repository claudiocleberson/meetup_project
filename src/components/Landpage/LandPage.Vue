<template>
  <body data-spy="scroll" data-target=".navbar-collapse">
         <!-- Preloader - Disabled -->
         <div  id="loading">
               <div id="loading-center">
                   <div id="loading-center-absolute">
                       <div class="object" id="object_one"></div>
                       <div class="object" id="object_two"></div>
                       <div class="object" id="object_three"></div>
                       <div class="object" id="object_four"></div>
                   </div>
               </div>
           </div><!--End off Preloader -->

         <div class="culmn">
             <!--Home page style-->
             <nav class="navbar navbar-default bootsnav navbar-fixed no-background">
                 <div class="container">
                   <!-- Start Atribute Navigation -->
                     <div class="attr-nav">
                         <ul>
                             <li ><a href="https://www.facebook.com/broodcastapp/"><i class="fa fa-facebook"></i></a></li>
                             <li ><a href="https://twitter.com/Broodcastapp/"><i class="fa fa-twitter"></i></a></li>
                             <li ><a href="#"><i class="fa fa-instagram"></i></a></li>
                         </ul>
                     </div>
                     <!-- End Atribute Navigation -->


                     <!-- Start Header Navigation -->
                     <div class="navbar-header text-center">
                         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                             <i class="fa fa-bars"></i>
                         </button>
                         <ul class="nav navbar-brand navbar-nav navbar-center">
                             <li><a href="/" class="logo" style="border-bottom: none; font-style: bold; font-size: 22px;" alt="">{{$t('messages.siteBrand')}}</a></li>
                         </ul>
                     </div>
                     <!-- End Header Navigation -->

                     <!-- navbar menu -->
                     <div class="collapse navbar-collapse" id="navbar-menu">
                         <ul class="nav navbar-nav navbar-center">
                             <li><a href="#home">{{$t('messages.home')}}</a></li>
                             <li><a href="#features">{{$t('messages.features')}}</a></li>
                             <li><a href="#download">{{$t('messages.download')}}</a></li>
                         </ul>
                     </div><!-- /.navbar-collapse -->
                 </div>
             </nav>

             <!--Home Sections-->

             <section id="home" class="home">
                 <div class="container">
                     <div class="row">
                         <div class="main_home">
                             <div class="col-md-6">
                                 <div class="home_text text-center">
                                     <h1 class="text-white">{{$t('messages.valueP1')}}</h1>
                                 </div>

                                 <div class="home_btns m-top-40 m-bottom-20 text-center">
                                     <a href="" target="_blank" style="background-color: #fc6a42 " class=" btn btn-danger m-top-20"><i class="p-r-15 fa fa-apple"></i>{{$t('messages.download')}}</a>
                                     <a href="" class="btn-primary btn m-top-20" style="background-color: #4466c9 "><i class="p-r-15 fa fa-android"></i>{{$t('messages.download')}}</a>
                                 </div>
                             </div>

                             <div class="col-md-6">
                                 <div class="phone_one phone_attr1 text-center sm-m-top-50">
                                     <div class="attr_deg"><a class="scrollto" href="#maparea"><i style="color: gray" class="fa fa-map"></i></a></div>
                                     <div class="attr_rio text-uppercase"><a class="scrollto" href="#chatarea"> <i class="fa fa-comment" style="font-size: 20px; color: gray"></i></a></div>
                                     <div class="attr_sun text-uppercase text-white"><a class="scrollto" href="#chatarea"><i class="fa fa-comments m-top-30" style="font-size: 30px; color: white"></i></a></div>
                                     <div class="attr_lon text-uppercase text-white"><a class="scrollto" href="#meetuparea"><i class="fa fa-calendar m-top-30" style="font-size: 30px; color: white"></i></a></div>
                                     <img v-bind:src="$t('images.homeImage')" alt="" />
                                 </div>
                             </div>

                         </div>
                         <div>
                             <a class="scrooldown" href="#features"><i class="fa fa-chevron-down"></i></a>
                         </div>
                     </div><!--End off row-->
                 </div><!--End off container -->
             </section> <!--End off Home Sections-->



             <!--Featured Section-->
             <section id="features" class="features">
                 <div class="container">
                     <div class="row">
                         <div class="main_features p-top-100">
                             <div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                                 <div class="head_title text-center">
                                     <h2>{{$t('messages.whyBroodcast')}}</h2>
                                     <h5>{{$t('messages.whyBroodcastMsg')}}</h5>
                                 </div>
                             </div>

                             <div class="col-md-4">
                                 <div class="features_item sm-m-top-30">
                                     <div class="f_item_icon">
                                         <i class="icon icon-chat"></i>
                                     </div>
                                     <div class="f_item_text">
                                         <h3 class="p-l-15">{{$t('messages.chat')}}</h3>
                                         <p class="p-l-15">{{$t('messages.chatMsg')}}</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="features_item sm-m-top-30">
                                     <div class="f_item_icon">
                                         <i class="icon icon-cup"></i>
                                     </div>
                                     <div class="f_item_text">
                                         <h3 class="p-l-15" >{{$t('messages.meetups')}}</h3>
                                         <p class="p-l-15">{{$t('messages.meetupsMsg')}}</p>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-md-4">
                                 <div class="features_item sm-m-top-30">
                                     <div class="f_item_icon">
                                         <i class="icon icon-people-32"></i>
                                     </div>
                                     <div class="f_item_text">
                                         <h3 class="p-l-15" >{{$t('messages.makeFriends')}}</h3>
                                         <p class="p-l-15">{{$t('messages.makeFriendsMsg')}}</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div><!-- End off row -->
                 </div><!-- End off container -->
             </section><!-- End off Featured Section-->

             <section>
                 <div class="container">
                     <div class="row">
                         <div class="main_drag roomy-50">
                             <div class="col-md-12">
                                 <div class="swiper-container">
                                     <div class="swiper-wrapper">
                                         <div class="swiper-slide">
                                           <img v-bind:src="$t('images.galleryImage1')" alt="">
                                         </div>
                                         <div class="swiper-slide">
                                           <img v-bind:src="$t('images.galleryImage2')" alt="">
                                         </div>
                                         <div class="swiper-slide">
                                           <img v-bind:src="$t('images.galleryImage3')" alt="">
                                         </div>
                                     </div>
                                     <!-- If we need navigation buttons -->
                                     <div class="swiper-button-prev"></div>
                                     <div class="swiper-button-next"></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>



             <!--screen short section-->

             <section id="screen_area" class="screen_area">
                 <div class="container">
                     <div class="row">
                         <div class="main_screen">
                             <div class="col-md-8 col-md-offset-2 col-sm-12">
                                 <div class="head_title text-center">
                                     <h2>{{$t('messages.screenshots')}}</h2>
                                     <h5></h5>
                                 </div>
                             </div>

                             <!-- Screen01-->
                             <div id="chatarea" class="screen01 roomy-50">
                                 <div class="col-md-6">
                                     <div class="screen01_img text-center">
                                         <div class="attr_cloudy text-white"><i class="fa fa-comments m-top-30" style="font-size: 30px"></i></div>
                                         <div class="attr_deg2 text-white"><i class="fa fa-address-book m-top-30" style="font-size: 30px"></i></div>
                                         <img v-bind:src="$t('images.chatImage')" alt="" />
                                         <h1 class="hidden cloudy"></h1>
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="screen01_content m-top-100">
                                         <div class="screen01_content_img ">
                                             <i style="color: rgb(106, 90, 205);  opacity: 0.6; font-size: 70px" class="icon icon-chat" aria-hidden="true"></i>
                                         </div>
                                         <h2 class="m-top-40">{{$t('messages.chatFeature')}}</h2>
                                         <p class="m-top-20">{{$t('messages.chatFeatureMsg')}}</p>

                                         <ul class="hidden list-inline m-top-50">
                                             <li class="text-center">95%</li>
                                             <li class="text-center">9 &deg; </li>
                                             <li class="text-center">Rainy</li>
                                         </ul>
                                     </div>
                                 </div>
                             </div><!--End off Screen01-->

                             <!-- Screen02-->
                             <div id="meetuparea" class="screen02 roomy-50 m-top-100">
                                 <div class="col-md-6 col-md-push-6">
                                     <div class="screen02_img text-center">
                                         <div class="attr_sun2 text-white"><i class="fa fa-calendar m-top-30" style="font-size: 30px"></i></div>
                                         <div class="attr_deg3 text-white"><i class="fa fa-cutlery m-top-30" style="font-size: 30px"></i></div>
                                         <img v-bind:src="$t('images.meetupImage')" alt="" />
                                         <h1 class="hidden sunny">Sunny</h1>
                                     </div>
                                 </div>
                                 <div class="col-md-6 col-md-pull-6">
                                     <div class="screen02_content m-top-100">
                                         <div class="screen02_content_img ">
                                             <i style="color: rgb(106, 90, 205);  opacity: 0.6; font-size: 70px" class="icon icon-bear1" aria-hidden="true"></i>
                                         </div>
                                         <h2 class="m-top-40">{{$t('messages.meetupFeature')}}</h2>
                                         <p class="m-top-20">{{$t('messages.meetupFeatureMsg')}}</p>

                                         <ul class=" hidden list-inline m-top-50">
                                             <li class="text-center">95%</li>
                                             <li class="text-center">9 &deg; </li>
                                             <li class="text-center">Rainy</li>
                                         </ul>
                                     </div>
                                 </div>
                             </div><!--End off Screen02-->

                             <!-- Screen03-->

                             <div id="maparea"  class="screen03 roomy-50 m-top-100">
                                 <div class="col-md-6">
                                     <div class="screen03_img text-center">
                                         <div class="attr_rainy2 text-white"><i class="fa fa-globe m-top-30" style="font-size: 30px"></i></div>
                                         <div class="attr_deg4 text-white"><i class="fa fa-users m-top-30" style="font-size: 30px"></i></div>
                                         <img v-bind:src="$t('images.mapImage')" alt="" />
                                     </div>
                                 </div>
                                 <div class="col-md-6">
                                     <div class="screen03_content m-top-100">
                                         <div class="screen03_content_img ">
                                             <i style="color: rgb(106, 90, 205); opacity: 0.6; font-size: 70px" class="icon icon-map2" aria-hidden="true"></i>
                                         </div>
                                         <h2 class="m-top-40">{{$t('messages.mapFeature')}}</h2>
                                         <p class="m-top-20">{{$t('messages.mapFeatureMsg')}}</p>

                                         <ul class="hidden list-inline m-top-50">
                                             <li class="text-center">95%</li>
                                             <li class="text-center">9 &deg; </li>
                                             <li class="text-center">Rainy</li>
                                         </ul>
                                     </div>
                                 </div>
                             </div><!--End off Screen02-->
                          </div>
                     </div><!--End off row-->
                 </div><!--End off container-->
             </section><!--End off Screen01 Area Section -->


            <!--Reviews Section NOT SHOWING-->
             <section id="reviews" class="hidden reviews m-top-100">
                 <div class="container">
                     <div class="row">
                         <div class="main_reviews">
                             <div class="col-md-8 col-md-offset-2 col-sm-12">
                                 <div class="head_title text-center">
                                     <h2>What reviews are saying</h2>
                                     <h5>Reviews</h5>
                                 </div>
                             </div>

                             <div class="reviews_content">
                                 <div class="col-md-6">
                                     <div class="reviews_item m-top-40">
                                         <div class="reviews_item_icon pull-left">“</div>
                                         <h3>What art offers is space - a certain breathing room for the spirit. </h3>
                                         <h5>John Updike</h5>
                                         <div class="reviews_item_icon1 pull-right text-right">“</div>
                                     </div>
                                 </div>
                                 <!-- End off col-md-6 -->

                                 <div class="col-md-6">
                                     <div class="reviews_item m-top-40">
                                         <div class="reviews_item_icon pull-left">“</div>
                                         <h3>We do not see nature with our eyes,
                                             but with our understandings and our hearts.</h3>
                                         <h5>William Hazlitt</h5>
                                         <div class="reviews_item_icon1 pull-right text-right">“</div>
                                     </div>
                                 </div><!-- End off col-md-6 -->
                                 <div class="col-md-6">
                                     <div class="reviews_item m-top-40">
                                         <div class="reviews_item_icon pull-left">“</div>
                                         <h3>The only courage that matters is the kind
                                             that gets you from one moment to the next.</h3>
                                         <h5>Mignon McLaughlin</h5>
                                         <div class="reviews_item_icon1 pull-right text-right">“</div>
                                     </div>
                                 </div><!-- End off col-md-6 -->
                                 <div class="col-md-6">
                                     <div class="reviews_item m-top-40">
                                         <div class="reviews_item_icon pull-left">“</div>
                                         <h3>No man has a good enough memory to be a successful liar. </h3>
                                         <h5>Abraham Lincoln</h5>
                                         <div class="reviews_item_icon1 pull-right text-right">“</div>
                                     </div>
                                 </div><!-- End off col-md-6 -->

                             </div>
                         </div><!-- End off Main People -->
                     </div><!-- End off row -->
                 </div><!-- End off container -->
             </section><!-- End off People Section-->

             <!--App Download Section-->
             <section id="download" class="download m-top-100">
                 <div class="download_overlay"></div>
                 <div class="container">
                     <div class="row">
                         <div class="main_download ">
                             <div class="col-md-6">
                                 <div class="download_item  roomy-20">
                                     <h2 class="text-white">{{$t('messages.downloadApp')}}</h2>
                                     <h5 class="text-white m-top-20">{{$t('messages.downloadAppMsg')}}</h5>

                                     <div class="download_app  text-center">
                                       <a href="" target="_blank" style="background-color: #fc6a42 " class=" btn btn-danger m-top-20"><i class="p-r-15 fa fa-apple"></i>{{$t('messages.download')}}</a>
                                       <a href="" class="btn-primary btn m-top-20" style="background-color: #4466c9 "><i class="p-r-15 fa fa-android"></i>{{$t('messages.download')}}</a>
                                     </div>
                                 </div>
                             </div>
                             <div class="col-md-6">
                                 <div class="download_item">
                                     <img class="app_right" v-bind:src="$t('images.downloadImage')" alt="" />
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>

             <!-- scroll up-->
             <div class="scrollup">
                 <a href="#"><i class="fa fa-chevron-up"></i></a>
             </div><!-- End off scroll up -->

             <footer id="footer" class="footer bg-black">
                 <div class="container">
                     <div class="row">
                         <div class="col-md-12">
                             <nav class="navbar navbar-default bootsnav footer-menu no-background">
                                 <div class="container">

                                     <!-- Start Atribute Navigation -->
                                     <div class="attr-nav">
                                         <ul>
                                           <li ><a href="https://www.facebook.com/broodcastapp/"><i class="fa fa-facebook"></i></a></li>
                                           <li ><a href="https://twitter.com/Broodcastapp/"><i class="fa fa-twitter"></i></a></li>
                                           <li ><a href="#"><i class="fa fa-instagram"></i></a></li>
                                         </ul>
                                     </div>

                                   <!-- footr Header Navigation - Disabled -->
                                     <div class="navbar-header">
                                         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-footer">
                                            <ul>
                                              <li><a><i class="fa fa-bars" style="font-size: 20px"></i></a></li>
                                            </ul>
                                         </button>
                                         <ul class="nav navbar-brand navbar-nav navbar-center" href="#brand">
                                             <li><a class="logo" style="border-bottom: none; font-size: 14px; cursor: pointer" alt="">{{$t('messages.siteBrand')}}</a></li>
                                         </ul>
                                     </div>


                                     <!-- End Header Navigation -->

                                     <!-- navbar menu -->
                                     <div class="collapse navbar-collapse" id="navbar-footer">
                                         <ul class="nav navbar-nav navbar-center">
                                             <li><a href="#home">{{$t('messages.home')}}</a></li>
                                             <li><a href="#features">{{$t('messages.features')}}</a></li>
                                             <li><a href="#download">{{$t('messages.download')}}</a></li>
                                             <li><a href="/privacy">{{$t('messages.privacyPolicy')}}</a></li>
                                             <li><a href="/term">{{$t('messages.termOfUse')}}</a></li>
                                         </ul>

                                    </div><!-- /.navbar-collapse -->
                                    <!--Language selector -->
                                    <div class="text-center">
                                       <select style="cursor: pointer" v-model="$i18n.locale">
                                         <option value="en-US"><p>{{$t('messages.english')}}</p></option>
                                         <option value="pt-BR"><p>{{$t('messages.portuguese')}}</p></option>
                                       </select>
                                    </div>
                                 </div>
                             </nav>
                         </div>
                         <div class="divider"></div>
                         <div class="col-md-12">
                             <div class="main_footer text-center p-top-40 p-bottom-30">
                                 <p class="wow fadeInRight" data-wow-duration="1s">
                                     {{$t('messages.copyRight')}}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </footer>
         </div>
 </body>
</template>

<style scoped>

/*
Author: Xpeedstudio
Author URI: http://xpeedstudio.com
*/

/*==========================================
 01.  PREDIFINEED (FROM 1 TO 780 )
 02.  PRELOADER - LINE NO 786
 03.  NAVIGATION - LINE NO 930
 04.  HOME - LINE NO 1150
 05.  THU FEATURE - LINE NO 1280
 06.  THU FLIDE - LINE NO 1355
 07.  THU SERVICE - LINE NO 1385
 08.  PORTFOLIO - LINE NO 1444
 09.  THU SOLUTION - LINE NO 1620
 10.  THU TEAM - LINE NO 1658
 11.  THU CLIENTS FEEDBACK - LINE NO 1730
 12. THU BLOG - LINE NO 1848
 13. THU SUBCRIBS - LINE NO 1935
 14. FOOTER - LINE NO 2020
==========================================*/


/* ==========================================================================
   Author's custom styles
   ========================================================================== */
html,
body {
    /*background:url(../images/bodybg.png) repayet-y;*/
    background-image: url("../../../static/images/bodybg.png");
    background-repeat: repeat-y;
    font-size: 16px;
    color: #797979;
    width: 100%;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    font-weight: 400;
    width:100%;
    font-family: 'Roboto';
}

/*------------------------------------------------------------------*/
/*   IE10 in Windows 8 and Windows Phone 8 Bug fix
/*-----------------------------------------------------------------*/

@-webkit-viewport { width: device-width; }
@-moz-viewport { width: device-width; }
@-ms-viewport { width: device-width; }
@-o-viewport { width: device-width; }
@viewport { width: device-width; }

/*
    Page Content
------------------------------------------*/

.page-content,
section { overflow: hidden; }

/*
    On Scroll Animations
------------------------------------------*/

/*.animated { visibility: hidden; }
.visible { visibility: visible; }*/

/*
    Spacing & Alignment

------------------------------------------*/
.roomy-100 {
    padding-top: 100px;
    padding-bottom: 100px;
}

.roomy-80 {
    padding-top: 100px;
    padding-bottom: 80px;
}

.roomy-70 {
    padding-top: 100px;
    padding-bottom: 70px;
}

.roomy-60 {
    padding-top: 100px;
    padding-bottom: 60px;
}

.roomy-50 {
    padding-top: 50px;
    padding-bottom: 50px;
}

.roomy-40 {
    padding-top: 40px;
    padding-bottom: 40px;
}

.roomy-30 {
    padding-top: 20px;
    padding-bottom: 20px;
}
.roomy-20 {
    padding-top: 20px;
    padding-bottom: 20px;
}

/*text color*/

.text-muted{}

.text-primary{color: #fc6a42 !important;;}
.text-finence{color:#13A0B2 !important;;}
.text-mega{color:#fc6a42 !important;;}
.text-white{color:#fff !important;;}
.text-black{color:#000 !important;}

.text-warning{}
.text-danger{}

.disabled{
    cursor: not-allowed;
}

/*bacground color*/
.lightbg {
    background-color: #f2f2f2;
}
.bg-primary{background-color: #1E8BC3;}
.bg-finence{background-color:#13A0B2;}
.bg-mega{background-color:#6a6b6c;}
.bg-grey{background-color: #f5f5f5;}
.bg-black{background-color: #353854;}
.bg-white{background-color: #fff;}

img {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -user-select: none;
    -webkit-user-drag: none;
    -user-drag: none;
}
a,
a:hover,
a:active,
a:focus {
    text-decoration: none;
    outline: none;
}
a,
button,
a span {
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
}
a {
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}

.btn:focus,
.btn:active {
    outline: inherit;
    background-color: transparent;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    /*    direction: rtl;*/
}

p {
    margin: 0 0 15px;
}

.clear {
    clear: both;
}

img {
    max-width: 100%;
}
textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"],
.uneditable-input {
    outline: none;
}

input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: transparent;
    background-image: none;
    color: rgb(0, 0, 0);
}

.form-control{
    border-radius: 0px;
    border:1px solid #ccc;
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075);
    width: 100%;
    height: 50px;
}

.form-control:focus {
    border-color: #bcefeb;
    outline: 0;
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075),0 0 0px rgba(102,175,233,.6);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-family: 'Roboto';
    color:#1a1a1a;
    margin-bottom: 10px;
}

h1 {
    font-size: 3rem;
    line-height: 4rem;
}
h2 {
    font-size: 2.5rem;
    line-height: 3rem;
}
h3 {
    font-size: 1.500rem;
    line-height: 2rem;
}
h4 {
    font-size: 1.6rem;
    line-height: 2.2rem;
}
h5 {
    font-size: 1.125rem;
    line-height: 1.575rem
}
h6 {
    font-size: 1rem;
}



h1 span,
h2 span,
h3 span,
h4 span,
h5 span,
p span{
    color:#fc6a42;
}

p {
    line-height: 1.5rem;
}
p:last-child {
    margin-bottom: 0px;
}
/*colors*/
.w100 {
    font-weight: 100;
}

.w200 {
    font-weight: 200;
}

.w300 {
    font-weight: 300;
}

.w400 {
    font-weight: 400;
}

.w500 {
    font-weight: 500;
}

.w600 {
    font-weight: 600;
}

.w700 {
    font-weight: 700;
}

.w800 {
    font-weight: 800;
}


/*
Section
*/

.parallax-section {
    max-width: 100%;
    color: #ffffff;
}

ul{
    margin:0;
    padding:0;
    list-style:none;
}

/*all overlay*/
.overlay_dot{

    background-color: rgba(51,51,51,0.75);
    background-size: cover;
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height: 100%;
}
.home-overlay {
    background-color: rgba(41, 39, 34, 0.90);
    width: 100%;
    height:100%;
    position: absolute;
    left:0;
    top: 0;
}

.video_overlay {
    background-color: rgba(41, 39, 34, 0.80);
    width: 100%;
    height:100%;
    position: absolute;
    left:0;
    top: 0;
}
.download_overlay{
    background: url(../../../static/images/downloadbg.png) repeat-y;
    width:100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
}

.no-padding {
    padding: 0 !important;
    margin:0 !important;
}
.left-no-padding {
    padding-left: 0 !important;
}
.right-no-padding {
    padding-right: 0 !important;
}
.fluid-blocks-col {
    padding: 70px 40px 0 80px;
}
.fluid-blocks-col-right {
    padding: 70px 80px 0 40px;
}


/*
Separator
*/
.separator_left{
    width:85px;
    height:2px;
    margin:20px 0px;
    background: #fc6a42;
}
.separator_auto{
    width:85px;
    height:2px;
    margin:20px auto;
    background: #fc6a42;
}
.separator_small{
    width:30px;
    height:2px;
    margin:20px 0px;
    background: #fc6a42;
}

/*
Button
*/
.btn{
    -webkit-transition: all 0.6s;
    transition: all 0.6s;
    font-size:14px;
    font-weight: 600;
    border:1px solid;
}
.btn-primary{
    color: #fff;
    background-color: #4466c9;
    border:1px solid;
    border-color: #4466c9;
    padding: 1rem 2rem;
}
.btn-primary:hover{
    background-color: #eee;
    border-color: #eee;
    color:#4466c9;

}

.btn-danger{
    color: #fff;
    background-color: #fc6a42;
    border:1px solid;
    border-color: #fc6a42;
    padding: 1rem 2rem;
}

.btn-danger:hover{
    color: #fc6a42;
    background-color: #eee;
    border-color: #eee;
}



/*
socail icon
--------------------------------*/
/*
Extra height css
*/
.m-0{
    margin:0 !important;
}
.m-top-0{
    margin-top:0;
}
.m-r-0{
    margin-right: 0;
}
.m-l-0{
    margin-left: 0;
}
.m-b-0{
    margin-bottom: 0;
}

.m-r-15{
    margin-right: 15px;
}
.m-l-15{
    margin-left: 15px;
}
.m-top-10 {
    margin-top: 10px;
}
.m-top-20 {
    margin-top: 20px;
}
.m-top-30 {
    margin-top: 30px;
}
.m-top-40 {
    margin-top: 40px;
}
.m-top-50 {
    margin-top: 50px;
}
.m-top-60 {
    margin-top: 60px;
}
.m-top-70 {
    margin-top: 70px;
}
.m-top-80 {
    margin-top: 80px;
}
.m-top-90 {
    margin-top: 90px;
}
.m-top-100 {
    margin-top: 100px;
}
.m-top-110 {
    margin-top: 110px;
}
.m-top-120 {
    margin-top: 120px;
}

.m-t-b-80 {
    margin-top: 80px;
    margin-bottom: 80px;
}
.m-t-b-120 {
    margin-top: 120px;
    margin-bottom: 120px;
}

.m-bottom-10 {
    margin-top: 10px;
}

.m-bottom-20 {
    margin-bottom: 20px;
}
.m-bottom-30 {
    margin-bottom: 30px;
}

.m-bottom-40 {
    margin-bottom: 40px;
}

.m-bottom-60 {
    margin-bottom: 60px;
}

.m-bottom-70 {
    margin-bottom: 70px;
}

.m-bottom-80 {
    margin-bottom: 80px;
}

.m-bottom-90 {
    margin-bottom: 90px;
}

.m-bottom-100 {
    margin-bottom: 100px;
}

.m-bottom-110 {
    margin-bottom: 110px;
}

.m-bottom-120 {
    margin-bottom: 120px;
}

.m_t__b{
    margin: 14rem 0;
}
.p_t__b{
    padding: 6rem 0;
}

p-0{
    padding:0 !important;
}

.p-l-15{
    padding-left: 15px;
}

.p-r-15{
    padding-right: 15px;
}

.p-top-10 {
    padding-top: 10px;
}
.p-top-20 {
    padding-top: 1.33rem;
}

.p-bottom-20 {
    padding-bottom: 1.33rem;
}

.p-top-30 {
    padding-top: 1.875rem;
}

.p-bottom-30 {
    padding-bottom: 1.875rem;
}

.p-top-40 {
    padding-top: 2.66rem;
}

.p-bottom-40 {
    padding-bottom: 2.66rem;
}

.p-top-60 {
    padding-top: 5rem;
}

.p-bottom-60 {
    padding-bottom: 5rem;
}

.p-top-80 {
    padding-top: 5.714rem;
}

.p-bottom-80 {
    padding-bottom: 5.714rem;
}

.p-top-90 {
    padding-top: 6.429rem;
}

.p-bottom-90 {
    padding-bottom: 6.429rem;
}
.p-top-100 {
    padding-top: 100px;
}

.p-bottom-100 {
    padding-bottom: 100px;
}
.p-top-110 {
    padding-top: 110px;
}

.p-bottom-110 {
    padding-bottom: 110px;
}

.p-bottom-0 {
    padding-bottom: 0;
}

.p_l_r{
    padding-left: 5.714rem;
    padding-right: 5.714rem;
}

/*padding*/
.padding-twenty {
    padding: 10px 0;
}
.padding-fourty {
    padding: 20px 0;
}
.padding-sixty {
    padding: 30px 0;
}
.padding-eighty {
    padding: 40px 0;
}

/*border*/
.no-border-top{
    border-top:0px solid transparent !important;
}
.no-border-rigth{
    border-right:0px solid transparent !important;
}

/*for placeholder changes*/

input[type="email"].form-control::-webkit-input-placeholder {
    color: #fff;
    background-color: transparent;
}

input::-webkit-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}

input::-moz-placeholder {
    color: #cdcdcd;
    font-style:italic;
}

input:-ms-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}

input::placeholder {
    color: #cdcdcd;
    font-style:italic;
}
input::-webkit-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}
input::-moz-placeholder {
    color: #cdcdcd;
    font-style:italic;
}
input::-ms-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}
textarea::-webkit-input-placeholder{
    color: #cdcdcd;
    font-style:italic;
    padding: 5px;
}
textarea::-moz-input-placeholder{
    color: #cdcdcd;
    font-style:italic;
    padding: 5px;
}
textarea::-ms-input-placeholder{
    color: #cdcdcd;
    font-style:italic;
    padding: 5px;
}

/*for image bg*/
/*.img-bg{
  background: url(../images/home-msg.jpg) no-repeat center top fixed;
  background-size
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  overflow: hidden;
}*/


.transform_scal_rotate:hover img{
    -webkit-transform: scale(1.1) rotate(4deg);
    transform: scale(1.1) rotate(4deg);
}

.culmn{
    width:100%;
    overflow: hidden;
}
/*heading title all area*/
.head_title{
    padding-bottom: 7.143rem;
    overflow: hidden;
}
.head_title h2{
    font-weight: 700;
    font-size:2.250rem;
    color: rgb(106, 90, 205);
}
.head_title h5{
    font-weight: 400;
    font-size:1.125rem;
    color:#999999;
}

/*End off pridifain css*/

/*Preloader*/
#loading{
    background-color: #fc6a42;
    height: 100%;
    width:  100%;
    position: fixed;
    z-index: 1;
    margin-top: 0px;
    top: 0px;
    left:0;
    z-index: 9999;
}
#loading-center{
    width: 100%;
    height: 100%;
    position: relative;
}
#loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 50px;
    width: 50px;
    margin-top: -25px;
    margin-left: -25px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: loading-center-absolute 1.5s infinite;
    animation: loading-center-absolute 1.5s infinite;

}
.object{
    width: 25px;
    height: 25px;
    background-color: #FFF;
    float: left;
}

#object_one {
    -webkit-animation: object_one 1.5s infinite;
    animation: object_one 1.5s infinite;
}
#object_two {
    -webkit-animation: object_two 1.5s infinite;
    animation: object_two 1.5s infinite;
}
#object_three {
    -webkit-animation: object_three 1.5s infinite;
    animation: object_three 1.5s infinite;
}
#object_four {
    -webkit-animation: object_four 1.5s infinite;
    animation: object_four 1.5s infinite;
}


@-webkit-keyframes loading-center-absolute {
    100% { -webkit-transform: rotate(-45deg); }

}

@keyframes loading-center-absolute {
    100% {
        transform:  rotate(-45deg);
        -webkit-transform:  rotate(-45deg);
    }
}



@-webkit-keyframes object_one {
    25% { -webkit-transform: translate(0,-50px) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }

}

@keyframes object_one {
    25% {
        transform: translate(0,-50px) rotate(-180deg);
        -webkit-transform: translate(0,-50px) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: translate(0,0) rotate(-180deg);
    }
}


@-webkit-keyframes object_two {
    25% { -webkit-transform: translate(50px,0) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }
}

@keyframes object_two {
    25% {
        transform: translate(50px,0) rotate(-180deg);
        -webkit-transform: translate(50px,0) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: translate(0,0) rotate(-180deg);
    }
}

@-webkit-keyframes object_three {
    25% { -webkit-transform: translate(-50px,0) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }
}

@keyframes object_three {
    25% {
        transform:  translate(-50px,0) rotate(-180deg);
        -webkit-transform:  translate(-50px,0) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: rtranslate(0,0) rotate(-180deg);
    }
}


@-webkit-keyframes object_four {
    25% { -webkit-transform: translate(0,50px) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }
}

@keyframes object_four {
    25% {
        transform: translate(0,50px) rotate(-180deg);
        -webkit-transform: translate(0,50px) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: translate(0,0) rotate(-180deg);
    }
}
/*End off Preloader*/


/*
Nav Menu style
==================*/

.navbar-brand {
  /*  padding: 30px 15px;*/

}


/*
Home Section style
==================*/

.home{
    background: url(../../../static/images/homebg.png) no-repeat top center;
    background-size: cover;
    position: relative;
}
.main_home{
    overflow: hidden;
    padding-top: 200px;
    padding-bottom: 230px;
}
.home_text h1{
    font-family: 'Roboto';
    font-size:3.750rem;
    font-weight: 700;
    line-height: 4.5rem;
}
.home_btns{
    margin-left:-10px;
}
.home_btns a{
    margin-left:10px;
}
.btn-transparent {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}

.scrooldown{
    position: absolute;
    left: 48.5%;
    bottom: 10%;
    width: 40px;
    height: 40px;
    line-height: 37px;
    background: #f4f5f9;
    border-radius: 50%;
    text-align: center;
    z-index: 3;
}
.scrooldown a i{
    font-size:0.775rem;
    color:#e74c3c;
}

/*
Featured section style
========================*/
.main_features{}
.features_item{}
.features_item .f_item_icon{
    float: left;
    width:20%;
    display: inline-block;
    margin-right: 15px;
}
.features_item .f_item_icon i{
    font-size:4rem;
    color:#fc6a42;
}
.features_item .f_item_text{
    display: inline-block;
    width:70%;
}


/*
Testimonial Section style
=====================*/
.main_drag{
    overflow: hidden;
}

.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 20px auto;
}
.swiper-slide {
    text-align: center;
    background-position: center;
    background-size: cover;
    width: 270px;
    height: 476px;


    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-shadow: 0px 0px 15px 0px #ddd;
}


/*
Screen01 Section style
=====================*/

.screen03,
.screen02,
.screen01{
    overflow: hidden;
    width: 100%;
}

.screen03_img,
.screen02_img,
.screen01_img{
    position: relative;
}
.screen03_img img,
.screen02_img img,
.screen01_img img{
    position: relative;
    z-index: 1;
}

.rainy,
.sunny,
.cloudy{
    font-weight: 250;
    transform: rotate(90deg);
    position: absolute;
    color: #ddd;
    z-index: 0;
}
.rainy{
    top: 270px;
    right: -185px;
    font-size: 15rem;

}
.sunny{
    top: 250px;
    right: -215px;
    font-size: 14.6rem;
}
.cloudy{
    top: 255px;
    right: -210px;
    font-size: 13rem;
}
.attr_rio,
.attr_deg{
    position: absolute;
    width:55px;
    height: 55px;
    line-height: 55px;
    display: inline-block;
    border-radius: 50%;
}
.attr_deg{
    top: 10%;
    right: 6%;
    background-color: #ffffff;
}
.attr_rio{
    bottom:0;
    right:0;
    background-color: #fcec64;
}
.attr_deg4,
.attr_rainy2,
.attr_deg3,
.attr_sun2,
.attr_cloudy,
.attr_deg2,
.attr_lon,
.attr_sun{
    position: absolute;
    width:90px;
    height: 90px;
    line-height: 90px;
    display: inline-block;
    border-radius: 50%;
}

.attr_sun{
    top: 45%;
    left: 0%;
    background-color: #fc6a42;
}
.attr_lon{
    top:40%;
    right:0%;
    background-color: #4466c9;
}
.attr_cloudy{
    top: 27%;
    right: 16%;
    background-color: #fcec64;
    z-index: 4;
}
.attr_deg2{
    top:60%;
    left:10%;
    background-color:#6ca3ff;
    z-index: 4;
}
.attr_sun2{
    top: 20%;
    right: 14%;
    background-color: #f2a14e;
    z-index: 4;
}
.attr_deg3{
    top:60%;
    left:13%;
    background-color:#fc6a42;
    z-index: 4;
}
.attr_rainy2{
    top: 27%;
    right: 16%;
    background-color: #b8faee;
    z-index: 4;
}
.attr_deg4{
    top:60%;
    left:13%;
    background-color:#7693c8;
    z-index: 4;
}

.screen01_content{}
.screen03_content p,
.screen02_content p,
.screen01_content p{
    font-size:1.500rem;
    line-height: 2.125rem;
}
.screen03_content ul li,
.screen02_content ul li,
.screen01_content ul li{
    border: 1px dashed #ddd;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    line-height: 60px;
    box-shadow: 0px 0px 10px 0px #ededf2;
    margin-right: -15px;
    background-color: #fff;
    position: relative;
    color:#ededf2;
}
.screen03_content ul li:nth-child(1),
.screen02_content ul li:nth-child(1),
.screen01_content ul li:nth-child(1){
    z-index: 2;
}
.screen03_content ul li:nth-child(2),
.screen02_content ul li:nth-child(2),
.screen01_content ul li:nth-child(2){
    z-index: 1;
}
.screen03_content ul li:nth-child(3),
.screen02_content ul li:nth-child(3),
.screen01_content ul li:nth-child(3){
    z-index: 0
}

/*
People Section style
=====================*/

.main_reviews .head_title{
    padding-bottom:1rem;
}
.reviews_content{}
.reviews_item{
    position: relative;
    width:100%;
}
.reviews_item h3,
.reviews_item h5{
    color:#353854;
}
.reviews_item_icon{
    display: block;
    width: 100%;
    font-size: 6rem;
    color: #648cff;
    height: 55px;
    margin-bottom: 20px;
}
.reviews_item_icon1{
    display: inline-block;
    width: 80px;
    font-size: 6rem;
    color: #648cff;
    height: 55px;
    position: absolute;
    right: 0;
    bottom: -45px;
    transform: rotate(-180deg);
}


/*
Download Section style
=====================*/
.download{
    position: relative;
}
.download_item h5{
    line-height: 1.5rem;
    width:70%;
}
.download_item img.app_right{
    position: relative;
    bottom:-60px;
}
.download_app{
    margin-left:-10px;
}
.download_app a{
    margin-left:10px;
}

/*
Footer Section style
=====================*/
nav.navbar.bootsnav.footer-menu{
    background-color: transparent;
    border-bottom: 0px;
}
nav.navbar.bootsnav.footer-menu ul li a{
    color:#b5b5c8;
}
nav.navbar.bootsnav.footer-menu ul li a:hover{
    color:#fff;
}
.divider{
    width:100%;
    height: 1px;
    background-color: #434769;
    display: inline-block;
}
.main_footer{
    overflow: hidden;
}

.main_footer i {
    padding: 0px 5px;
    color: #ff0000;
}


/*Scroll Up*/
.scrollup {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    opacity: .3;
    position: fixed;
    bottom: 20px;
    right: 25px;
    color: #fff;
    cursor: pointer;
    background-color: #000;
    z-index: 1000;
    transition: opacity .5s, background-color .5s;
    -moz-transition: opacity .5s, background-color .5s;
    -webkit-transition: opacity .5s, background-color .5s;
}

.scrollup i {
    font-size: 13px;
    position: absolute;
    opacity: 1;
    color: #fff;
    left: 50%;
    top: 50%;
    margin-top: -7px;
    margin-left: -6px;
    text-decoration: none;
}

.scrollup:hover {
    background-color: blueviolet;
    color:#fff;
}

</style>
