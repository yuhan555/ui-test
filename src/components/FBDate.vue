<template>
  <div class="FBDate customer error required">
    <div class="label">{{ label }}</div>
    <div style="position: relative">
      <input type="text" name="date" class="startUpDate" v-model="fieldVal" />
      <img class="icon-calendar" src="../images/icon-calendar.svg" />
      <p>{{ fieldVal }}</p>
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
      hasErr: true,
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

.FBDate {
  text-align: left;
  margin-top: 24px;
  
}

</style>