<template>
  <div class="FBMail">
    <div class="label">{{ data.label }}</div>
    <el-input v-model="text" placeholder="" :clearable="false" />
    <div class="mailGroup">
      <el-button @click="setMailAdd('@gmail.com')"><span>@gmail.com</span></el-button>
      <el-button @click="setMailAdd('@outlook.com')"><span>@outlook.com</span></el-button>
      <el-button @click="setMailAdd('@yahoo.com')"><span>@yahoo.com</span></el-button>
      <el-button @click="setMailAdd('@hotmail.com')"><span>@hotmail.com</span></el-button>
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
  name: "FBInput",
  props: {
    data:Object
  },
  setup() {
    const text = ref("");
    function setMailAdd(add){
      text.value = text.value.split('@')[0] + add;
    }

    return {
      text,
      setMailAdd,
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