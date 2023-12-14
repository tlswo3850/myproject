<template>
  <v-app id="app"><br>
      <v-container>
          <strong>
              <h2>Category 한식류</h2>
          </strong><br>
          <v-row>
              <v-col cols="3">
                  <v-card @click="goToAboutView1" height="200"
                      img="https://img.siksinhot.com/place/1592202317751271.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">3.7</h3>
                  </div>
                  <h3><router-link :to="{ path: '/ock' }" class="black-link">오씨 칼국수</router-link></h3>
                  <p style="color: #888888;">동구/대전역</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView2" height="200"
                      img="https://img.siksinhot.com/place/1464571961377559.png?w=560&h=448&c=X"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">4.2</h3>
                  </div>
                  <h3><router-link :to="{ path: '/king' }" class="black-link">왕관식당</router-link></h3>
                  <p style="color: #888888;">동구/대전역</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView3" height="200"
                      img="https://img.siksinhot.com/place/1607567246246105.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">4.3</h3>
                  </div>
                  <h3><router-link :to="{ path: '/tree' }" class="black-link">소나무집</router-link></h3>
                  <p style="color: #888888;">중구 - 은행/대흥/선화</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView4" height="200"
                      img="https://img.siksinhot.com/place/1590631892823944.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">3.9</h3>
                  </div>
                  <h3><router-link :to="{ path: '/rice' }" class="black-link">바로 그 집</router-link></h3>
                  <p style="color: #888888;">중구 - 은행/대흥/선화</p>
              </v-col>
          </v-row>

          <br><strong>
              <h2>Category 세계</h2>
          </strong><br>
          <v-row>
              <v-col cols="3">
                  <v-card @click="goToAboutView5" height="200"
                      img="https://img.siksinhot.com/place/1453345834825612.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">4.4</h3>
                  </div>
                  <h3><router-link :to="{ path: '/noodle' }" class="black-link">이태리국시</router-link></h3>
                  <p style="color: #888888;">서구 - 둔산/탄방</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView6" height="200"
                      img="https://img.siksinhot.com/place/1464572325374586.png?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">4.0</h3>
                  </div>
                  <h3><router-link :to="{ path: '/dong' }" class="black-link">동해원</router-link></h3>
                  <p style="color: #888888;">유성구 - 연구단지/테크노밸리</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView7" height="200"
                      img="https://img.siksinhot.com/place/1392621276737647.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">3.9</h3>
                  </div>
                  <h3><router-link :to="{ path: '/seol' }" class="black-link">설해돈</router-link></h3>
                  <p style="color: #888888;">서구 - 둔산/탄방</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView8" height="200"
                      img="https://img.siksinhot.com/place/1675994382900282.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">3.7</h3>
                  </div>
                  <h3><router-link :to="{ path: '/ganamji' }" class="black-link">가남지</router-link></h3>
                  <p style="color: #888888;">유성구 - 연구단지/테크노밸리</p>
              </v-col>
          </v-row>

          <br><br><strong>
              <h2>Category 디저트</h2>
          </strong><br>
          <v-row>
              <v-col cols="3">
                  <v-card @click="goToAboutView9" height="200"
                      img="https://img.siksinhot.com/place/1536044069621434.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">4.3</h3>
                  </div>
                  <h3><router-link :to="{ path: '/bread' }" class="black-link">성심당</router-link></h3>
                  <p style="color: #888888;">중구 - 은행/대흥/선화</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView10" height="200"
                      img="https://img.siksinhot.com/place/1511311080726180.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">4.4</h3>
                  </div>
                  <h3><router-link :to="{ path: '/alohanok' }" class="black-link">알로하녹</router-link></h3>
                  <p style="color: #888888;">중구 - 은행/대흥/선화</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView11" height="200"
                      img="https://img.siksinhot.com/place/1521170663882294.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">4.7</h3>
                  </div>
                  <h3><router-link :to="{ path: '/adobe' }" class="black-link">어도비하우스</router-link></h3>
                  <p style="color: #888888;">중구 - 은행/대흥/선화</p>
              </v-col>
              <v-col cols="3">
                  <v-card @click="goToAboutView12" height="200"
                      img="https://img.siksinhot.com/place/1538012667152333.jpg?w=560&h=448&c=Y"></v-card><br>
                  <div style="display: flex; align-items: center;">
                      <div style="background-color: red; color: white; padding: 4px; border-radius: 5px;">HOT</div>&nbsp;&nbsp;
                      <h3 style="color: orange; margin-right: 5px;">3.7</h3>
                  </div>
                  <h3><router-link :to="{ path: '/pie' }" class="black-link">파이 한모금</router-link></h3>
                  <p style="color: #888888;">동구/대전역</p>
              </v-col>
          </v-row>
          <br><br>
      </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
      goToAboutView1() {
          this.$router.push('/ock');
      },
      goToAboutView2() {
          this.$router.push('/king');
      },
      goToAboutView3() {
          this.$router.push('/tree');
      },
      goToAboutView4() {
          this.$router.push('/rice');
      },
      goToAboutView5() {
          this.$router.push('/noodle');
      },
      goToAboutView6() {
          this.$router.push('/dong');
      },
      goToAboutView7() {
          this.$router.push('/seol');
      },
      goToAboutView8() {
          this.$router.push('/ganamji');
      },
      goToAboutView9() {
          this.$router.push('/bread');
      },
      goToAboutView10() {
          this.$router.push('/alohanok');
      },
      goToAboutView11() {
          this.$router.push('/adobe');
      },
      goToAboutView12() {
          this.$router.push('/pie');
      }

  }
}
</script>
<style>
.black-link {
  color: black;
  /* 글씨를 검은색으로 설정 */
  text-decoration: none;
  /* 링크의 밑줄 제거 */
}
</style>