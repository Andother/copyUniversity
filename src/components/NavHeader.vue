<template>
  <div class="header">
    <div class="content">
      <a class="logo">
        <img :src="logoImg" alt="">
      </a>
      <div class="navList">
        <el-menu 
          class="menu" 
          mode="vertical"
          :collapse-transition="false"
          :default-active="activeIndex" 
          @select="handleSelect"
        >
          <div v-for="(config, index) in navItems" style="display: inline-block" :key="index">
            <el-menu-item  :index=index v-if="config.menuItem.length === 0">
              {{ config.name }}
            </el-menu-item>
            <el-dropdown v-else>
              <span class="el-dropdown-link">
                {{ config.name }}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(itemConfig, index) in config.menuItem" @click="handleSelect">
                  {{ itemConfig.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-menu>
        <el-input
          placeholder="请输入关键字搜索"
          v-model="searchVal"
          class="search"
        >
          <i slot="prefix" class="el-icon-search"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import logo from '../assets/images/logo.png'


// mock
import navMockData from '../contant/navHeader'

@Component()
export default class Home extends Vue{
  public activeIndex: number = 0
  public mockData: any = navMockData
  public searchVal = ""

  public get logoImg() {
    return logo
  }

  public get navItems() {
    if (!this.mockData) return []
    return this.mockData.nav
  }

  public handleSelect(val: any) {
    console.log(val)
    // todo: handle select change
  }
}
</script>

<style>
.header {
  width: 100%;
  padding: 17px 0;
  background-image: url('../assets/images/header_bg_w.jpg');
  background-position: bottom right;

  .content {
    display: flex;
    width: 86%;
    margin: 0 auto;
  }

  .navList {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .search {
      width: 170px;
    }

    .el-input__icon {
      line-height: 30px;
    }

    .el-input__inner {
      height: 30px;
      line-height: 30px;
    }
  }

  .menu {
    background-color: transparent;

    .el-menu {
      background-color: transparent;
    }

    .el-menu-item {
      padding: 0 10px;
    }

    .el-menu-item, .el-dropdown {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    font-weight: bold;
  }
  
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-dropdown>span {
    padding: 0 10px;
  }
}

</style>