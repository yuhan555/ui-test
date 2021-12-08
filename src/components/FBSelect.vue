<template>
  <div class="FBSelect customer">
    <div class="label">{{ label }}</div>
    <el-select v-model="value" placeholder="請選擇">
      <el-option
        v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ errMsg }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FBSelect",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
      options: ref([
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ]),
      value: ref(""),
      text: ref(""),
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