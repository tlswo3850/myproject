<template>
  <div id="app">
    <h1 class="menu-title">예약자 리스트</h1>
    <div class="menu">
      <div class="menu-item" v-for="item in items" :key="item.menuId">
        <div class="item-info">
          <p class="restaurant-id">맛집번호: {{ item.deviceId }}</p>
          <h2 class="menu-id">예약번호: {{ item.timeId }}</h2>
          <div class="item-details">
            <p>예약자명: {{ item.name }}</p>
            <p>총 인원수: {{ item.count }}</p>
            <p>예약시간: {{ item.time }}</p>
            <p>등록일: {{ item.register_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  data() {
    return {
      urlinfo: 'http://127.0.0.1:8000/datatimes/',
      contactInfo: {
        _id: null,
        deviceId: null,
        timeId: null,
        name: '',
        count: '',
        time: '',
        register_date: null
      },
      dialog: false,
      dialogTitle: null,

      headers: [
        { text: '맛집번호', align: 'left', value: 'deviceId' },
        { text: '예약번호', align: 'left', value: 'timeId' },
        { text: '이름', align: 'left', value: 'name' },
        { text: '인원', align: 'left', value: 'count' },
        { text: '예약시간', align: 'left', value: 'time' },
        { text: '등록일', align: 'left', value: 'register_date' }
      ],
      items: []
    }
  },

  created() {
    this.$bus.$on('timeSelected', this.refleshData)
  },
  methods: {
    refleshData(data) {
      axios.get(this.urlinfo + data.deviceId) //서버에 요청하기
        .then((res) => {
          console.log(res.data); //성공시
          this.items = res.data;
        })
        .catch((err) => {
          alert('에러 발생: ' + err); //에러 발생
        });
    }
  }
}
</script>
<style scoped>
.menu-title {
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.menu-item {
  width: 250px;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.item-info {
  margin-bottom: 10px;
}

.item-details {
  margin-top: 10px;
}

.item-header {
  display: flex;
  align-items: center;
}

.food-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.menu-id,
.restaurant-id {
  margin: 5px 0;
  font-style: italic;
}
</style>