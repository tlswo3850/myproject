<template>
  <div id="app">
    <h1 class="menu-title">주문자 리스트</h1>
    <div class="menu">
      <div class="menu-item" v-for="item in items" :key="item.menuId">
        <div class="item-info">
          <h2 class="menu-id">포장번호: {{ item.packId }}</h2>
          <div class="item-details">
            <p>주문자명: {{ item.packname }}</p>
            <p>주문내역: {{ item.packfood }}</p>
            <p>방문시간: {{ item.packtime }}</p>
            <p>등록일: {{ item.register_date }}</p>
          </div>
          <p class="restaurant-id">맛집번호: {{ item.deviceId }}</p>
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
      urlinfo: 'http://127.0.0.1:8000/datapacks/',
      contactInfo: {
        _id: null,
        deviceId: null,
        packId: null,
        packname: '',
        packfood: '',
        packtime: '',
        register_date: null
      },
      dialog: false,
      dialogTitle: null,

      headers: [
        { text: '맛집번호', align: 'left', value: 'deviceId' },
        { text: '포장번호', align: 'left', value: 'packId' },
        { text: '이름', align: 'left', value: 'packname' },
        { text: '주문내역', align: 'left', value: 'packfood' },
        { text: '방문시간', align: 'left', value: 'packtime' },
        { text: '등록일', align: 'left', value: 'register_date' }
      ],
      items: []
    }
  },

  created() {
    this.$bus.$on('packSelected', this.refleshData)
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