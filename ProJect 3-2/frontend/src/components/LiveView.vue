<template>
    <div id="live-view">
      <h1>실시간 예약</h1>
      <div class="info-box"><br>
        <div class="info-row">
          <div class="info-label">음식집번호 :</div>
          <div class="info-value">{{ deviceId }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">예약번호 :</div>
          <div class="info-value">{{ timeId }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">예약자명 :</div>
          <div class="info-value">{{ name }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">총 인원수 :</div>
          <div class="info-value">{{ count }}</div>
        </div>
        <v-divider class="my-2"></v-divider>
        <div class="info-row">
          <div class="info-label">예약시간 :</div>
          <div class="info-value">{{ time }}</div>
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
            timeId: 1,
            name: '에',
            count: '4명',
            time: '11시10분'
        }
    },
    created() {
        this.$socket.on('live', (data) => {
            this.deviceId = data.deviceId;
            this.timeId = data.timeId;
            this.name = data.name;
            this.count = data.count;
            this.time = data.time;
        })
    },
}
</script>

<style scoped>
  #live-view {
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
  