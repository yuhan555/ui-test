<template>
  <div class="FBRadioBox">
    <div class="label">{{ data.label }}</div>
    <div class="el-radio-group">
      <el-radio v-for="item in data.option" :key="item.value" v-model="radioVal" :label="item.value">{{item.label}}</el-radio>
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
  name: "FBRadioBox",
  props: {
    data:Object
  },
  setup() {
   
    return {
      radioVal: ref(""),
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

.FBRadioBox {
  text-align: left;
  margin-top: 24px;

  .el-radio-group {
    margin-top: 3px;
    display: block;
  }

  // 基本款樣式
  .el-radio {
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

  //圓圈樣式
  .el-radio__inner,
  .el-radio.is-bordered .el-radio__inner {
    height: 16px;
    width: 16px;
  }

  .el-radio__input.is-checked .el-radio__inner {
    border-color: #01B6AD;
    background: #01B6AD;
  }

  .el-radio.is-bordered.is-checked {
    border-color: #01B6AD;
  }

  .el-radio__input {
      @include mobile {
      vertical-align: text-bottom;
    }
  }

  //選項文字
  .el-radio__label,
  .el-radio.is-bordered .el-radio__label,
  .el-radio__input.is-checked+.el-radio__label {
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
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #c77a00;
    background: #c77a00;
  }

  .el-radio__input.is-checked + .el-radio__label {
    color: #c77a00;
  }

  .el-radio.is-bordered.is-checked {
    border-color: #c77a00;

    &:active {
      background-color: #fff9ef;
    }
  }
}
</style>