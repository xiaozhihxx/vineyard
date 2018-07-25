<template>
    <div class="user-search">
        <search-box/>
        user-search
        <router-view />
    </div>
</template>

<script>
import {SearchBox} from './components';
export default {
    components: {
        SearchBox
    }
};
</script>

<style>
.user-search {
    width: 100%;
    height: 100%;
}
</style>
