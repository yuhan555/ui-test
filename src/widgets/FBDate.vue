<template>
  <div class="FBDate customer error required">
    <div class="label">{{ data.label }}</div>
    <div style="position: relative">
      <input type="text" name="date" class="startDate" :id="data.id" v-model.lazy="text"/>
      <img class="icon-calendar" src="../images/icon-calendar.svg" />
    </div>
    <div class="error-info" v-if="hasErr">
      <img class="icon-error" src="../images/icon-error.svg" />
      {{ data.errMsg }}
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted} from "vue";
import "@/js/bootstrap-datepicker-tw-master/bootstrap-datepicker.js";

export default defineComponent({
  name: "FBDate",
  props: {
    data:Object
  },

  setup(props) {
    const text = ref("");
    let val;

    onMounted(() => {
      $('#'+props.data.id).datepicker({
        format: "twy/mm/dd",
        twPop: true,
        orientation: "top",
      }).on("changeDate", () => {
        text.value = document.getElementById(props.data.id).value;
      });
    });

    return {
      text,
      val,
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