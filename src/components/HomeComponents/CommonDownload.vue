<template>
  <div class="download">
    <div v-for="(item, index) in downloadList" :key="index" class="downloadItem">
      <el-button type="text" class="downloadButton" icon="el-icon-download">
        {{ item.text }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CommonDownload extends Vue{
  public downloadList: any = [
    {
      text: "用印申请单",
    },
    {
      text: "综合事务办理表",
    },
    {
      text: "合同审核",
    },
    {
      text: "本科生毕业证书学位证书英文翻译件",
    },
    {
      text: "研究生毕业证书学位证书英文翻译件",
    },
    {
      text: "xxxx大学非学历教育证件用印申请单",
    }
  ]
}
</script>

<style>
.download {
  display: flex;
  flex-flow: wrap;
  width: 100%;

  .downloadItem {
    width: 50%;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .downloadButton {
    color: #000;

    &:hover {
      color: red;
      transition: 0.5s;
    }
  }
}

</style>