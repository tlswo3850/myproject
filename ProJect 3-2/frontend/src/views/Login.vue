<template>
  <v-app id="app">
    <v-main style="padding-top: 0;"> <!-- 패딩 0으로 설정 -->
      <v-container style="position: relative; top: 10%; margin-left: 20%" class="text-xs-center">
        <v-layout row wrap class="text-xs-center">
          <v-flex>
            <v-card flat class="mx-auto" max-width="800">
              <v-row style="margin-top: 60px">
                <v-col>
                  <v-form style="width: 400px; height: 300px">
                    <div class="mx-3">
                      <v-icon color="black" size="30px">person</v-icon>
                      userId
                      <div class="mx-1">
                        <v-text-field placeholder="userId" v-model="userId" required></v-text-field>
                      </div>
                    </div>
                    <div class="mx-3">
                      <v-icon color="black" size="30px">lock</v-icon>
                      userPassword
                      <div class="mx-1">
                        <v-text-field placeholder="userPassword" type="password" v-model="userPassword"
                          required></v-text-field>
                      </div>
                    </div>

                    <v-card-actions>
                      <v-btn color="#2c4f91" dark large block @click="loginSubmit">Login</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                      <v-btn color="#2c4f91" dark large block v-on:click.native="addContact()">회원가입</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ dialogTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="사용자번호" v-model="deviceInfo.Id" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="사용자이름" v-model="deviceInfo.username" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="패스워드" v-model="deviceInfo.password" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="설명" v-model="deviceInfo.description" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="등록일" v-model="deviceInfo.register_date" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="btnClick($event)">취소</v-btn>
              <v-btn color="blue darken-1" text @click="btnClick($event)">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-main>
  </v-app>
</template>
  
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data() {
    return {
      urlinfo: 'http://127.0.0.1:8000/login',
      userId: null,
      userPassword: null,

      urlinfo1: 'http://127.0.0.1:8000/logins',
      deviceInfo: {
        _id: null,
        Id: null,
        username: null,
        password: null,
        description: null,
        register_date: null
      },
      dialog: false,
      dialogTitle: null,
    };
  },
  methods: {
    loginSubmit() {
      let saveData = {};
      saveData.username = this.userId;
      saveData.password = this.userPassword;

      try {
        axios.post(this.urlinfo, qs.stringify(saveData), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          //               withCredentials: true
        }).then((res) => {
          if (res.status === 200) {
            // 로그인 성공시 처리해줘야할 부분
            if (res.data.code === 0) {        //로그인 실패
              alert('로그인 실패');
              this.$router.push('/Member');
            } else if (res.data.code === 2) {  //접근제한 페이지
              alert('접근제한 페이지');
              this.$router.push('/fail');
            } else if (res.data.code === 1) {
              alert('로그인 성공');
              this.$router.push('/about');
            }
            // 로그인 버튼 모양 바꾸어주기
          } else if (res.status === 401) {
            alert(res.data.message);
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    //회원가입
    addContact() {
      this.dialog = true;
      this.dialogTitle = "회원가입";
      this.deviceInfo.register_date = Date.now();
    },
    btnClick($event) {
      this.dialog = false;
      if ($event.target.innerHTML == "확인") {
        axios.post(this.urlinfo1, {
          Id: this.deviceInfo.Id, username: this.deviceInfo.username, password: this.deviceInfo.password, description: this.deviceInfo.description
          , register_date: this.deviceInfo.register_date
        }, { withCredentials: true })
          .then(() => {
            axios.get(this.urlinfo1, { withCredentials: true }) //서버에 요청하기
              .then((res) => {
                //console.log(res.data); //성공시
                alert("연락처 추가 성공");
              })
              .catch((err) => {
                alert('에러 발생: ' + err); //에러 발생
              });

          })
          .catch((err) => {
            alert('에러 발생: ' + err); //에러 발생
          });
      }
      this.deviceInfo.Id = null;
      this.deviceInfo.username = null;
      this.deviceInfo.password = null;
      this.deviceInfo.description = null;
      this.deviceInfo.register_date = null;
    }
  },
};
</script>
<style></style>