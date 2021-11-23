<template>
    <div class="yellow">
      <div>{{ data.label }}</div>
      <el-input v-model="text" placeholder="" class="customer" />
      <div v-if="hasErr" class="errMsg">{{ data.errMsg }}</div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "YellowInput",
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
      text: ref(""),
      hasErr: true,
      props,
      //isCustomer:true,
    };
  },
});
</script>

<style lang="scss">
.yellow {
  text-align: left;
  margin: 5px;
  .el-input__inner {
    background-color: pink;
  }
  .customer .el-input__inner {
    background-color: lightyellow;
  }
  .errMsg{
    color:red;
    font-size: 10px;
  }
}
</style>
