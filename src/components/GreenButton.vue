<template>
  <div class="greenButton">
    <el-button plain>Plain</el-button>
  </div>
</template>


<script>
export default {
  name: 'GreenButton',
}
</script>


<style lang="scss">
.greenButton{
  display: inline-block;
  margin: 5px;
  .el-button.is-plain:active, .el-button.is-plain:hover, .el-button.is-plain:focus{
    border-color:green,
  }
  .el-button.is-plain:active, .el-button.is-plain:hover, .el-button.is-plain:focus > span{
    color:green
  }
}
 
</style>