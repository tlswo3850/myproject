<template>
    <div class="container">
        <h1>Google Maps 길찾기</h1>
        <route-table />
        <route-find /><br><br>
    </div>
</template>

<script>
import RouteTable from '../components/RouteTable';
import RouteFind from '../components/RouteFind';
export default {
    name: 'App',
    components: {
        RouteTable,
        RouteFind
    },
    data() {
        return {
        };
    }
};
</script>
  
<style scoped>
</style>
  