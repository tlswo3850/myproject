<template>
  <v-app id="app">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-center sidebar-title">
                    오씨칼국수 상세정보
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list dense>
                <v-list-item v-for="(item, index) in food" :key="index" :href="item.link">
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider class="my-2"></v-divider>
              <v-list-item @click="refreshPage" color="grey lighten-4">
                <v-list-item-action>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-col cols="12" sm="14">
                <v-sheet min-height="70vh" rounded="lg">
                  <ockimg /> <br>
                  <ocktext />
                </v-sheet>
              </v-col>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ockimg from '../components/ockimg';
import ocktext from '../components/ocktext';

export default {
  name: 'App',
  components: {
    ockimg,
    ocktext
  },

  data() {
    return {
      food: [
        { name: "메뉴 및 위치조회", icon: 'mdi-map-marker', link: "http://127.0.0.1:8000/aboutfood" },
        { name: "예약하기", icon: 'mdi-calendar-clock', link: "http://127.0.0.1:8000/reservation" },
        { name: "포장하기", icon: 'mdi-food', link: "http://127.0.0.1:8000/pack" },
        { name: "길찾기", icon: 'mdi-car', link: "http://127.0.0.1:8000/route" },
      ]
    };
  },
  methods: {
    refreshPage() {
      window.location.href = "/about";
    }
  }
}
</script>

<style>
.grey-lighten-3{
padding: 0px;
}
.square-button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #ccc;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.menu {
  text-align: center;
  font-family: Arial, sans-serif;
}

.title-container {
  padding: 20px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.icon-left,
.icon-right {
  font-size: 36px;
  color: #333333;
  margin: 0 10px;
}

.title-text {
  font-size: 32px;
  color: #333333;
  margin: 0;
  padding: 0;
}

.sidebar-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
}

.v-list-item {
  padding: 10px;
}

.v-list-item__action {
  margin-right: 15px;
}

.v-list-item__content {
  margin-top: 5px;
}

.content-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
}

.v-list-item__action {
  margin-right: 15px;
  align-items: center;
}

.v-list-item__action v-icon {
  margin-right: 5px;
}
</style>
