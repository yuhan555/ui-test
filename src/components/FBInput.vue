<template>
  <div class="FBInput required error">
    <div class="label">{{ label }}</div>
    <el-input v-model="text" placeholder="" :clearable=false />
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ errMsg }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FBInput",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
      text: ref(""),
      hasErr: true,
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

.FBInput {
  text-align: left;
  margin-top: 24px;
 }
</style>