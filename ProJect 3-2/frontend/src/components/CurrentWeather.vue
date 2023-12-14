<template>
    <div>
        <div id="current-weather">
            <div class="lat">위도: {{ lat }}</div>
            <div class="lng">경도: {{ lng }}</div>
            <div class="location">{{ location }}</div>
            <div class="weather">{{ weather }}</div>
            <div class="temperature">{{ temperature }}℃</div>
            <div class="air">{{ airQualityText }} ({{ air }}㎍/m³)</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'current-weather',
    data() {
        return {
            location: '',
            weather: '',
            temperature: 0,
            air: 0,
            airQualityText: '',
            lat: 37.566535,
            lng: 126.977969,
        }
    },
    created() {
        this.$bus.$on('sendCordinate', this.setCordinate);
    },
    methods: {
        setCordinate(cordinate) {
            this.lat = cordinate.lat();
            this.lng = cordinate.lng();

            this.axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&appid=67c78818c6afe50f6425fa397c98a955`)
                .then((response) => {
                    let data = response.data;
                    this.location = data.name;
                    this.weather = data.weather[0].main;
                    this.temperature = (data.main.temp - 273.15).toFixed(1);
                })
                .catch((error) => {
                    console.error('OpenWeatherMap API 호출 중 오류:', error);
                });

            this.axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${this.lat}&lon=${this.lng}&rad=500&key=90705D1E-122C-44AF-8210-0A62A9B607FB`)
                .then((response) => {
                    let data = response.data.data;
                    if (data && data.current && data.current.pollution) {
                        this.air = data.current.pollution.aqius;
                        this.setAirQualityText(this.air);
                    } else {
                        console.error('미세먼지 정보가 없습니다.');
                    }
                })
                .catch((error) => {
                    console.error('AirVisual API 호출 중 오류:', error);
                });
        },
        setAirQualityText(airQuality) {
            if (airQuality >= 0 && airQuality <= 50) {
                this.airQualityText = '좋음';
            } else if (airQuality >= 51 && airQuality <= 100) {
                this.airQualityText = '보통';
            } else if (airQuality >= 101 && airQuality <= 150) {
                this.airQualityText = '나쁨';
            } else {
                this.airQualityText = '';
            }
        }
    }
}
</script>

<style scoped>
.location {
    text-align: center;
    font-size: 40pt;
    color: black;
}

.weather {
    text-align: center;
    font-size: 20pt;
    font-weight: 100;
    color: black;
}

.temperature {
    text-align: center;
    font-size: 50pt;
    font-weight: 100;
    color: black;
}

.air {
    text-align: center;
    font-size: 20pt;
    font-weight: 100;
    color: black;
}
</style>