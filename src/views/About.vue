<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FBInput label="標題" errMsg="這是必填"/>
    <FBSelect label="選擇" errMsg="這是必填"/>
    <FBDate label="日期選擇" errMsg="這是必填"/>
    <FBDateGroup label="日期群組" errMsg="這是必填"/>
    <FBDateTime label="日期＆時間" errMsg="這是必填"/>
  </div>
</template>

<script>
// @ 是/src的別名
import FBInput from '@/components/FBInput.vue'
import FBSelect from '@/components/FBSelect.vue'
import FBDate from '@/components/FBDate.vue'
import FBDateGroup from '@/components/FBDateGroup.vue'
import FBDateTime from '@/components/FBDateTime.vue'

console.log(FBInput)

export default {
  name: 'About',
  //區域型元件在上層元件裡定義
  components: {
    FBInput,FBSelect,FBDate,FBDateGroup,FBDateTime
  }
}
</script>


