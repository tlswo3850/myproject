<template>
  <div id="app">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="장치번호" v-model="deviceInfo.deviceId" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="음식집" v-model="deviceInfo.name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="위도" v-model="deviceInfo.latitude" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="경도" v-model="deviceInfo.longitude" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="주소" v-model="deviceInfo.description" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="등록일" v-model="deviceInfo.register_date" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="btnClick($event)">취소</v-btn>
          <v-btn color="blue darken-1" text @click="btnClick($event)">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn color="primary" v-on:click.native="addContact()">추가</v-btn>

    <v-card class="elevation-1">
      <v-data-table :headers="headers" :items="items">
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.deviceId }}</td>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.description }}</td>
            <td>{{ row.item.register_date }}</td>
            <td class="text-xs-right">
              <v-btn color="primary" v-on:click.native="updateContact(row.item)">수정</v-btn>
              <v-btn color="primary" v-on:click.native="deleteContact(row.item)">삭제</v-btn>
              <v-btn color="primary" v-on:click.native="sendEvent(row.item)">보기</v-btn>
              <v-btn color="primary" v-on:click.native="sendEvent1(row.item)">예약</v-btn>
              <v-btn color="primary" v-on:click.native="sendEvent2(row.item)">포장</v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      urlinfo: 'http://127.0.0.1:8000/devices',
      deviceInfo: {
        _id: null,
        deviceId: null,
        name: null,
        latitude: null,
        longitude: null,
        description: null,
        register_date: null
      },
      dialog: false,
      dialogTitle: null,
      headers: [
        { text: '맛집번호', align: 'left', value: 'deviceId' },
        { text: '음식집', align: 'left', value: 'name' },
        { text: '주소', align: 'left', value: 'description' },
        { text: '등록일', align: 'left', value: 'register_date' },
        { text: '관리', align: 'left', value: '' },
      ],
      items: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(this.urlinfo)
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          alert('에러 발생: ' + err);
        });
    },
    sendEvent(data) {
      this.$bus.$emit('deviceSelected', data);
    },
    sendEvent1(data) {
      this.$bus.$emit('timeSelected', data);
    },
    sendEvent2(data) {
      this.$bus.$emit('packSelected', data);
    },
    addContact() {
      this.dialog = true;
      this.dialogTitle = "추가";
      this.deviceInfo.register_date = Date.now();
    },
    updateContact(data) {
      this.dialog = true;
      this.dialogTitle = "수정";
      this.deviceInfo.deviceId = data.deviceId;
      this.deviceInfo.name = data.name;
      this.deviceInfo.latitude = data.latitude;
      this.deviceInfo.longitude = data.longitude;
      this.deviceInfo.description = data.description;
      this.deviceInfo.register_date = data.register_date;
    },
    deleteContact(data) {
      this.dialog = true;
      this.dialogTitle = "삭제";
      this.deviceInfo.deviceId = data.deviceId;
      console.log('deleteContact : ' + data);
    },

    btnClick($event) {
      this.dialog = false;
      if ($event.target.innerHTML == "확인") {
        if (this.dialogTitle == "추가") {
          axios.post(this.urlinfo, {
            deviceId: this.deviceInfo.deviceId, name: this.deviceInfo.name, latitude: this.deviceInfo.latitude, longitude: this.deviceInfo.longitude, description: this.deviceInfo.description
            , register_date: this.deviceInfo.register_date
          })
            .then(() => {
              axios.get(this.urlinfo)
                .then((res) => {
                  this.items = res.data;
                  alert("맛집 추가 성공");
                })
                .catch((err) => {
                  alert('에러 발생: ' + err);
                });

            })
            .catch((err) => {
              alert('에러 발생: ' + err);
            });
        }
        else if (this.dialogTitle == "수정") {
          axios.put(this.urlinfo + '/' + this.deviceInfo.deviceId, {
            deviceId: this.deviceInfo.deviceId, name: this.deviceInfo.name, latitude: this.deviceInfo.latitude,
            longitude: this.deviceInfo.longitude, description: this.deviceInfo.description,
            register_date: this.deviceInfo.register_date
          })
            .then(() => {
              axios.get(this.urlinfo)
                .then((res) => {
                  this.items = res.data;
                  alert("업데이트 성공");
                })
                .catch((err) => {
                  alert('에러 발생: ' + err);
                });
            })
            .catch((err) => {
              alert('에러 발생: ' + err);
            });

        }
        else {
          axios.delete(this.urlinfo + '/' + this.deviceInfo.deviceId, { data: { deviceId: this.deviceInfo.deviceId } })
            .then((result) => {
              console.log("삭제 후" + result);
              axios.get(this.urlinfo)
                .then((res) => {
                  this.items = res.data;
                  alert("삭제 성공");
                })
                .catch((err) => {
                  alert(' 삭제 후 데이터 가져오는 중 에러 발생: ' + err);
                });
            })
            .catch((err) => { alert('에러 발생: ' + err); });

        }
      }
      this.deviceInfo.deviceId = null;
      this.deviceInfo.name = null;
      this.deviceInfo.latitude = null;
      this.deviceInfo.longitude = null;
      this.deviceInfo.description = null;
      this.deviceInfo.register_date = null;
    }

  }
};
</script>

<style scoped>
div {
  margin: 0 5px 0 5px;
}
</style>
