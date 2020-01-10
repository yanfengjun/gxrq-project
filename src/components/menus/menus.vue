<template>
  <el-aside width="200px">
    <el-menu default-active="1" 
    class="menu-nav"
    router
    :default-active="currentPath"
    text-color="#333333"
    :collapse="isCollapse">
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/map">
        <i class="el-icon-location"></i>
        <span slot="title">街办及企业分布图</span>
      </el-menu-item>
      <el-menu-item index="/jieBanManage">
        <i class="el-icon-menu"></i>
        <span slot="title">街办管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-s-grid"></i>
        <span slot="title">企业管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-s-order"></i>
        <span slot="title">工作下发</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-s-claim"></i>
        <span slot="title">信息上报</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-s-data"></i>
        <span slot="title">统计分析</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-video-camera-solid"></i>
        <span slot="title">视频监控</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-s-platform"></i>
        <span slot="title">基础信息</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-s-tools"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: ['isCollapse'],
  data() {
    return {
       currentPath: location.pathname
    };
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
/*   .menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */
</style>
