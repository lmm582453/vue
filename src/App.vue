<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app {
  .el-menu {
    border: none;
  }
  .el-card {
    .el-card__header {
      padding: 30px 20px;
    }
  }
  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
}

.el-tabs__nav-wrap::after {
  background-color: #FFF;
}

.pagination {
  margin-top: 20px;
}
</style>
