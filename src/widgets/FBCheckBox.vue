<template>
  <div class="FBCheckBox">
    <div class="label">{{ data.label }}</div>
    <div class="el-checkbox-group">
      <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="item in data.option" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
      </el-checkbox-group>
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
  name: "FBCheckBox",
  props: {
    data:Object
  },
  setup() {
    return {
      checkList: ref([]),
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