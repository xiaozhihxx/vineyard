<template>
    <div id="app">
        <!-- <yard-header /> -->
        <aside-nav/>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view/>
    </div>
</template>

<script>
import {YardHeader, AsideNav} from 'components';
import 'font-awesome/css/font-awesome.css';

export default {
    name: 'App',
    components: {
        YardHeader,
        AsideNav
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
