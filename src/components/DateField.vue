<template>
  <div class="dateField">
    <div>{{ data.label }}</div>

    <input type="text" name="date" id="startUpDate" readonly />
    <p>{{ startUpDate }}</p>

    <div class="errMsg">{{ data.errMsg }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import "@/js/bootstrap-datepicker-tw-master/bootstrap-datepicker.js";
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
      .datepicker({
        format: "twy/mm/dd",
        orientation: "top",
      })
      .on("changeDate", (v) => {
        this.startUpDate = v.format();
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