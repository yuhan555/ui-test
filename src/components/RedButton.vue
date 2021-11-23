<template>
  <div class="redButton">
    <el-button plain>{{data.label}}</el-button>
  </div>
</template>


<script>
import { defineComponent} from "vue";
export default defineComponent({
  name: "RedButton",
  props: {
    data:{
      type:Object,
      default() {
        return {
          label:"欄位",
          errMsg:"必填",
          col:12,
          fieldType:null,
        }
      }
    }

  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>


<style lang="scss">

.redButton{
  .el-button.is-plain:active, .el-button.is-plain:hover, .el-button.is-plain:focus{
    border-color:red,
  }
  .el-button.is-plain:active, .el-button.is-plain:hover, .el-button.is-plain:focus > span{
    color:red
  }
}
 
</style>