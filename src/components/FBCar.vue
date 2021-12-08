<template>
  <div class="FBCar">
    <div class="label">{{ label }}</div>
    <div style="display: flex;">
      <div class="GroupContent" style="padding-right: 5px">
        <div style="width: calc(50% - 12px)"><el-input v-model="text" placeholder="" :clearable="false" /></div>
        <div style="width: 24px">-</div>
        <div style="width: calc(50% - 12px)"><el-input v-model="text" placeholder="" :clearable="false" /></div>
      </div>
      <el-button class="function">
        <span>車牌辨識</span>
        <img src="../images/icon-camera.svg" />
      </el-button>
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
  name: "FBOCR",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
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

.FBCar {
  text-align: left;
  margin-top: 24px;

  // 按鈕上文字
  .el-button > span > span {
    text-align: center;
    position: absolute;
    top: -20px;
    left: 2px;
    color: #01b6ad;
    font-size: 0.75rem;
  }

  .el-button.function {
    margin-top: 3px;
    height: 50px;
    width: 58px;
    position: relative;
    border-radius: 0.5rem;
    padding: 0 8px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;

    --el-button-background-color: #01b6ad;
    --el-button-border-color: #01b6ad;

    &:focus,
    &:hover,
    &:active {
      color: #ffffff;
      background-color: #5acec6;
      border-color: #01b6ad;
    }
  }
}

</style>