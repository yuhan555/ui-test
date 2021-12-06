<template>
  <div class="FBCall">
    <div class="label">{{ label }}</div>
    <div style="display: flex">
      <el-input v-model="text1" placeholder="" :clearable="false" />
      <el-input v-model="text2" placeholder="" :clearable="false" />
    </div>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ errMsg }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FBCall",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
      value1: ref(""),value2: ref(""),
      text1: ref(""),text2: ref(""),
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

.FBCall {
  text-align: left;
  margin-top: 24px;
  
  .el-input:first-of-type {
    width: 25%;
    margin-right: 8px;

    .el-input__inner {
      padding: 0 10px!important;
    }
  }
}

</style>