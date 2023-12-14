<template>
  <div class="aboutfood">
    <h1 class="menu-title">매장 메뉴 및 위치</h1>
    <v-container>
      <v-row>
        <v-col>
          <device-table />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <google-map />
        </v-col>
        <v-col>
          <current-weather />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <data-table />
        </v-col>
      </v-row>
    </v-container><br>
    <v-row justify="center">
      <v-col cols="6" md="4">
        <v-btn block color="#5DADE2" :to="{ path: '/reservation' }" class="white--text"
          style="height: 60px; width: 80%">예약하러가기</v-btn>
      </v-col>
      <v-col cols="6" md="4">
        <v-btn block color="#5DADE2" :to="{ path: '/pack' }" class="white--text"
          style="height: 60px; width: 80%">포장하러가기</v-btn>
      </v-col>
    </v-row><br><br>
  </div>
</template>
<script>
import DeviceTable from '../components/DeviceTable';
import DataTable from '../components/DataTable';
import GoogleMap from '../components/GoogleMap';
import CurrentWeather from '../components/CurrentWeather';

export default {
  name: 'App',
  components: {
    DeviceTable,
    DataTable,
    CurrentWeather,
    GoogleMap,
  },
  data: () => ({
    //
  }),
  methods: {
    dateUpdate(date) {
      alert(date);
    }
  }
}
</script>
<style>
.menu-title {
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
}
</style>
