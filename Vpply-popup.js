<template>
    <div>
        <Topbar id="topbar"/>
        <main id="main-sec">
            <section id="hero">
                <h1>The quickest way to apply for jobs with video</h1>
            
                <JobSearch @search="searchJobs"/>
            
                <div id="features">
                    <div>
                        <h3>No Cover Letters</h3>
                        <p>Simply 'Vpply' and express why you are right for the role in your video</p>
                    </div>
                    <div>
                        <h3>Quick Application</h3>
                        <p>Save time applying for jobs by filming a 60-90 second application video</p>
                    </div>
                    <div>
                        <h3>Showcase Your Personality</h3>
                        <p>Stand out from the crowd and make your video memorable</p>
                    </div>
                </div>
            </section>
            <section id="about">
                <div class="hero-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="hero-wave opac-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            <VideoPlayer poster_url="https://vpply-videos.s3.ap-southeast-2.amazonaws.com/chanel-9+poster.png" video_src="https://vpply-videos.s3.ap-southeast-2.amazonaws.com/vpply-channel+9.mp4" />
            <div>
              <h3>What is Vpply?</h3>
              <p>Vpply is a web application that allows candidates  to apply for jobs with a video profile.</p>
              <br>
              <p>Finding a job is challenging and Vpply allows jobseekers to make an impactful first impression through applying with a short video instead of the traditional CV and cover letter.</p>
              <div id="intro-buttons">
                <NuxtLink to="/post-a-job" id="learn-button">Post a Job</NuxtLink>
                <NuxtLink to="/job-seeker/register">
                    <b-button class="btn btn-primary" id="join-button">Register</b-button>
                </NuxtLink>
              
              </div>
            </div>
            <div class="about-wave opac-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="about-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    
        <section id="ttm-con">
            <div id="ttm">
                <h2 style="color: black">Testimonials</h2>
        
                <div>
                    <div class="t-card">
                      <p> Vpply allowed us to screen candidates faster than other job boards, it was also a great way for us to meet the candidates before interviewing them. We have <span>placed 20 full time staff</span> in 3 months using Vpply in <span>sales, marketing and admin</span> roles.</p>
                      <div @click="goTo('karens-diner', 499)" style="cursor: pointer">
                          <img src="https://vpply-videos.s3.ap-southeast-2.amazonaws.com/1654486482.jpg" alt="">
                          <h4>Karens Diner</h4>
                      </div>
                </div>
                    <div class="t-card">
                      <p> Without a camera you miss a person's facial expressions. You cannot see the nonverbal expressions of a smile, delight, a frown or someone disengaging. Even though you are working from a distance you don't need to be distant. The beauty of a meeting is to come together to interact, and <span>it humanises what otherwise could be a very 'virtual' interaction</span></p>
                      <div @click="goTo('frog-recruitment', 444)" style="cursor: pointer">
                          <img src="https://vpply-videos.s3.ap-southeast-2.amazonaws.com/1646095699.jpg" alt="">
                          <h4>Frog Recruitment</h4>
                      </div>
                </div>
                <!-- <div> this was gorilla jobs quote
                    <div class="t-card">
                      <p> Vpply has made an immediate impact to our business with a <span>recruitment consultant placement</span> made from the platform a few days after posting on JobAdder. We have managed to <span>save approximately 5 hours on CV screening and interviews per day</span> as Vpply presented a shortlist of candidates in a handy 60 second format for us to screen. </p>
                      <div @click="goTo('frog-recruitment', 444)" style="cursor: pointer">
                          <img src="https://vpply-videos.s3.ap-southeast-2.amazonaws.com/1646095699.jpg" alt="">
                          <h4>Frog Recruitment</h4>
                      </div>
                </div> -->
                    <div class="t-card">
                      <p> In the fast-paced recruitment industry, our consultants at people2people are always looking for job seekers that make an <span>impactful first impression.</span> Vpply has given us the opportunity to quickly <span>filter through the high volume</span> of candidates and determine early on if they are a <span>suitable fit</span> before interviewing them.</p>
                      <div @click="goTo('people2people', 335)" style="cursor: pointer">
                          <img src="https://vpply-videos.s3.ap-southeast-2.amazonaws.com/1622630568.jpeg" alt="">
                          <h4>people2people</h4>
                      </div>
                </div>
                    
                </div>
            </div>
        </section>
    
        <HomePageBrands />
        
        </main>
        <Footer />
         <!--  popup modal -->
         
      <div class="modal" id="popupModal" style="display: none;">
          <div class="modal-content">
            <!-- Close button shifted to the right -->
            <span class="close" @click="closePopup">&times;</span>
            <!-- Center-aligned text -->
            <div style="text-align: center;">
              <!-- Bolder and bigger text for "Welcome to Vpply!" -->
              <h2 style="font-weight: bold; font-size: 24px; color: black;">Welcome to Vpply!</h2>
              <!-- Relatively smaller text for other content -->
              <p style="color: black;">
             <br> Explore the Benefits of Video Interviews.</br>
                  <br>Start your interview journey now by visiting our platform.</br>
              </p>
              <!-- "Click here" button inside the popup -->
              <button @click="redirectToEmployersVpply" style="margin-top: 16px;">Click here</button>
            </div>
          </div>
        </div>
       <!--  popup modal -->
    </div>
    </template>
    <script>
