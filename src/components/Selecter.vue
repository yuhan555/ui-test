<template>
  <div class="selecter">
     <div>{{ data.label }}</div>
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div v-if="hasErr" class="errMsg">{{ data.errMsg }}</div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Selecter",
  props: {
    data: {
      type: Object,
      default() {
        return {
          label: "欄位",
          errMsg: "必填",
          col: 12,
          fieldType: null,
          option: [],
        };
      },
    },
  },
  setup(props) {
    return {
      props,
      options: ref(props.data.option),
      value: ref(""),
      hasErr:true,
    };
  },
});
</script>

<style lang="scss">
.selecter {
  text-align: left;
  margin: 5px;
  .errMsg{
    color:red;
    font-size: 10px;
  }
  .el-select{
    width: 100%;
  }
}
</style>
