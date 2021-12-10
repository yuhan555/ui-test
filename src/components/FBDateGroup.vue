<template>
  <div class="FBDateGroup">
    <div class="label">{{ label }}</div>
    <div class="GroupContent">
      <div style="width: calc(50% - 12px); position: relative">
        <input type="text" name="dateS" class="startDate" placeholder="請選擇日期(起)" style="width: 100%" />
        <img class="icon-calendar" src="../images/icon-calendar.svg" />
        <p>{{ fieldVal }}</p>
      </div>
      <div style="width: 24px">-</div>
      <div style="width: calc(50% - 12px); position: relative">
        <input type="text" name="dateE" class="startDate" placeholder="請選擇日期(迄)" style="width: 100%" />
        <img class="icon-calendar" src="../images/icon-calendar.svg" />
        <p>{{ fieldVal }}</p>
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
    label: String,
    errMsg: String,
    data: {
      type: Object,
      default() {
        return {
          col: 12,
          fieldType: null,
        };
      },
    },
  },

  setup(props) {
    var fieldVal = ref("");
    onMounted(() => {
      $(".startDate").datepicker({
        format: "twy/mm/dd",
        twPop: true,
        orientation: "top",
      });
      // .on("changeDate", () => {
      //   fieldVal.value = $(".startUpDate").val();
      // });
    });

    return {
      props,
      fieldVal,
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
    top: 5px;
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