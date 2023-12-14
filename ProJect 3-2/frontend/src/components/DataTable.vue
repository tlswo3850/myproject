<template>
  <div id="app">
    <h1 class="menu-title">메뉴 리스트</h1>
    <div class="menu">
      <div class="menu-item" v-for="(item, index) in items.slice(0, 3)" :key="item.menuId">
        <div class="item-info">
          <p class="menu-id">메뉴번호: {{ item.menuId }}</p>
          <div class="item-details">
            <div class="item-header">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFJnxV8kZs2z8LFWG5k8qgIzEVDL1nyx8fg&usqp=CAU"
                class="food-image">
              <h2>{{ item.food }}</h2>
            </div>
            <p>가격: {{ item.price }}</p>
            <p>등록일: {{ item.register_date }}</p>
          </div>
          <p class="restaurant-id">맛집번호: {{ item.deviceId }}</p>
        </div>
      </div>
    </div>

    <div class="menu">
      <div class="menu-item" v-for="(item, index) in items.slice(3)" :key="item.menuId">
        <div class="item-info">
          <p class="menu-id">메뉴번호: {{ item.menuId }}</p>
          <div class="item-details">
            <h2>{{ item.food }}</h2>
            <p>가격: {{ item.price }}</p>
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
      urlinfo: 'http://127.0.0.1:8000/datas/',
      contactInfo: {
        id: null,
        deviceId: null,
        menuId: null,
        food: '',
        price: '',
        register_date: null
      },
      dialog: false,
      dialogTitle: null,
      items: []
    }
  },

  created() {
    this.$bus.$on('deviceSelected', this.refleshData)
  },

  methods: {
    refleshData(data) {
      axios.get(this.urlinfo + data.deviceId)
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          alert('에러 발생: ' + err);
        });
    }
  }
}
</script>

<style scoped>
/* 메뉴판 스타일 */
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
