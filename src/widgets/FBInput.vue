<template>
  <div class="FBInput required error">
    <div class="label">{{ data.label }}</div>
    <el-input v-model="text" placeholder="" :clearable=false :id="data.id"/>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ data.errMsg }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref} from "vue";
export default defineComponent({
  name: "FBInput",
  props: {
    data:Object
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