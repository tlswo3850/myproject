<template>
    <v-app id="app">
        <v-system-bar app>
            <v-spacer>페이지가 작동 안되는 경우 새로고침이나 F5를 눌러주세요</v-spacer>
            <v-icon>mdi-square</v-icon>
            <v-icon>mdi-circle</v-icon>
        </v-system-bar>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/about" style="color: inherit; text-decoration: none;">
                <v-toolbar-title>
                    <v-icon left>mdi-silverware-fork-knife</v-icon>
                    대전 음식점 리스트
                    <v-icon left>mdi-silverware-fork-knife</v-icon>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-text-field v-model="searchQuery" append-icon="mdi-magnify" label="음식점 검색" single-line hide-details
                @keypress.enter="searchRestaurant"></v-text-field>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login">
                <v-btn class="blue darken-2">
                    <v-icon left>mdi-login</v-icon>
                    로그인
                </v-btn>
            </router-link>&nbsp;&nbsp;&nbsp;
            <v-btn class="blue darken-2" @click="logout">
                <v-icon left>mdi-logout</v-icon>
                로그아웃
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" fixed temporary>
            <v-toolbar flat height="100px">
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar>
                                <img src="http://randomuser.me/api/portraits/men/44.jpg">
                            </v-list-item-avatar>
                            <v-list-item-title class="title">관리자 페이지</v-list-item-title>
                            <v-list-item-subtitle></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list class="pt-3">
                <v-list-item v-for="item in items" :key="item.text" :href="item.to">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer>
            <router-link to="/about" style="color: inherit; text-decoration: none;">
                <v-btn text value="HOME">
                    <v-icon>목원대학교 정보통신공학과 1860036 이신재</v-icon>
                </v-btn>
            </router-link>
        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data() {
        return {
            drawer: false,
            items: [
                { text: 'HOME', icon: 'mdi-home', to: '/about' },
                { text: '음식점 위치보기', icon: 'mdi-map-marker', to: '/aboutfood' },
                { text: '음식점 예약하기', icon: 'mdi-calendar-clock', to: '/reservation' },
                { text: '음식점 포장하기', icon: 'mdi-food', to: '/pack' },
                { text: '이동 경로', icon: 'mdi-car', to: '/route' },
                { text: '회원관리', icon: 'mdi-star', to: '/member' },
            ],
        }
    },
    methods: {
        searchRestaurant() {
            const query = encodeURIComponent(this.searchQuery);
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        },
        logout() {
            this.$http.get('http://127.0.0.1:8000/logout')
                .then(response => {
                    if (response.status === 200) {
                        alert('로그아웃 되었습니다!!');
                        this.$router.push('/login');  // '/login' 경로로 이동하도록 수정합니다.
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    created() {
        this.$socket.emit('rint', { data: "First Request" });
    }
};
</script>
<style scoped>
a {
    text-decoration: none;
    color: white;
}
</style>
