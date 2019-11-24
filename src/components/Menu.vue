<template>
    <div id="Menu">
        <Menu mode="horizontal" theme="dark" active-name="home" @on-select="menuOnSelect">
            <MenuItem :name="routerConfig.home">
                <Icon type="ios-paper" />Home
            </MenuItem>
            <MenuItem :name="routerConfig.about">
                <Icon type="ios-people" />About
            </MenuItem>
            <!-- <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />综合设置
            </MenuItem>-->
        </Menu>
    </div>
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
    methods: {
        menuOnSelect(data) {
            console.log(data);
            this.$router.push(data);
        }
    }
};
</script>