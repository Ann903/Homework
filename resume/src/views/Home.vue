<template>
  <div class="homePage">
    <div class="username">安宇航</div>
    <!-- <el-divider></el-divider> -->
    <el-tabs  class="tabLeft" :tab-position="tabPosition" style="">
      <el-tab-pane label="个人概况">
        <div class="profile">
          <span class="profileName">学校：</span>
          <span>××大学</span>
        </div>
        <div class="profile">
          <span class="profileName">专业：</span>
          <span>电子信息工程</span>
        </div>
        <div class="profile">
          <span class="profileName">联系电话：</span>
          <span>177********</span>
        </div>
        <div class="profile">
          <span class="profileName">邮箱：</span>
          <span>******@foxmail.com</span>
        </div>
        <div class="profile">
          <span class="profileName">blog：</span>
          <span>http://www.baidu.com</span>
        </div>
        <div class="profile">
          <span class="profileName">gitHub：</span>
          <span>******@foxmail.com</span>
        </div>
        <el-image class="userAvatar" style="width: 148px; height: 207px" :src="url" :preview-src-list="srcList"></el-image>
      </el-tab-pane>
      <el-tab-pane label="教育背景">配置管理</el-tab-pane>
      <el-tab-pane label="专业技能">角色管理</el-tab-pane>
      <el-tab-pane label="项目经历">定时任务补偿</el-tab-pane>
      <el-tab-pane label="个人评价">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      tabPosition: 'left',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.username{
  padding: 30px 30px 15px 30px;
  font-size: 30px;
  color: skyblue;
  border-bottom: solid 1px #ccc;
}
.profile{
  padding: 8px 8px 8px 20px;
}
.profileName{
  font-weight: 900;
}
.tabLeft{
  position: fixed;
  top: 100px;
  height: 100%;
  padding-top:5px;
}
.userAvatar{
  position: fixed;
  top: 120px;
  right: 100px;
}
</style>
