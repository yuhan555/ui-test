<template>
  <div class="widgets">
    <h1>This is widget page</h1>
    <el-row :gutter="20">
      <el-col :span="ele.col" v-for="(ele,index) in data.fieldList" :key="index">
        <component :is="data.formItemListKey[ele.fieldType]" :data="ele"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import data from '@/js/elementMap.js';

export default {
  name: "Widgets",

  components: {
    
  },
  setup(){
    return {
      data,
    }
  }
};



</script>

<style lang="scss" src="@/style/vue-common.scss"></style>
<style>
.widgets{
  padding: 50px;
}

</style>
