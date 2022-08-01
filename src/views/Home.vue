<template>
    <div class="home">
        <myTitle />
        <div class="box">
            <div class="box_left">
                <menuList></menuList>
            </div>
            <div class="box_right">
                <el-main>
                    <router-view />
                </el-main>
            </div>
        </div>
    </div>
</template>

<script>
import myTitle from '../components/common/myTitle.vue'
import menuList from '../components/Home/menuList.vue'
export default {
    components: {
        myTitle,
        menuList,
    }
}
</script>

<style lang="scss" scoped>
.home {
    .box {
        display: flex;
        justify-content: space-between;
        background: #F4F9FD;
        .box_left {
            // width: 20%;
            // border-right: 1px solid rgba(0, 0, 0, 0.12);
            // box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.1);
            height: calc(100vh - 77px);
            width: 256px;
            background-color: #ffffff;
        }
        .box_right {
            width: calc(100% - 256px);
            height: calc(100vh - 77px);
            background-color: #ffffff;
            margin: 0;
            padding: 0;
        }
    }
}
</style>
