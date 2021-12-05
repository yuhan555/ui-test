<template>
  <div class="FBRadioButton">
    <div class="label">{{ label }}</div>
    <div class="el-radio-group">
      <el-radio-group v-model="radio1">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington"></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
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
  name: "FBRadioButton",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
      radio1: ref("選項一"),
      radio2: ref("選項二"),
      radio3: ref("選項三"),
      radio4: ref("選項四"),
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

.FBRadioButton {
  text-align: left;
  margin-top: 24px;

  .el-radio-group {
    margin-top: 3px;
    display: block;
  }

  .el-radio-button {
    margin-right: 24px;
    margin-bottom: 8px;
    @include mobile {
      width: calc(50% - 12px);
    }

    &:nth-child(2n) {
      @include mobile {
        margin-right: 0;
      }
    }

    .el-radio-button__inner {
      min-width: 100px;

      color: #535353;

      @include mobile {
        width: 100%;
      }
    }
    .el-radio-button__inner,
    &:first-child .el-radio-button__inner,
    &:last-child .el-radio-button__inner {
      border-radius: 0.5rem;
      border: 1px solid #cbcbcb;
    }
  }
}

.el-radio-button,
.el-radio-button__original-radio:checked + .el-radio-button__inner {
  color: #ffffff;
  --el-radio-button-checked-background-color: #01b6ad;
  --el-radio-button-checked-border-color: transparent;
}

//經辦表單內的客戶欄位
.customer {
  .el-radio-button {
    --el-radio-button-checked-background-color: #c77a00;
    --el-radio-button-checked-border-color: transparent;
  }
  .el-radio-button__original-radio:checked + .el-radio-button__inner {
    background-color: #c77a00;
  }
}
</style>