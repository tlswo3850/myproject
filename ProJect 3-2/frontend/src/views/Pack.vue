<template>
  <div class="aboutfood">
    <h1 class="menu-title">포장페이지</h1>
    <v-container>
      <v-row>
        <v-col>
          <device-table />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <data-table />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <live-view1 />
        </v-col>
        <v-col>
          <data-pack-table />
        </v-col>
      </v-row><br><br>
      <v-row justify="center">
        <v-col cols="6" md="4">
          <v-btn block color="#5DADE2" :to="{ path: '/route' }" class="white--text"
            style="height: 60px; width: 80%">길찾기</v-btn>
        </v-col>
      </v-row><br><br>
    </v-container>
  </div>
</template>
<script>
import DeviceTable from '../components/DeviceTable';
import DataTable from '../components/DataTable';
import LiveView1 from '../components/LiveView1';
import DataPackTable from '../components/DataPackTable';


export default {
  name: 'App',
  components: {
    DeviceTable,
    DataTable,
    LiveView1,
    DataPackTable,
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