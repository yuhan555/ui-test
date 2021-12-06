<template>
  <div class="FBMail">
    <div class="label">{{ label }}</div>
    <el-input v-model="text" placeholder="" :clearable="false" />
    <div class="mailGroup">
      <el-button><span>@gmail.com</span></el-button>
      <el-button><span>@outlook.com</span></el-button>
      <el-button><span>@yahoo.com</span></el-button>
      <el-button><span>@hotmail.com</span></el-button>
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
  name: "FBInput",
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

.FBMail {
  text-align: left;
  margin-top: 24px;

  .el-button {
    font-size: 0.75rem;
    margin: 10px 0 0 5px;
    border-radius: 25px;
    padding: 0 6px;
    min-height: 32px;

    & + .el-button {
      margin-left: 5px;
    }

    &:hover {
      color: #ffffff;
      background-color: #01b6ad;
      border-color: #01b6ad;
    }

    &:active {
      color: #01d6ad;
      border-color: #01b6ad;
    }
  }
}

</style>