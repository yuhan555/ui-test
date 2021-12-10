<template>
  <div class="FBDateTime">
    <div class="label">{{ data.label }}</div>
    <div class="GroupContent">
      <div style="width: calc(50% - 12px); position: relative">
        <input type="text" name="date" class="startDate" placeholder="請選擇日期" style="width: 100%" v-model.lazy="dateText" :id="data.dateId"/>
        <img class="icon-calendar" src="../images/icon-calendar.svg" />
      </div>
      <div style="width: 24px"></div>
      <div style="width: calc(50% - 12px)">
        <el-time-select v-model="value" start="08:00" step="00:60" end="24:00" placeholder="請選擇時間" :clearable="false" :id="data.timeId">
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
import { ref,defineComponent, onMounted } from "vue";
import "@/js/bootstrap-datepicker-tw-master/bootstrap-datepicker.js";

export default defineComponent({
  name: "FBDateTime",
  props: {
    data:Object
  },

  setup(props) {
    const dateText = ref("");
    
    onMounted(() => {
     $('#'+props.data.dateId).datepicker({
        format: "twy/mm/dd",
        twPop: true,
        orientation: "top",
      }).on("changeDate", () => {
        dateText.value = document.getElementById(props.data.dateId).value;
      });
    });

    return {
      dateText,
      value: ref(""),
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

.FBDateTime {
  text-align: left;
  margin-top: 24px;

  .el-select {
    width: 100%;
  }

  //下拉icon 位置
  .el-input__suffix {
    right: 10px;
    top: 5px;
  }

  //關閉時鐘icon
  .el-input__prefix {
    display: none;
  }
}

</style>