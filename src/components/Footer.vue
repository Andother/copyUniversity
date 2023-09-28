<template>
  <div class="footer">
    <div class="foot">
      <div class="left">
        <div>
          <span>
            <i class="el-icon-location" />
            xx校区：xxxxx
          </span>
        </div>
        <div>
          <span>
            <i class="el-icon-message"></i>
            邮箱: xxxx@xxx.com
          </span>
          <span>
            <i class="el-icon-phone-outline"></i>
            电话：xxx-12345678
          </span>
        </div>
        <div>
          <span>
            <i class="el-icon-bell"></i>
            版权所有：xxxx大学办公室
          </span>
        </div>
      </div>
      <div class="right">
        <div>
          <span>
            <i class="el-icon-s-home"></i>
            学校主页
          </span>
        </div>
        <div>
          <span>
            <i class="el-icon-phone"></i>
            联系我们
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Footer extends Vue{
  
}
</script>

<style>
.footer {
  color: #ffffffd5;
  background: #545454; 
  min-height:30px; 
  padding: 5px 0; 
  font-size: 12px;
}

.foot {
  width: 88%;
  margin: 0 auto;
  min-width: 500px;

  span {
    padding: 0 40px;
  }

}

.left {
  display: inline-block;
  margin-top: 13px;
  min-width: 300px;
}

.right {
  display: inline-block;
  text-align: right;
  min-width: 200px;
  margin-top: 13px;
  margin-left: 200px;
}
</style>