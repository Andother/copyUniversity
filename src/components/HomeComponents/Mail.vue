<template>
  <div class="mail">
    <div v-for="(item, index) in downloadList" :key="index" class="mailItem">
      <el-button type="text" class="mailButton">
        {{ item.text }} {{ index + 1}}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Mail extends Vue{
  public downloadList: any = [
    {
      text: "邮件",
    },
    {
      text: "邮件",
    },
    {
      text: "邮件",
    },
    {
      text: "邮件",
    },
    {
      text: "邮件",
    },
    {
      text: "邮件",
    },
  ]
}
</script>

<style>
.mail {
  display: flex;
  flex-flow: wrap;
  width: 100%;

  .mailItem {
    width: 100%;
    padding-left: 10px;
  }

  .mailButton {
    color: #000;

    &:hover {
      padding-left: 20px;
      color: red;
      transition: 0.5s;
    }
  }
}

</style>