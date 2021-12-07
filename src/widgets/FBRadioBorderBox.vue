<template>
  <div class="FBRadioBorderBox">
    <div class="label">{{ data.label }}</div>
    <div class="el-radio-group">
      <el-radio v-for="item in data.option" :key="item.value" v-model="radioVal" :label="item.value" border>{{item.label}}</el-radio>
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
  name: "FBRadioBorderBox",
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

.FBRadioBorderBox {
  text-align: left;
  margin-top: 24px;

  .el-radio-group {
    margin-top: 3px;
    display: block;
  }

  // Border款樣式
  .el-radio.is-bordered {
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

    //取消預設相連radio右margin10px
    + .el-radio.is-bordered {
      margin-left: 0px;
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