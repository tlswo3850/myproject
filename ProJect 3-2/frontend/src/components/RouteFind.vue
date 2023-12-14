<template>
    <div class="container">
        <div class="latlng">
            <h3>현재위치</h3>
            <div>위도: {{ lat }}</div>
            <div>경도: {{ lng }}</div>
        </div>
        <v-row>
            <v-col cols="6">
                <div class="map-container">
                    <div id="map" style="height: 500px;"></div>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="input-container">
                    <div class="input-group">
                        <label for="startAddress">출발지 주소:</label>
                        <input type="text" id="startAddress" v-model="startAddress" placeholder="주소 입력">
                    </div>
                    <div class="input-group">
                        <label for="endAddress">도착지 주소:</label>
                        <input type="text" id="endAddress" v-model="endAddress" placeholder="주소 입력">
                    </div>
                    <v-btn @click="calculateAndDisplayRoute" color="gray">길찾기</v-btn><br>
                    <v-btn block color="#5DADE2" :to="{ path: '/about' }" style="height: 40px; width: 80%">HOME</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            startAddress: '',
            endAddress: '',
            lat: '',
            lng: '',
            mapWidth: '1000px', // Google Maps 크기 늘리는 부분
            directionsService: null,
            directionsDisplay: null,
            map: null,
            marker: null
        };
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            this.directionsService = new window.google.maps.DirectionsService();
            this.directionsDisplay = new window.google.maps.DirectionsRenderer();

            this.map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: 36.3504, lng: 127.3845 } // 대전시청 위치
            });

            this.directionsDisplay.setMap(this.map);

            this.marker = new window.google.maps.Marker({
                position: { lat: 36.3504, lng: 127.3845 },
                map: this.map,
            });

            this.map.addListener('idle', () => {
                const center = this.map.getCenter();
                this.marker.setPosition(center);
                this.updateMarkerPosition(center.lat(), center.lng());
            });
        },
        calculateAndDisplayRoute() {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: this.startAddress }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    const startLatLng = results[0].geometry.location;
                    geocoder.geocode({ address: this.endAddress }, (results, status) => {
                        if (status === 'OK' && results[0]) {
                            const endLatLng = results[0].geometry.location;

                            this.directionsService.route(
                                {
                                    origin: startLatLng,
                                    destination: endLatLng,
                                    travelMode: 'TRANSIT' // 대중교통으로 경로 탐색
                                },
                                (response, status) => {
                                    if (status === 'OK') {
                                        this.directionsDisplay.setDirections(response);
                                    } else {
                                        window.alert('경로 검색에 실패했습니다. ' + status);
                                    }
                                }
                            );
                        } else {
                            window.alert('도착지 주소를 찾을 수 없습니다.');
                        }
                    });
                } else {
                    window.alert('출발지 주소를 찾을 수 없습니다.');
                }
            });
        },
        updateMarkerPosition(lat, lng) {
            this.lat = lat.toFixed(4);
            this.lng = lng.toFixed(4);
        }
    }
};
</script>

  
<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.latlng {
    margin-bottom: 20px;
}

.map-container {
    position: relative;
}

#map {
    height: 500px;
    width: 100%;
    /* Google Maps 크기 늘리는 부분 */
}

.input-container {
    display: flex;
    flex-direction: column;
}

.input-group {
    margin-bottom: 10px;
}

input[type="text"] {
    padding: 8px;
    margin-left: 8px;
    width: 200px;
}

v-btn {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

v-btn:hover {
    background-color: #0056b3;
}
</style>