<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <RedButton />
    <GreenButton />
    <el-row :gutter="20">
      <el-col :span="ele.col" v-for="(ele,index) in data.fieldList" :key="index">
        <component :is="data.formItemListKey[ele.fieldType]" :data="ele"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ 是/src的別名
// import HelloWorld from "@/components/HelloWorld.vue";
// import RedButton from "@/components/RedButton.vue";
// import GreenButton from "@/components/GreenButton.vue";
// import YellowInput from "@/components/YellowInput.vue";
import data from '@/js/elementMap.js';

console.log(data.fieldList)


export default {
  name: "Home",
  //區域型元件在上層元件裡定義
  components: {
    // HelloWorld,
    // RedButton,
    // YellowInput,
    // GreenButton,
  },
  setup(){
    return {
      data,
    }
  }
};



</script>

<style lang="scss" src="@/style/home.scss"></style>
