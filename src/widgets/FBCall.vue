<template>
  <div class="FBCall">
    <div class="label">{{ data.label }}</div>
    <div style="display: flex">
      <el-input v-model="tell" placeholder="" :clearable="false" />
      <el-input v-model="ext" placeholder="" :clearable="false" />
    </div>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ data.errMsg }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FBCall",
  props: {
    data:Object
  },
  setup() {
    return {
      tell: ref(""),
      ext: ref(""),
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