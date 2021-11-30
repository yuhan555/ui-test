<template>
  <div class="dateField">
    <div>{{ data.label }}</div>

    <input type="text" name="date" id="startUpDate" readonly />



    <div class="errMsg">{{ data.errMsg }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "@/js/bootstrap-datepicker/bootstrap-datetimepicker.min.js";
import "@/js/bootstrap-datepicker/bootstrap-datetimepicker.zh-TW.js";

export default defineComponent({
  name: "DatePicker",
  props: {
    data: {
      type: Object,
      default() {
        return {
          label: "欄位",
          errMsg: "必填",
          col: 12,
          fieldType: null,
        };
      },
    },
  },
  data() {
    return {
      startUpDate: null,
    };
  },
  mounted() {
    $("#startUpDate")
      .datetimepicker({
        format: "RR/mm/dd",
        formatType: "roc",
        language: "zh-TW",
        startView: 2,
        minView: 2,
        autoclose: true,
        minuteStep: 10,
        orientation: "bottom-left",
        container: "html", //讓datetimepicker可以將視窗對到正確位置
      })
      .on("changeDate", () => {
        this.startUpDate = $("#startUpDate").val();
      });

  },
 
});
</script>


<style lang="scss">
.dateField {
  text-align: left;
  margin: 5px;
  .errMsg {
    color: red;
    font-size: 10px;
  }
  .el-input__inner {
    padding-left: 15px;
  }
  .el-input__suffix-inner {
    pointer-events: none;
  }
}
</style>