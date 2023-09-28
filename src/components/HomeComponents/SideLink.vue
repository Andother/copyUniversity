<template>
  <div class="sideLink">
    <div v-for="(item, index) in downloadList" :key="index" class="linkItem">
      <img :src=item.img alt="">
      <div class="linkText">{{ item.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import linkImage1 from '../../assets/images/side/side_kuaijie_1.png'
import linkImage2 from '../../assets/images/side/side_kuaijie_2.png'
import linkImage3 from '../../assets/images/side/side_kuaijie_3.png'
import linkImage4 from '../../assets/images/side/side_kuaijie_4.png'
import linkImage5 from '../../assets/images/side/side_kuaijie_5.png'
import linkImage6 from '../../assets/images/side/side_kuaijie_6.png'

@Component
export default class Mail extends Vue{
  public downloadList: any = [
    {
      text: "学校概况",
      img: linkImage1,
    },
    {
      text: "智慧校园",
      img: linkImage2,
    },
    {
      text: "公告平台",
      img: linkImage3,
    },
    {
      text: "校历列表",
      img: linkImage4,
    },
    {
      text: "班车列表",
      img: linkImage5,
    },
    {
      text: "邮件系统",
      img: linkImage6,
    },
  ]
}
</script>

<style>
.sideLink {
  display: flex;
  flex-direction: column;
  width: 210px;

  .linkItem {
    height: 100px;
    width: 100%;
    margin: 0 0 10px 10px;
    position: relative;


    .linkText {
      position: absolute;
      left:50%;    /* 定位父级的50% */
      top:50%;
      transform: translate(-50%,-50%); /*自己的50% */
      color: #FFF;
    }
  }
}

</style>