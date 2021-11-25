<template>
  <div class="FBSelect">
    <div class="label">{{ label }}</div>
    <el-select v-model="value" placeholder="請選擇">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="error-info" v-if="hasErr">
      <svg
        width="13px"
        height="11px"
        viewBox="0 0 13 11"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Error</title>
        <defs>
          <path
            d="M7.49988182,83.5263158 C7.82607222,83.5263158 8.09080646,83.7856842 8.09080646,84.1052632 C8.09080646,84.4248421 7.82607222,84.6842105 7.49988182,84.6842105 C7.17369141,84.6842105 6.90895717,84.4248421 6.90895717,84.1052632 C6.90895717,83.7856842 7.17369141,83.5263158 7.49988182,83.5263158 Z M7.49988182,79.4736842 C7.82607222,79.4736842 8.09080646,79.7330526 8.09080646,80.0526316 L8.09080646,80.0526316 L8.09080646,82.3684211 C8.09080646,82.688 7.82607222,82.9473684 7.49988182,82.9473684 C7.17369141,82.9473684 6.90895717,82.688 6.90895717,82.3684211 L6.90895717,82.3684211 L6.90895717,80.0526316 C6.90895717,79.7330526 7.17369141,79.4736842 7.49988182,79.4736842 Z M12.7382515,85.4675263 C12.6029298,85.702 12.3393774,85.8421053 12.0332784,85.8421053 L2.96613068,85.8421053 C2.66003172,85.8421053 2.39647932,85.702 2.26174851,85.4675263 C2.19792864,85.3575263 2.11401735,85.1334737 2.27179422,84.8787368 L6.80477716,77.5156842 C7.08073897,77.0675789 7.91867011,77.0675789 8.19463192,77.5156842 L12.7282058,84.8787368 C12.8853917,85.1334737 12.8020714,85.3575263 12.7382515,85.4675263 M13.7404597,84.2806842 L9.20688583,76.9170526 C8.85292197,76.3427368 8.21472336,76 7.49970454,76 C6.78468572,76 6.14648711,76.3427368 5.79311417,76.9170526 L1.25954031,84.2806842 C0.923304191,84.8266316 0.913258472,85.4831579 1.23235778,86.0366316 C1.57450315,86.6312105 2.23929337,87 2.96613068,87 L12.0332784,87 C12.7607066,87 13.4249059,86.6312105 13.7676422,86.0366316 C14.0867415,85.4831579 14.0766958,84.8266316 13.7404597,84.2806842"
            id="path-1"
          ></path>
        </defs>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Phone/Input/Textfeild/Error"
            transform="translate(-1.000000, -76.000000)"
          >
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1"></use>
            </mask>
            <use
              id="Error"
              fill="#FF0000"
              fill-rule="nonzero"
              xlink:href="#path-1"
            ></use>
          </g>
        </g></svg
      >{{ errMsg }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FBSelect",
  props: {
    label: String,
    errMsg: String,
  },
  setup() {
    return {
      options: ref([
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ]),
      value: ref(""),
      text: ref(""),
      hasErr: false,
    };
  },
});
</script>


<style lang="scss">
@mixin mobile {
  @media (max-width: 375px) {
    @content;
  }
}

.FBSelect {
  text-align: left;
  margin-top: 24px;

  .label {
    color: #727272;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;

    @include mobile {
      font-size: 0.875rem;
    }
  }

  .el-select {
    width: 100%;
  }

  .el-input__inner {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #535353;
    background-color: #ffffff;
    border-color: #cccccc;
    border-radius: 0.5rem;
    padding: 0 20px !important;
    font-size: 1.125rem;
    margin-top: 3px;

    @include mobile {
      font-size: 1rem;
    }
  }
  // 下拉icon 位置
  .el-input__suffix {
    right: 10px;
    top: 5px;
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
}

//必填欄位
.required {
  .label:before {
    content: "*";
    color: #ff0000;
    font-size: 1.2rem;
  }
}

//檢核錯誤
.error {
  .el-input__inner {
    background-color: #fff7f6;
    border: 1px solid #ff0000;
  }

  .error-info {
    color: #ff0000;
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    align-items: flex-start;
  }

  svg {
    padding: 3px 3px 0px 1px;
  }

}

//經辦表單內的客戶欄位
.customer {
  .el-input__inner {
    background-color: #fff9ef;
  }

    .el-icon-arrow-up:before {
    font-size: 1rem;
    color: #c77a00;
    font-weight: 600;
  }
}
</style>