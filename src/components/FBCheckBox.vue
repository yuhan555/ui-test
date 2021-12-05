<template>
  <div class="FBCheckBox">
    <div class="label">{{ label }}</div>
    <div class="el-checkbox-group">
      <el-checkbox v-model="checked1" label="1" border>多選一</el-checkbox>
      <el-checkbox v-model="checked2" label="2" border>多選二</el-checkbox>
      <el-checkbox v-model="checked3" label="3" >多選三</el-checkbox>
      <el-checkbox v-model="checked4" label="4" >多選四</el-checkbox>
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
  name: "FBCheckBox",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
      checked1: ref("1"),
      checked2: ref("1"),
      checked3: ref("1"),
      checked4: ref("1"),
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

.FBCheckBox {
  text-align: left;
  margin-top: 24px;

  .el-checkbox-group {
    margin-top: 3px;
  }

  // 基本款樣式
  .el-checkbox {
    margin: 0 0 8px 21px;

    @include mobile {
      display: block;
    }

    &:first-child {
      margin-top: 8px;
    }

    &:last-child {
      @include mobile {
        margin-bottom: 0;
      }
    }
  }

  // Border款樣式
  .el-checkbox.is-bordered {
    width: calc(50% - 12px);
    margin: 0 24px 24px 0;
    padding: 12px 20px 10px 20px;
    border-radius: 0.5rem;
    height: 45px;
    background-color: #ffffff;
    border-color: #cccccc;

    @include mobile {
      width: 100%;
      margin-right: 0;
      margin-bottom: 8px;
    }

    //一列2欄排列時偶數個mr=0
    &:nth-child(2n) {
      margin-right: 0;
    }

    //最後一與倒數第二個選項為0
    @include mobile {
      &:last-child,
      &:nth-last-child(2) {
        margin-bottom: 0px;
      }
    }

    //取消預設相連checkbox右margin10px
    + .el-checkbox.is-bordered {
      margin-left: 0px;
    }
  }

  //勾選框大小
  .el-checkbox__inner,
  .el-checkbox.is-bordered .el-checkbox__inner {
    transform: scale(1.145);
    //height: 16px;
    //width: 16px;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    border-color: #01B6AD;
    background: #01B6AD;
  }

  .el-checkbox.is-bordered.is-checked {
    border-color: #01B6AD;
  }


  //選項文字
  .el-checkbox__label,
  .el-checkbox.is-bordered .el-checkbox__label,
  .el-checkbox__input.is-checked+.el-checkbox__label {
    font-size: 1.125rem;
    color: #535353;
    font-weight: 400;
    padding-left: 8px;
    vertical-align: middle;

    @include mobile {
      font-size: 1rem;
      vertical-align: baseline;
    }
  }
}

//經辦表單內的客戶欄位
.customer {
  .el-checkbox__input.is-checked .el-checkbox__inner {
    border-color: #c77a00;
    background: #c77a00;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #c77a00;
  }

  .el-checkbox.is-bordered.is-checked {
    border-color: #c77a00;

    &:active {
      background-color: #fff9ef;
    }
  }
}
</style>