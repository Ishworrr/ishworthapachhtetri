
<template>
    <div class="vpply-upload_container">
      <span class="vpply-upload_title" v-if="!upload_data.upload_complete">Please wait while your video uploads, do not close this tab</span>
      <span class="vpply-upload_title" v-if="upload_data.upload_complete"> Your responses have been successfully uploaded </span>
      <div class="vpply-upload_items" v-if="!upload_data.upload_complete">
          <div v-for="p, index in payload" :key="index" class="vpply-upload_item">
              <span>{{uploadMessage(index)}}</span>
  
              <div class="vpply-uploader_container">
                  <div class="vpply-uploader_inner" :style="`width: ${upload_data.loader_width[index]}%`">
                      <div class="vpply-uploader_effect" :style="`background: repeating-linear-gradient(45deg, ${brand_color}ce, ${brand_color}ce 15px, ${brand_color} 15px, ${brand_color} 30px);`">
                      </div>
                  </div>
              </div>
  
              <div class="vpply-finished_upload_icon" :class="{'vpply-upload_done': upload_data.finished_index[index]}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: ['payload', 'upload_data', 'brand_color'],
      methods: {
          uploadMessage(index){
              return `${index + 1} of ${this.payload.length}`
          }
      }
  }
  
  </script>
  
  <style>
  .vpply-upload_container {
    text-align: center;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
  .vpply-uploader_container {
    width: 200px;
    height: 28px;
    border-radius: 16px;
    background-color: #f1f1f1;
  }
  .vpply-upload_title{
      font-weight: bold;
      font-family: 'Lato', sans-serif;
      margin: 16px;
  }
  .vpply-upload_items{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 300px;
      overflow: scroll;
      padding: 16px;
      box-sizing: border-box;
  }
  .vpply-upload_item{
      display: flex;
      align-items: center;
      margin-bottom: 8px;
  }
  .vpply-upload_item > span:first-child{
      margin-right: 16px;
  }
  .vpply-finished_upload_icon{
      margin-left: 16px;
      height: 24px;
      width: 24px;
      background-color: grey;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .vpply-upload_done{
      background-color: green;
  }
  .vpply-percent_message{
      color: #272727;
      font-family: 'Lato', sans-serif;
      display: flex;
      flex-direction: column
  }
  .vpply-percent_message span{
      margin-bottom: 8px;
  }
  .vpply-uploader_inner {
    width: 0%;
    border-radius: 16px;
    height: inherit;
    overflow: hidden;
  }
  .vpply-uploader_effect {
    width: 400px;
    height: 24px;
    animation: 10s loader-filled infinite ease-in-out;
  }
  @keyframes loader-filled{
      0%{transform: translateX(0)}
      50%{transform: translateX(-200px)}
      100%{transform: translateX(0px)}
  }
  </style>