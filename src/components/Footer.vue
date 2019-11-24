<template>
    <div id="Footer">1</div>
</template>

<script>
import RouterConfig from "@/router/config";

export default {
    data() {
        return {
            routerConfig: {
                home: RouterConfig.home,
                about: RouterConfig.about
            }
        };
    },
    mounted() {},
    methods: {}
};
</script>

<style lang="scss">
#Footer {
    background-color: #2d8cf0;
    height: 3rem;
}
</style>