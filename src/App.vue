<script lang="ts">
/* eslint-disable vue/require-name-property */
// App 页面 不能有 name
import Vue from 'vue'
export default Vue.extend({
    mpType: 'app',
    onLaunch() {
        // console.log('App Launch')
    },
    onShow() {
        // console.log('App Show')
    },
    onHide() {
        // console.log('App Hide')
    },
})
</script>

<style>
    /* 每个页面公共css */
</style>