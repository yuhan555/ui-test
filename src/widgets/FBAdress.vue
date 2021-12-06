<template>
  <div class="FBAdress">
    <div class="label">{{ label }}</div>
    <div id="postcode-group" style="display: flex">
      <el-input v-model="text1" placeholder="" :clearable="false" />
      <el-select v-model="value1" placeholder="請選擇">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select v-model="value2" placeholder="請選擇">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div>
      <el-input style="margin-top: 8px;" v-model="text2" placeholder="" :clearable="false" />
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
  name: "FBAdress",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
      options1: ref([
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

      options2: ref([
        {
          value: "OptionA",
          label: "OptionA",
        },
        {
          value: "OptionB",
          label: "OptionB",
        },
        {
          value: "OptionC",
          label: "OptionC",
        },
        {
          value: "OptionD",
          label: "OptionD",
        },
        {
          value: "OptionE",
          label: "OptionE",
        },
      ]),

      value1: ref(""),value2: ref(""),
      text1: ref(""),text2: ref(""),
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

.FBAdress {
  text-align: left;
  margin-top: 24px;

  #postcode-group > .el-input:first-of-type {
    width: 20%;

    .el-input__inner {
      padding: 0 10px!important;
    }
  }

  .el-select {
    width: calc(40% - 8px);
    margin-left: 8px;
  }

  // 下拉icon 位置
  .el-input__suffix {
    right: 10px;
    top: 5px;
  }

  .el-icon-arrow-up:before {
    font-size: 1rem;
    color: #01b6ad;
    font-weight: 600;
  }
  // disabled 下拉icon
  .el-select .el-input.is-disabled .el-icon-arrow-up:before {
    color: #cccccc;
  }
}

</style>