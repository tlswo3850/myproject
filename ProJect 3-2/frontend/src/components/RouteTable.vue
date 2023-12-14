<template>
    <div id="app">
      <v-data-table :headers="headers" :items="items" class="elevation-1">
        <template v-slot:item="row">
          <tr>
            <td>{{ row.item.name }}</td>
            <td>{{ row.item.latitude }}</td>
            <td>{{ row.item.longitude }}</td>
            <td>{{ row.item.description }}</td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
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
          { text: '음식집', align: 'left', value: 'name' },
          { text: '위도', align: 'left', value: 'latitude' },
          { text: '경도', align: 'left', value: 'longitude' },
          { text: '주소', align: 'left', value: 'description' }
        ],
        items: []
      }
    },
    created() {
      axios.get(this.urlinfo) //서버에 요청하기
        .then((res) => {
          console.log(res.data); //성공시
          this.items = res.data;
        })
        .catch((err) => {
          alert('에러 발생: ' + err); //에러 발생
        });
    },
    methods: {
      btnClick($event) {
        this.dialog = false;
        if ($event.target.innerHTML == "확인") {
          if (this.dialogTitle == "추가") {
            axios.post(this.urlinfo, {
              deviceId: this.deviceInfo.deviceId, name: this.deviceInfo.name, latitude: this.deviceInfo.latitude, longitude: this.deviceInfo.longitude, description: this.deviceInfo.description
              , register_date: this.deviceInfo.register_date
            })
              .then(() => {
                axios.get(this.urlinfo) //서버에 요청하기
                  .then((res) => {
                    //console.log(res.data); //성공시
                    this.items = res.data;
                    alert("맛집 추가 성공");
                  })
                  .catch((err) => {
                    alert('에러 발생: ' + err); //에러 발생
                  });
  
              })
              .catch((err) => {
                alert('에러 발생: ' + err); //에러 발생
              });
          }
          else if (this.dialogTitle == "수정") {
            //alert("입력된 정보 : " + "이메일 : " + this.contactInfo.email + " 패스워드 : " + this.contactInfo.password);
            axios.put(this.urlinfo + '/' + this.deviceInfo.deviceId, {
              deviceId: this.deviceInfo.deviceId, name: this.deviceInfo.name, latitude: this.deviceInfo.latitude,
              longitude: this.deviceInfo.longitude, description: this.deviceInfo.description,
              register_date: this.deviceInfo.register_date
            })
              .then(() => {
                axios.get(this.urlinfo) //서버에 요청하기
                  .then((res) => {
                    //console.log(res.data); //성공시
                    this.items = res.data;
                    alert("업데이트 성공");
                  })
                  .catch((err) => {
                    alert('에러 발생: ' + err); //에러 발생
                  });
              })
              .catch((err) => {
                alert('에러 발생: ' + err); //에러 발생
              });
  
          }
          else {
            axios.delete(this.urlinfo + '/' + this.deviceInfo.deviceId, { data: { deviceId: this.deviceInfo.deviceId } })
              .then((result) => {
                console.log("삭제 후" + result); //성공시
                axios.get(this.urlinfo) //서버에 요청하기
                  .then((res) => {
                    this.items = res.data;
                    alert("삭제 성공");
                  })
                  .catch((err) => {
                    alert(' 삭제 후 데이터 가져오는 중 에러 발생: ' + err); //에러 발생
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
  }
  </script>
  <style scoped>
  div {
    margin: 0 5px 0 5px;
  }
  </style>
  