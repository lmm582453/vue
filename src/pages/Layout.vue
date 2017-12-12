<template>
    <div id="layout">
        <navbar />
        <sidebar />
        <tabs />
        <div id="content">
            <transition name="slide-fade" mode="out-in">
                <keep-alive>
                    <router-view />
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Tabs from '@/components/Tabs'
export default {
    name: 'layout',
    data: () => ({
    }),
    mounted() {
    },
    components: {
        Navbar,
        Sidebar,
        Tabs
    }
}
</script>

<style lang="scss" scoped>
#content {
    overflow: auto;
    width: calc(100vw - 240px);
    height: calc(100vh - 150px);
    padding: 15px 20px 20px 20px;
    background-color: #EEF5FD;
    position: absolute;
    right: 0;
    top: 100px;
    border-radius: 6px;
    .breadcrumb {
        margin-bottom: 20px;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
}
</style>
