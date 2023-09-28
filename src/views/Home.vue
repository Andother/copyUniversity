<template>
  <div class="container">
    <div class="home">
      <div class="slider">
        <transition>
          <el-image
            v-for="(image, index) in imageList"
            :key="index"
            :src="image"
            alt=""
            fit="fill"
            v-if="curImageIndex === index"
            style="height: 660px"
          />
        </transition>
      </div>
      <div class="content">
        <div style="height: 50%">
          <el-tabs v-model="activeName1">
            <el-tab-pane label="办事指南" name="first">
              <Guide />
            </el-tab-pane>
            <el-tab-pane label="常用下载" name="second">
              <Download />
            </el-tab-pane>
            <el-tab-pane label="邮件信息" name="third">
              <Mail />
            </el-tab-pane>
          </el-tabs>
        </div>
        <div>
          <el-tabs v-model="activeName2">
            <el-tab-pane label="校级党政会议" name="four">校级党政会议</el-tab-pane>
            <el-tab-pane label="工作动态" name="five">工作动态</el-tab-pane>
            <el-tab-pane label="通知公告" name="six">通知公告</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="fastLink">
        <SideLink />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import image01 from '../assets/images/carouselImg/image01.jpg'
import image02 from '../assets/images/carouselImg/image02.jpg'
import image03 from '../assets/images/carouselImg/image03.jpg'

import Guide from '../components/HomeComponents/Guide.vue'
import Download from '../components/HomeComponents/CommonDownload.vue'
import Mail from '../components/HomeComponents/Mail.vue'

import SideLink from '../components/HomeComponents/SideLink.vue'

@Component({
  components: {
    Guide, Download, Mail, SideLink
  }
})
export default class Home extends Vue{
  public curImageIndex: number = 0
  public timer: any = null

  public activeName1 = 'first'
  public activeName2 = 'five'

  public get imageList() {
    return [
      image01,
      image02,
      image03,
    ]
  }



  public mounted() {
    this.timer = setInterval(() => {
      this.curImageIndex = (this.curImageIndex + 1) % this.imageList.length
    }, 5000)
  }
}
</script>

<style>
.container {
  background-color: #f4f3ef;
}

.home {
  width: 86%;
  padding: 10px;
  margin: 0 auto;
  display: flex;
}

.slider {
  width: 24%;
  min-width: 220px;
  height: 660px;
}

.content {
  width: 66%;
}

</style>