<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/about">About</router-link> |
    <router-link to="/widget">Widgets</router-link>
  </div>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>

<script>
import { ElConfigProvider } from 'element-plus'
import zhTw from'element-plus/es/locale/lang/zh-tw'

export default {
    components: {
      [ElConfigProvider.name]: ElConfigProvider
    },
    setup() {
      
      // 切换为中文
      let locale = zhTw
      return {
        locale
      }
      
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
