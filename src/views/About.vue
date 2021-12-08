<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FBInput label="標題" errMsg="這是必填"/>
    <FBSelect label="選擇" errMsg="這是必填"/>
    <FBDate label="日期選擇" errMsg="這是必填"/>
    <FBTime label="時間選擇" errMsg="這是必填"/>

    <FBDateGroup label="日期群組" errMsg="這是必填"/>
    <FBDateTime label="日期＆時間" errMsg="這是必填"/>

    <FBRadioBox label="單選框" errMsg="這是必填"/>
    <FBRadioButton label="單選按鈕" errMsg="這是必填"/>
    <FBCheckBox label="多選框" errMsg="這是必填"/>

    <FBCar label="車牌號碼" errMsg="這是必填"/>
    <FBOCR label="OCR-元件" errMsg="這是必填"/>
    <FBMail label="信箱" errMsg="這是必填"/>
    <FBCall label="市話" errMsg="這是必填"/>
    <FBAdress label="地址" errMsg="這是必填"/>

    <FBButtons label="按鈕們"/>
  </div>
</template>

<script>
// @ 是/src的別名
import FBInput from '@/components/FBInput.vue'
import FBSelect from '@/components/FBSelect.vue'
import FBDate from '@/components/FBDate.vue'
import FBTime from '@/components/FBTime.vue'

import FBDateGroup from '@/components/FBDateGroup.vue'
import FBDateTime from '@/components/FBDateTime.vue'

import FBRadioBox from '@/components/FBRadioBox.vue'
import FBRadioButton from '@/components/FBRadioButton.vue'
import FBCheckBox from '@/components/FBCheckBox.vue'

import FBCar from '@/components/FBCar.vue'
import FBOCR from '@/components/FBOCR.vue'
import FBMail from '@/components/FBMail.vue'
import FBCall from '@/components/FBCall.vue'
import FBAdress from '@/components/FBAdress.vue'

import FBButtons from '@/components/FBButtons.vue'

console.log(FBInput)

export default {
  name: 'About',
  //區域型元件在上層元件裡定義
  components: {
    FBInput,FBSelect,FBDate,FBTime,FBDateGroup,FBDateTime,
    FBRadioBox, FBRadioButton, FBCheckBox,
    FBCar, FBOCR, FBMail,FBCall,FBAdress,
    FBButtons
  }
}
</script>

<style lang="scss" src="@/style/vue-common.scss"></style>


