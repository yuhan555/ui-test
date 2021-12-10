<template>
  <div class="FBTime">
    <div class="label">{{ data.label }}</div>
     <el-time-select v-model="value" start="08:00" step="00:60" end="24:00" placeholder="請選擇時間" :clearable="false" :id="data.id">
        </el-time-select>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ errMsg }}
    </div>
  </div>
</template>

<script>
import { ref,defineComponent} from "vue";

export default defineComponent({
  name: "FBTime",
  props: {
    data:Object
  },

  setup() {
    
    
    return {
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

.FBTime {
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