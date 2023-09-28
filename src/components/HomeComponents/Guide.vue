<template>
  <div class="guide">
    <div v-for="(item, index) in guideList" :key="index" class="guideItem">
      <el-button type="text" class="guideButton">
        <div>
          <img :src="item.icon" alt="" class="icon">
        </div>
        <div>
          {{ item.text }}
        </div>
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import seal from '../../assets/icons/seal.png'
import bus from '../../assets/icons/bus.png'

@Component
export default class Guide extends Vue{
  public guideList: any = [
    {
      icon: seal,
      text: "用印",
    },
    {
      icon: bus,
      text: "用车"
    }
  ]
}
</script>

<style>
.guide {                                                                                                                                                                                                                                                                      
  display: flex;

  .guideItem {
    margin: 20px 30px;

    .guideButton {
      color: black;
    }
  }

  .icon {
    width: 40px;
    background-color: transparent;
  }
}

</style>