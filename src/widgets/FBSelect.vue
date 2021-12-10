<template>
  <div class="FBSelect customer">
    <div class="label">{{ data.label }}</div>
    <el-select v-model="value" placeholder="請選擇">
      <el-option
        v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :id="data.id"
      >
      </el-option>
    </el-select>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ data.errMsg }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FBSelect",
  props: {
   data:Object
  },
  setup(props) {
    return {
      options: ref(props.data.option),
      value: ref(""),
      hasErr: false,
    };
  },
});
</script>


<style lang="scss">
@mixin mobile {
  @media (max-width: 390px) {
    @content;
  }
}

.FBSelect {
  text-align: left;
  margin-top: 24px;

  .el-select {
    width: 100%;
  }

  // 下拉icon 位置
  .el-input__suffix {
    right: 10px;
    top: 5px;
  }
}

</style>