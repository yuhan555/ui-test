<template>
  <div class="FBButtons">
    <div class="label">{{ label }}</div>
    <el-row>
      <el-button type="base">base</el-button>
      <el-button type="base" round>base</el-button>
      <el-button type="base" plain>base</el-button>
      <el-button type="base" plain round>base</el-button>
      <el-button type="base" round disabled>base</el-button>
    </el-row>

    <el-row>
      <el-button type="main">main</el-button>
      <el-button type="main" round>main</el-button>
      <el-button type="main" plain>main</el-button>
      <el-button type="main" plain round>main</el-button>
      <el-button type="main" round disabled>main</el-button>

      <el-button type="function">function</el-button>
      <el-button type="function" round>function</el-button>
      <el-button type="function" plain>function</el-button>
      <el-button type="function" plain round>function</el-button>
      <el-button type="function" round disabled>function</el-button>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "FBButtons",
  props: {
    label: String,
  },
  setup() {
    return {
      text: ref(""),
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

.FBButtons {
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
  @include mobile {
    font-size: 1rem;
  }

  .el-row {
    margin: 32px 0;
  }

  .el-button {
    margin: 0 0 0 24px;
    height: 50px;
    border-radius: 0.5rem;
    padding: 0 16px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;

    @include mobile {
      width: calc(50% - 12px);
      margin: 8px 24px 0 0;
    }

    &:nth-child(2n) {
      @include mobile {
        margin-right: 0;
      }
    }
  }

  .el-button + .el-button {
    margin-left: 24px;
    @include mobile {
      margin-left: 0;
    }
  }

  .el-button.is-round {
    border-radius: 25px;
  }

  .el-button.is-disabled,
  .el-button.is-disabled:focus,
  .el-button.is-disabled:hover {
    background-color: #ececec;
    border-color: #cccccc;
  }

  // 各顏色樣式

  .el-button--base {
    --el-button-background-color: #ffae2d;
    --el-button-border-color: #ffae2d;

    &:focus,
    &:hover,
    &:active {
      color: #ffffff;
      background-color: #f7bf66;
      border-color: #ffae2d;
    }
  }
  .el-button--base.is-plain {
    --el-button-background-color: #ffffff;
    color: #ffae2d;

    &:hover {
      color: #ffffff;
      background-color: #f7bf66;
      border-color: #ffae2d;
    }
  }

  .el-button--main {
    --el-button-background-color: #007dbc;
    --el-button-border-color: #007dbc;

    &:focus,
    &:hover,
    &:active {
      color: #ffffff;
      background-color: #1f8dc4;
      border-color: #007dbc;
    }
  }
  .el-button--main.is-plain {
    --el-button-background-color: #ffffff;
    color: #007dbc;

    &:hover {
      color: #ffffff;
      background-color: #1f8dc4;
      border-color: #007dbc;
    }
  }

  .el-button--function {
    --el-button-background-color: #01b6ad;
    --el-button-border-color: #01b6ad;

    &:focus,
    &:hover,
    &:active {
      color: #ffffff;
      background-color: #5acec6;
      border-color: #01b6ad;
    }
  }
  .el-button--function.is-plain {
    --el-button-background-color: #ffffff;
    color: #01b6ad;

    &:hover {
      color: #ffffff;
      background-color: #5acec6;
      border-color: #01b6ad;
    }
  }
}
</style>
