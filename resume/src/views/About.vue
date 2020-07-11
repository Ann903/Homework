<template>
  <div class="homePage">
    <div class="username">安宇航</div>
    <!-- <el-divider></el-divider> -->
    <div  class="tabLeft" style="">
      <div label="个人概况">
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
        <div class="userAvatar" style="width: 148px; height: 207px" :src="url" :preview-src-list="srcList"></div>
      </div>
      <div label="教育背景">
        2016.9-2020.7： 桂林电子科技大学， 电子信息工程，本科
      </div>
      <div label="专业技能">
        <div  class="profileName">IT技能：</div>
        <div>你的技能</div>
        <div class="profileName">英语技能：</div>
        <div>CET-6</div>
      </div>
      <div label="项目经历">
        <div>
          <span>随机句项目 | </span>
          <span>2020 年 5 月 – 2020 年 6 月</span>
          <a href="http://www.com">http://www.com</a>
        </div>
        <div>
          随机句项目是一个前后端综合项目， 前端使用 Vue.js 框架， 后端使用基于 node.js 的 koa 框架提供 API， 将数
据存储于 MySQL 数据库， 实现刷新页面就调用接口随机返回句子， 渲染到前端页面上。
           总结： 本项目着重练习后端 API 的编写， 使用 koa-router 模块提供路由、 koa-static 模块开启静态文件服务
等。 通过练习本项目， 学习 koa 以及中间件， 加深对 koa 框架的认识和使用， 同时也了解了 MySQL 数据库的简单
指令操作。
        </div>
        <div>
          <span>Vue 电商后台管理系统项目 | </span>
          <span>2020 年 1 月 – 2020 年 3 月</span>
          <a href="http://www.com">http://www.com</a>
        </div>
        <div>
          随机句项目是一个前后端综合项目， 前端使用 Vue.js 框架， 后端使用基于 node.js 的 koa 框架提供 API， 将数
据存储于 MySQL 数据库， 实现刷新页面就调用接口随机返回句子， 渲染到前端页面上。
           总结： 本项目着重练习后端 API 的编写， 使用 koa-router 模块提供路由、 koa-static 模块开启静态文件服务
等。 通过练习本项目， 学习 koa 以及中间件， 加深对 koa 框架的认识和使用， 同时也了解了 MySQL 数据库的简单
指令操作。
        </div>
        <div>
          <span>博搜项目 | </span>
          <span>2019 年 4 月 - 2019 年 6 月</span>
          <a href="http://www.com">http://www.com</a>
        </div>
        <div>
          随机句项目是一个前后端综合项目， 前端使用 Vue.js 框架， 后端使用基于 node.js 的 koa 框架提供 API， 将数
据存储于 MySQL 数据库， 实现刷新页面就调用接口随机返回句子， 渲染到前端页面上。
           总结： 本项目着重练习后端 API 的编写， 使用 koa-router 模块提供路由、 koa-static 模块开启静态文件服务
等。 通过练习本项目， 学习 koa 以及中间件， 加深对 koa 框架的认识和使用， 同时也了解了 MySQL 数据库的简单
指令操作。
        </div>

      </div>
      <div label="个人评价">
        <div>性格乐观开朗，积极向上，待人热情， 具有较强的社交能力，做事认真谨慎
·学习有着极高的热情， 不怕苦，不畏难， 做事认真踏实， 自学能力强， 有良好的团队协作意识和抗压能力</div>
      </div>
    </div>
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
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
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
