<template>
  <div class="dateField">
    <div>{{data.label}}</div>
    <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :clearable=false format="YYYY/MM/DD"></el-date-picker>
    <div class="errMsg">{{ data.errMsg }}</div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs , onMounted} from 'vue'

export default defineComponent({
  name: "DatePicker",
  props: {
    data:{
      type:Object,
      default() {
        return {
          label:"欄位",
          errMsg:"必填",
          col:12,
          fieldType:null,
        }
      }
    }
  },
  setup(props) {
    const state = reactive({
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [
        {
          text: 'Today',
          value: new Date(),
        },
        {
          text: 'Yesterday',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        },
        {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        },
      ],
      value1: '',
      value2: '',
    })

    onMounted(() => {
      document.querySelector('.dateField .el-input span:nth-of-type(1) i').classList.remove("el-icon-date");
      document.querySelector('.dateField .el-input span:nth-of-type(2) i').classList.add("el-icon-date");
    })

    return {
      ...toRefs(state),
      props,
    }
  },
})
</script>


<style lang="scss">
.dateField{
  text-align: left;
  margin: 5px;
  .errMsg{
    color:red;
    font-size: 10px;
  }
  .el-input__inner{
    padding-left:15px;
  }
  .el-input__suffix-inner{
      pointer-events: none;
    }
}
</style>