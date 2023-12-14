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
                    소나무집 상세정보
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
                  <treeimg /> <br>
                  <treetext />
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
import treeimg from '../components/detail/treeimg';
import treetext from '../components/detail/treetext';

export default {
  name: 'App',
  components: {
    treeimg,
    treetext
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
</style>