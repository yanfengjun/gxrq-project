<template>
  <el-container class="index-box">
    <el-header height='80px'>
      <headers />
    </el-header>
    <el-container class="bom-box">
      <el-aside width="asideWidth">
        <menus :isCollapse="isCollapse" />
      </el-aside>
      <el-main >
        <router-view v-if="isRouterAlive" />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.index-box {
  height: 100%;
  .bom-box {
     height: calc(100% - 80px); 
    .el-main {
      background-color: #f4f4f4;
      overflow-y: auto;
      padding: 10px;
    }
  }    
  .el-aside {
    background-color: #ffffff;
    overflow-y: auto;
/*     height: 100vh;
    min-height: 100%; */
    .logo {
      background-color: #20222A;
      color: rgba(255,255,255,.8);
      text-align: center;
      height: 60px;
      padding-top: 16px;
      font-size: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid gray;
    }
  }
  .el-header {
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 99;
  }
}
</style>

<script>
import Menus from "@/components/menus/menus";
import Headers from "@/components/header/header";
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  components: {
    Menus,
    Headers
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
    asideWidth() {
      return this.$store.state.isCollapse ? "auto" : "200px";
    }
  }
};
</script>