export default {
  head() {
    return {
      title: 'Vpply - Apply with Video',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Vpply is a video job-search site featuring thousands of online jobs that you can apply to almost instantly. No more writing lengthy cover letters and resumes, showcase your passion and personality instantly through a short, quick video!' 
        },
      ]
    }
  },
  mounted() {
    // Check if the popup has been shown before
    this.checkPopup();
  },
  methods: {
    checkPopup() {
      // Get the current time
      const now = new Date().getTime();

      // Get the time when the popup was last shown
      const lastShown = localStorage.getItem('popupLastShown');

      if (lastShown) {
        // Calculate the time difference in minutes
        const timeDifference = (now - lastShown) / (1000 * 60);

        // If the time difference is greater than 15 minutes, show the popup again
        if (timeDifference > 15) {
          this.showPopup();
        }
      } else {
        // If the popup has never been shown, show it now
        this.showPopup();
      }
    },
    showPopup() {
      // Display the full-page popup modal
      const modal = document.getElementById('popupModal');
      modal.style.display = 'block';

      // Store the current time as the last shown time
      const now = new Date().getTime();
      localStorage.setItem('popupLastShown', now);

      // Close the popup when the close button or outside the modal is clicked
      window.onclick = (event) => {
        if (event.target === modal) {
          this.closePopup();
        }
      };

      // Add event listener for close button
      const closeButton = document.querySelector('.close');
      closeButton.onclick = () => {
        this.closePopup();
      };
    },
    closePopup() {
      // Close the popup when the close button is clicked
      const modal = document.getElementById('popupModal');
      modal.style.display = 'none';
    },
    redirectToEmployersVpply() {
      // Redirect the user to employers.vpply.com when clicking the "click here" button
      window.location.href = 'https://employers.vpply.com/';
    },
    searchJobs(e) {
      // Handle the search functionality
      this.searchQuery = e;
      // Redirect to the search page with the search query
      this.$router.push({
        path: '/jobs',
        query: e
      });
    },
    goTo(name, id) {
      // Navigate to the specified route
      let res = name.toLowerCase();
      let name_arr = res.split(' ');
      let name_res = name_arr.join('-');
      this.$router.push({ path: `/c/${name_res}/${id}` });
    },
  }
}
</script>

    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@700&display=swap');
    #topbar{
        position: sticky;
        top: 0;
        z-index: 5;
    }
    *, *::before, *::after{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    
    #hero{
        height: fit-content;
        position: relative;
        text-align: center;
        background:linear-gradient(#f04661 0 50%, #5925c0);
        padding: 3% 40px;
    }
    .hero-wave {
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }
    
    .hero-wave svg {
        position: relative;
        display: block;
        width: calc(112% + 1.3px);
        height: 69px;
    }
    
    .hero-wave .shape-fill {
        fill: #5925C0;
    }
    
    .opac-wave svg{
        height: 108px;
        width: calc(125% + 1.3px);
    }
    .opac-wave .shape-fill{
         fill: #5925C050;
    }
    #hero > * {
        width: fit-content;
        margin: 5%  auto;
    }
    h1{
        font-size: clamp(2.5rem, 3vw, 4rem);
        width: 70%;
        max-width: 800px;
        font-weight: bold;
        color: #f5f5f5;
    }
    input[type="text"]{
        border: #ccc;
        border-radius: 5px;
        padding: 8px;
        width: 39%;
    }
    button{
        cursor: pointer;
        background: black;
        padding: 8px;
        border-radius: 5px;
        color: white;
        border: black;
        font-family: 'Montserrat' sans-serif;
    }
    #features{
        display: grid;
        grid-template-columns: repeat(3, minmax(320px, 1fr));
        color: white;
        grid-gap: 24px;
    }
    #features p{
        margin: 0 auto;
        max-width: 310px;
    }
    #features h3{
        font-size: 1.3rem;
        white-space: nowrap;
        padding: 8px;
        font-weight: 700;
    }
    @media screen and (max-width: 850px) {
        #hero{
            padding: 10px;
        }
        #search{
            flex-direction: column;
        }
        #search > button, input[type="text"]{
            width: 100%;
            margin: 8px 0;
        }
    }
    @media screen and (max-width: 1050px) {
        #features{
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3 auto);
        }
    }
    
    #about{
        display: flex;
        justify-content: center;
        padding: 48px 24px 96px;
        position: relative;
    }
    video{
        max-width: 450px;
    }
    
    #learn-button{
        color: black;
        font-weight: bold;
        color: #f04661;
        cursor: pointer;
        padding: 8px;
        border-radius: 5px;
        min-width: 120px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
        font-family: 'Montserrat' sans-serif;
        border: 1px solid #f04661;
    }
    
    #learn-button:hover {
        background-color: #e4dede;
        transition: 0.3s;
    }
    
    #join-button{
        background: #f04661;
        color: #f5f5f5;
        cursor: pointer;
        font-weight: bold;
        padding: 8px;
        border-radius: 5px;
        font-family: 'Montserrat' sans-serif;
    }
    #about > div:not(.hero-wave):not(.about-wave){
        margin: auto 0;
        margin-left: 40px;
        max-width: 450px;
    }
    
    #about > video, #about > div:not(.hero-wave):not(.about-wave){
        margin-top: 80px;
    }
    h2{
        margin-bottom: 10px;
        font-size: clamp(2rem, 2vw, 2.5rem);
        color: #6f6f6b;
        font-weight: 700;
    }
    #about h3{
        margin-bottom: 10px;
        font-size: clamp(1.8rem, 1.8vw, 2.2rem);
        color: #6f6f6b;
        font-weight: 600;
    }
    p{
        line-height: 1.3;
        font-weight: 550;
    }
    #about p{
        color: #6f6f6b;
        line-height: 1.3;
    }
    #intro-buttons{
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        padding: 0 16px;
    }
    
    @media screen and (max-width: 850px){
        #about{
            flex-direction: column;
            align-items: center;
        }
        video, #about > div:not(.hero-wave):not(.about-wave){
            margin: 16px 0;
            width: 100%;
            max-width: unset;
        }
        #about h2{
            text-align: center;
        }
        #intro-buttons{
            margin: 8px auto;
            max-width: 350px;
        }
    }
    
    .about-wave {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        z-index: -1;
        transform: rotate(180deg);
    }
    
    .about-wave svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 54px;
        transform: rotateY(180deg);
    }
    
    .about-wave .shape-fill {
        fill: #f1f1f1;
    }
    
    #ttm-con{
        width: 100%;
    }
    #ttm{
        margin: 0 auto;
        background: #f1f1f1;
        padding: 40px;
        max-width: 100%;
    }
    #ttm > h2{
        text-align: center;
        margin-bottom: 24px;
    }
    #ttm > div{
        margin-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .t-card{
        color: black;
        padding: 16px;
        position: relative;
        margin: auto;
        width: 100%;
        padding: 40px;
        display: grid;
        height: 100%;
        grid-auto-rows: minmax(170px, auto) 70px;
    }
    .t-card > div{
        margin-top: 16px;
        display: flex;
        align-items: center;
        padding: 8px;
    }
    .t-card img{
        height:60px;
        width: 60px;
        margin-right: 8px;
        border-radius: 16px;
    }
    
    span{
        color: #f04661;
    }
    
    .t-card > p::before{
        font-family: 'Catamaran', sans-serif;
        content: open-quote;
        font-size: 48px;
        position: absolute;
        top: -10px;
        left: 20px;
        color: #f04661;
        transform: scale(-1);
    }
    .t-card > p::after{
        content: close-quote;
        visibility: hidden;
    }
    
    .t-card + .t-card{
        border-left: 2px solid #0000000f;
    }
    #ttm h2{
        color: black;
    }
    
    #ttm h4{
        font-weight: 600;
        font-size: 1.1rem;
    }
    
    svg{
        fill: white;
        color: white;
    }
    
    @media screen and (max-width: 950px){
        #ttm > div{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
        }
        .t-card + .t-card{
            border-left: none;
            border-top: 2px solid #0000000f;
        }
        .t-card{
            height: fit-content;
            display: unset;
            width: 100%;
        }
        #ttm{
            padding: 48px 8px;
        }
    }
     /*popup */
     .modal {
      /* Full-screen overlay */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9); /* Adjust the brightness of the white background */
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999; /* Ensure modal is on top of other content */
    }
    
    .modal-content {
      /* Background image without blur effect */
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      position: relative;
    }
    
    .modal-content h2 {
      /* Bolder and bigger text for "Welcome to Vpply!" */
      font-weight: bold;
      font-size: 24px;
    }
    
    .modal-content p {
      /* Relatively smaller text for other content */
      font-size: 18px;
    }
    
    .modal-content button {
      /* Button styles */
      background-color: #f04661;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }
    
    .modal-content button:hover {
      /* Button hover effect */
      background-color: #d42e49;
    }
    
    .close {
      /* Close button styles */
      color: #000000;
      font-size: 30px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      transition: color 0.3s;
      z-index: 99999; /* Ensure the close button is always on top */
    }
    
    .close:hover {
      /* Close button hover effect */
      color: #f04661;
    }
    
     /*popup */
    </style>
    





    brands.vue -master-frontend
    <template>
    <section class="brands-section">
      <h2>Brands that trust Vpply</h2>
      <div
        class="brands-list"
        :class="{
          'brands-static': !brandsEnableScroll,
          'brands-scroll': brandsEnableScroll,
        }"
        ref="brands_list"
      >
        <template v-for="n in brandsEnableScroll ? 2 : 1">
          <img
            v-for="(brand, index) in brand_partners"
            :key="index"
            :class="{ 'desktop-only': n > 1 }"
            :src="require(`@/${brand}`)"
            alt=""
          />
        </template>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brandsWidth: 0,
        brandsEnableScroll: false,
  
        brand_partners: [
          "assets/img/homepage/brands_karens.png",
          "assets/img/homepage/brands_gyg.png",
          "assets/img/homepage/brands_p2p.png",
          "assets/img/homepage/brands_mcd.png",
          "assets/img/homepage/brands_bosch.png",
          "assets/img/homepage/brands_accor.png",
          "assets/img/homepage/brands_esrinew1.png",
          "assets/img/homepage/brands_petcircle.png",
        ],
      };
    },
    mounted() {
      const el = this.$refs.brands_list;
      const brandImages = Array.from(el.children);
      const images = brandImages.map((imageSrc) => {
        return new Promise((resolve, reject) => {
          const img = imageSrc;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      Promise.all(images)
        .then(() => {
          this.brandsWidth = el.offsetWidth + parseInt(window.getComputedStyle(el).gap);
          document.documentElement.style.setProperty(
            "--brands-width",
            `-${this.brandsWidth}px`
          );
          this.brandResize();
        })
        .catch((error) => {
          console.error("Error loading images");
          console.error(error.message);
        });
      window.addEventListener("resize", this.brandResize);
    },
    methods: {
      brandResize() {
        this.brandsEnableScroll = window.innerWidth < this.brandsWidth;
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: calc(68px / 100 * var(--font-size-scale));
    font-weight: 700;
  }
  
  h2 {
    font-size: max(2rem,min(2vw,2.5rem)); /*calc(40px / 100 * var(--font-size-scale));*/
    font-weight: 700;
  }
  h3 {
    font-size: calc(32px / 100 * var(--font-size-scale));
    font-weight: 700;
  }
  h4 {
    font-size: calc(24px / 100 * var(--font-size-scale));
    font-weight: 700;
  }
  p,
  strong {
    /*font-size: calc(18px / 100 * var(--font-size-scale));*/
    font-size: 18px;
  }
  .brands-section {
    max-width: 100vw;
    overflow: hidden;
  }
  
  .brands-section > h2 {
    padding-top: 68px;
    padding-bottom: 64px;
    text-align: center;
  }
  
  .brands-list {
    display: flex;
    gap: 40px;
    margin-bottom: 112px;
  }
  
  .brands-scroll {
    animation: marquee-horizontal-alt 40s linear infinite;
  }
  
  @keyframes marquee-horizontal-alt {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(var(--brands-width), 0);
    }
  }
  
  .brands-static {
    width: fit-content;
    margin: 0 auto 112px;
  }
  
  .brands-list > img {
    height: 86px;
    object-fit: contain;
  }
  
  @media screen and (max-width: 850px) {
    .brands-section {
      padding: var(--page-edge-padding);
    }
  
    .brands-section > h2 {
      padding-top: 0;
      padding-bottom: 32px;
    }
  
    .brands-list {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 0;
      padding-bottom: 64px;
    }
  
    .brands-list > img {
      height: 70px;
    }
  }
  @media screen and (max-width: 451px) {
    .brands-list > img {
      height: 50px;
    }
  }
  @media screen and (max-width: 850px) {
    .brands-section {
      background-color: #ffffff !important;
    }
  }
  </style>
  