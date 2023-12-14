<template>
    <div id="live-view1">
      <h1>실시간 주문</h1>
      <div class="info-box"><br>
        <div class="info-row">
          <div class="info-label">음식집번호 :</div>
          <div class="info-value">{{ deviceId }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">포장번호 :</div>
          <div class="info-value">{{ packId }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">주문자명 :</div>
          <div class="info-value">{{ packname }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">주문내역 :</div>
          <div class="info-value">{{ packfood }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">방문예정 시간 :</div>
          <div class="info-value">{{ packtime }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'live-view',
    data() {
      return {
        deviceId: 1,
        packId: 1,
        packname: 'tlswo',
        packfood: '국밥 1인분',
        packtime: '11시10분'
      }
    },
    created() {
      this.$socket.on('live', (data) => {
        this.deviceId = data.deviceId;
        this.packId = data.packId;
        this.packname = data.packname;
        this.packfood = data.packfood;
        this.packtime = data.packtime;
      })
    },
  }
  </script>
  
  <style scoped>
  #live-view1 {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .info-box {
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .info-label {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  .info-value {
    font-size: 18px;
    color: #555;
  }
  </style>
  