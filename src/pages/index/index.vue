<template>
    <view class="content">
        <image class="logo" src="../../static/logo.png" />
        <view>
            <text class="title">
                {{ title }}
            </text>
            <uni-icons type="contact" size="30"></uni-icons>
        </view>
    </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Index',
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        width: 200rpx;
        height: 200rpx;
        margin: 200rpx auto 50rpx auto;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        color: #8f8f94;
        font-size: 36rpx;
    }
</style>