<template>
    <view class="content">
        <image class="logo" src="../../static/logo.png" />
        <view>
            <text class="title">
                {{ title }}
            </text>
        </view>
    </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            title: 'Hello',
        }
    },
    onLoad() {

    },
    methods: {

    },
})
</script>

<style lang="scss">
    .content {
        height: 400rpx;
        text-align: center;
    }

    .logo {
        width: 200rpx;
        height: 200rpx;
        margin-top: 200rpx;
    }

    .title {
        color: #8f8f94;
        font-size: 36rpx;
    }
</style>