<template>
  <div class="FBDateTime">
    <div class="label">{{ label }}</div>
    <div class="GroupContent">
      <div style="width: calc(50% - 12px); position: relative">
        <input type="text" name="date" class="startUpDate" placeholder="請選擇日期" style="width: 100%"/>
        <img class="icon-calendar" src="../images/icon-calendar.svg" />
        <p>{{ fieldVal }}</p>
      </div>
      <div style="width: 24px"></div>
      <div style="width: calc(50% - 12px)">
        <el-time-select v-model="value" start="08:00" step="00:60" end="24:00" placeholder="請選擇時間" :clearable="false">
        </el-time-select>
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
  name: "FBDate",
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
      $(".startUpDate").datepicker({
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

// 時間選擇
data() {
    return {
      value: "",
    }
  },

});
</script>


<style lang="scss">
@mixin mobile {
  @media (max-width: 390px) {
    @content;
  }
}

.FBDateTime {
  text-align: left;
  margin-top: 24px;

  .el-select {
    width: 100%;
  }

  //下拉icon 位置
  .el-input__suffix {
    right: 10px;
    top: 8px;
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