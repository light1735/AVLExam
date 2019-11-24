<template>
    <div id="app">
        <Layout>
            <Header>
                <C_Menu></C_Menu>
            </Header>
            <Content>
                <router-view />
            </Content>
            <Footer>
                <C_Footer></C_Footer>
            </Footer>
        </Layout>

        <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>-->
    </div>
</template>

<script>
import C_Menu from "@/components/Menu.vue";
import C_Footer from "@/components/Footer.vue";

export default {
    name: "app",
    components: {
        C_Menu,
        C_Footer
    }
};
</script>

<style lang="scss">
html,
body {
    height: 100%;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

.ivu-layout {
    height: 100%;
}

// #nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>
