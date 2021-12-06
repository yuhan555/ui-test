<template>
  <div class="FBDateGroup">
    <div class="label">{{ data.label }}</div>
    <div class="GroupContent">
      <div style="width: calc(50% - 12px); position: relative">
        <input type="text" name="dateS" class="startDate" placeholder="請選擇日期(起)" style="width: 100%" v-model.lazy="startText" :id="data.startId"/>
        <img class="icon-calendar" src="../images/icon-calendar.svg" />
      </div>
      <div style="width: 24px">-</div>
      <div style="width: calc(50% - 12px); position: relative">
        <input type="text" name="dateE" class="endDate" placeholder="請選擇日期(迄)" style="width: 100%" v-model.lazy="endText" :id="data.endId"/>
        <img class="icon-calendar" src="../images/icon-calendar.svg" />
      </div>
    </div>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ errMsg }}
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import "@/js/bootstrap-datepicker-tw-master/bootstrap-datepicker.js";

export default defineComponent({
  name: "FBDateGroup",
  props: {
    data:Object
  },

  setup(props) {
    const startText = ref("");
    const endText = ref("");
    onMounted(() => {
      $('#'+props.data.startId).datepicker({
        format: "twy/mm/dd",
        twPop: true,
        orientation: "top",
      }).on("changeDate", () => {
        startText.value = document.getElementById(props.data.startId).value;
      });

      $('#'+props.data.endId).datepicker({
        format: "twy/mm/dd",
        twPop: true,
        orientation: "top",
      }).on("changeDate", () => {
        endText.value = document.getElementById(props.data.endId).value;
      });
      
    });

    return {
      startText,
      endText,
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

.FBDateGroup {
  text-align: left;
  margin-top: 24px;

  //下拉icon 位置
  .el-input__suffix {
    right: 10px;
    top: 8px;
  }

  .el-input__suffix-inner {
    pointer-events: none;
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

  //關閉時鐘icon
  .el-input__prefix {
    display: none;
  }
}

</style>