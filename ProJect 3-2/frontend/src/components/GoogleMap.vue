<template>
    <div>
      <div class="search-container">
        <input type="text" v-model="searchAddress" placeholder="주소를 입력하세요" class="search-input" />
        <button @click="searchLocation" class="search-button">검색</button>
      </div>
      <div id="map-canvas" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'map-canvas',
    data() {
      return {
        map: null,
        mapCenter: { lat: 36.350344101394114, lng: 127.38480778301114 },
        searchAddress: '',
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        this.map = new google.maps.Map(document.getElementById("map-canvas"), {
          center: this.mapCenter,
          zoom: 16,
          maxZoom: 20,
          minZoom: 3,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
          zoomControl: true,
        });
  
        this.$bus.$emit('sendCordinate', this.map.getCenter());
  
        this.$bus.$on('deviceSelected', (selectedDevice) => {
          const { latitude, longitude, name } = selectedDevice;
          this.setMarker(latitude, longitude, name);
          this.map.setCenter({ lat: latitude, lng: longitude });
        });
  
        // 'ce' 마커 추가
        this.setMarker({ lat: 36.341592650318184, lng: 127.42375932432861 }, 'ce');
      },
      searchLocation() {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: this.searchAddress }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            const location = results[0].geometry.location;
            this.map.setCenter(location);
            this.setMarker(location, 'ce');
          } else {
            console.error('Geocode was not successful for the following reason: ' + status);
          }
        });
      },
      setMarker(location, label) {
        const markers = new google.maps.Marker({
          position: location,
          map: this.map,
          label: {
            text: label,
            color: "#FFF",
          },
        });
  
        this.map.addListener('center_changed', () => {
          markers.setPosition(this.map.getCenter());
          this.$bus.$emit('sendCordinate', this.map.getCenter());
        });
  
        this.map.addListener('dragend', () => {
          this.$bus.$emit('sendCordinate', this.map.getCenter());
        });
      },
    },
  };
  </script>
  
  <style scoped>
  #map-canvas {
    width: 100%;
    height: 400px;
  }
  .search-container {
    display: flex;
    margin-bottom: 10px;
  }
  
  .search-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
  }
  
  .search-button {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 4px 4px 0;
    background-color: #f2f2f2;
    cursor: pointer;
  }
  </style>
  