<template>
 <el-container class="home_container">
  <!-- 头部区域 -->
  <el-header>
      <div class="header_info">
          <span class="header_home">LUNA HOME 运营端</span>
          <img src="../assets/wcat.jpg" alt="">
          <span class="header_name">Timothy Hayes</span>
      </div>
  </el-header>
  <!-- 页面主体区域 -->
  <el-container style="height: 100%;">
    <el-aside width="200px">
        <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <!-- <i class="iconfont icon-shangpin"></i> -->
          <i class="el-icon-s-goods"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><i class="el-icon-sell"></i>商品列表详情</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-document-copy"></i>
        <!-- <i class="iconfont icon-danju"></i> -->
        <span slot="title">采购单</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main  style="height: 100%;">
        <!-- 面包屑导航 -->
        <!-- <div > -->
            <el-breadcrumb class="breadcrumb" separator=" / ">
              <el-breadcrumb-item :to="{ path: '/' }" class="breadcrumb-divide">首页</el-breadcrumb-item>
              <el-breadcrumb-item class="breadcrumb-divide"><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item class="breadcrumb-divide">活动列表</el-breadcrumb-item>
            </el-breadcrumb>
        <!-- </div> -->
        <div class="order-name">成品订单</div>

        <el-card class="box-card1">
          <div slot="header" class="clearfix">
            <span>订单编号：123456789123</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <div>
              <span class="luna-shipping">
                <p class="shipping-words">月球发货中</p>
                <p class="shipping-time">2019-11-02 22:22:22</p>
              </span>
              <span class="shipping-steps">
                <el-steps :active="3" align-center space="30%">
                  <el-step title="等待买家付款" description="2019-11-02 11:55:38"></el-step>
                  <el-step title="等待月球发货" description="2019-11-02 11:55:38"></el-step>
                  <el-step title="月球发货中" description="2019-11-02 11:55:38"></el-step>
                  <el-step title="交易完成"></el-step>
                </el-steps>
               </span>
          </div>
        </el-card>
        <div class="shipping-info">物流信息</div>
        <el-tabs type="border-card" class="bags-tabs">
          <el-tab-pane label="包裹1">
              <el-row>
                <el-col :span="10">
                    <div style="font-weight: 900;padding:5px 0">发货方式：物流发货</div>
                    <div style="padding:5px 0;font-size: 14px">发货人：胡秋秋</div>
                    <div style="padding:5px 0 0;font-size: 14px">发货时间：2019-11-11 13:05:25</div>
                    <div style="padding:10px 0;font-size: 14px">中通快递 123456789123456</div>
                    <el-row>
                      <el-col :span="4"><img src="../assets/table.jpg"></el-col>
                      <el-col :span="8">
                          <div style="font-size:12px;">日系书柜</div>
                          <div style="font-size:12px;padding:5px 0"> ×1 </div>
                      </el-col>
                    </el-row>
                </el-col>
                <el-col :span="14">
                    <div>物流状态： <span>已发货</span></div>
                    <div>
                        <el-timeline class="shipping-timeline">
                            <el-timeline-item
                              v-for="(activity, index) in activities"
                              :key="index"
                              :icon="activity.icon"
                              :type="activity.type"
                              :color="activity.color"
                              :size="activity.size"
                              :timestamp="activity.timestamp">
                              {{activity.content}}
                            </el-timeline-item>
                          </el-timeline>
                    </div>
                </el-col>
              </el-row>
          </el-tab-pane>
          <el-tab-pane label="包裹2">配置管理</el-tab-pane>
          <el-tab-pane label="包裹3">角色管理</el-tab-pane>
        </el-tabs>
        <el-card class="box-card2">
          <el-row class="">
            <el-col :span="10">
                <div style="font-size:18px;font-weight:900;padding:5px 0">收货人信息</div>
                <div style="font-size:14px;padding:5px 0">收货人： 李心悦</div>
                <div style="font-size:14px;padding:5px 0">联系电话：18552964107</div>
                <div style="font-size:14px;padding:5px 0">地址：深圳市南山区粤海街道易思博软件大厦1208</div>
            </el-col>
            <el-col :span="7">
                <div style="font-size:18px;font-weight:900;padding:5px 0">买家信息</div>
                <div style="font-size:14px;padding:5px 0">用户名： 大白羊咩</div>
            </el-col>
            <el-col :span="7">
                <div style="font-size:18px;font-weight:900;padding:5px 0">付款信息</div>
                <div style="font-size:14px;padding:5px 0">实付金额：￥850.00</div>
                <div style="font-size:14px;padding:5px 0">付款时间：2019-11-11 21：31：01</div>
                <div style="font-size:14px;padding:5px 0">支付流水号：ZF201911091155380848000003</div>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card3">
            <el-row style="font-weight:600">
              <el-col :span="6"><div>商品</div></el-col>
              <el-col :span="3"><div>单价</div></el-col>
              <el-col :span="3"><div>数量</div></el-col>
              <el-col :span="4"><div>小计</div></el-col>
              <el-col :span="4"><div>采购单状态</div></el-col>
              <el-col :span="4"><div>售后状态</div></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card4">
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333">SPU ID:123456789</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                  <el-row>
                      <el-col :span="7"><img src="../assets/table.jpg"></el-col>
                      <el-col :span="17">
                          <div style="font-size:16px;color:#00BFFF">简约餐桌椅子<br></div>
                          <div style="font-size:12px;padding:8px 0">材质：榉木；长：50cm*<br>高：160cm</div>
                      </el-col>
                    </el-row>
              </el-col>
              <el-col :span="3"><div>￥ 100.00</div></el-col>
              <el-col :span="3"><div>2</div></el-col>
              <el-col :span="4"><div>￥ 200.00</div></el-col>
              <el-col :span="4"><div style="color:#00BFFF">已发货</div></el-col>
              <el-col :span="4"><div></div></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card5">
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333">SPU ID:123456789</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                  <el-row>
                      <el-col :span="7"><img src="../assets/bookshelf.jpg"></el-col>
                      <el-col :span="17">
                          <div style="font-size:16px;color:#00BFFF">日系书柜<br></div>
                          <div style="font-size:12px;padding:8px 0"><br>长：0.9m，层数：3层</div>
                      </el-col>
                    </el-row>
              </el-col>
              <el-col :span="3"><div>￥ 480.00</div></el-col>
              <el-col :span="3"><div>0</div></el-col>
              <el-col :span="4"><div>￥ 480.00</div></el-col>
              <el-col :span="4"><div style="padding:23px 0;color:#00BFFF">已发货</div></el-col>
              <el-col :span="4"><div></div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                 <div>书柜安装</div>
              </el-col>
              <el-col :span="3"><div>￥ 0/次</div></el-col>
              <el-col :span="3"><div>1</div></el-col>
              <el-col :span="4"><div>￥ 0</div></el-col>
              <!-- <el-col :span="4"><div>已发货</div></el-col> -->
              <el-col :span="4"><div></div></el-col>
            </el-row>
            <el-row>
              <el-col :span="24"><div style="font-size:14px;background-color:#FAEBD7;color:#FF0000;padding:10px 0 10px 20px ">买家备注：如果好看还会继续下单，谢谢！！</div></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card6">
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333">SPU ID:123456789</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                  <el-row>
                      <el-col :span="7"><img src="../assets/rag.jpg"></el-col>
                      <el-col :span="17">
                          <div style="font-size:16px;color:#00BFFF">拆卸服务<br></div>
                          <!-- <div style="font-size:12px;padding:8px 0">材质：榉木；长：50cm*<br>高：160cm</div> -->
                      </el-col>
                    </el-row>
              </el-col>
              <el-col :span="3"><div>￥ 70.00</div></el-col>
              <el-col :span="3"><div>1</div></el-col>
              <el-col :span="4"><div>￥ 70.00</div></el-col>
              <el-col :span="4"><div style="color:#00BFFF">待支付首期款</div></el-col>
              <el-col :span="4"><div></div></el-col>
            </el-row>
            <el-row>
              <el-col :span="4" style="margin-left: 710px">
                  <div style="color:#333;font-size:12px;padding:5px">商品总价：</div>
                  <div style="font-weight:900;font-size:24px;padding:5px">实收金额：</div>
              </el-col>
              <el-col :span="4">
                  <div style="color:#333;font-size:12px;padding:5px">￥850.00</div>
                  <div style="font-weight:900;font-size:24px;padding:5px;color:#FF4500">￥850.00</div>
              </el-col>
            </el-row>
        </el-card>
        <el-card class="box-card7">
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333;">采购单</div></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card8">
            <el-row>
              <el-col :span="24"><div style="font-size:18px;font-weight:800">商品采购单</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6"><div>采购商品</div></el-col>
              <el-col :span="2"><div>供应价</div></el-col>
              <el-col :span="2"><div>数量</div></el-col>
              <el-col :span="3"><div>供应价总计</div></el-col>
              <el-col :span="3"><div>采购单状态</div></el-col>
              <el-col :span="3"><div>采购连接</div></el-col>
              <el-col :span="3"><div>售后状态</div></el-col>
              <el-col :span="2"><div>操作</div></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card9">
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333">采购单单号:123456789</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                  <el-row>
                      <el-col :span="7"><img src="../assets/table.jpg"></el-col>
                      <el-col :span="17">
                          <div style="font-size:16px;color:#00BFFF">简约餐桌椅子<br></div>
                          <div style="font-size:12px;padding:8px 0">材质：榉木；长：50cm*<br>高：160cm</div>
                      </el-col>
                    </el-row>
              </el-col>
              <el-col :span="2"><div>￥ 70.00</div></el-col>
              <el-col :span="2"><div style="margin-top:3px">2</div></el-col>
              <el-col :span="3"><div>￥ 70.00</div></el-col>
              <el-col :span="3"><div>已发货</div></el-col>
              <el-col :span="3"><a href="/#">采购连接</a></el-col>
              <el-col :span="3"><div>售后</div></el-col>
              <el-col :span="2">
                  <div style="font-size:16px;color:#00BFFF">查看采购单<br></div>
                  <div style="font-size:16px;color:#00BFFF">更换采购单</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333">采购单单号:123456789</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                  <el-row>
                      <el-col :span="7"><img src="../assets/bookshelf.jpg"></el-col>
                      <el-col :span="17">
                          <div style="font-size:16px;color:#00BFFF">日系书柜<br></div>
                          <div style="font-size:12px;padding:8px 0"><br>长：0.9m，层数：3层</div>
                      </el-col>
                    </el-row>
              </el-col>
              <el-col :span="2"><div>￥ 70.00</div></el-col>
              <el-col :span="2"><div style="margin-top:3px">2</div></el-col>
              <el-col :span="3"><div>￥ 70.00</div></el-col>
              <el-col :span="3"><div style="margin-top:40px">已发货</div></el-col>
              <el-col :span="3" style="margin-top:40px"><a href="/#">采购连接</a></el-col>
              <el-col :span="3"><div style="margin-top:40px">售后</div></el-col>
              <el-col :span="2" style="margin-top:30px">
                  <div style="font-size:16px;color:#00BFFF">查看采购单<br></div>
                  <div style="font-size:16px;color:#00BFFF">更换采购单</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                 <div>书柜安装</div>
              </el-col>
              <el-col :span="2"><div>￥ 0/次</div></el-col>
              <el-col :span="2"><div style="margin-top:3px">1</div></el-col>
              <el-col :span="3"><div>￥ 0</div></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card10">
            <el-row>
              <el-col :span="24"><div style="font-size:18px;font-weight:800">服务采购单</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6"><div>采购商品</div></el-col>
              <el-col :span="2"><div>供应价</div></el-col>
              <el-col :span="2"><div>数量</div></el-col>
              <el-col :span="3"><div>供应价总计</div></el-col>
              <el-col :span="3"><div>采购单状态</div></el-col>
              <el-col :span="3"><div>采购连接</div></el-col>
              <el-col :span="3"><div>售后状态</div></el-col>
              <el-col :span="2"><div>操作</div></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card11">
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333">采购单单号:123456789</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                  <el-row>
                      <el-col :span="7"><img src="../assets/rag.jpg"></el-col>
                      <el-col :span="17">
                          <div style="font-size:16px;color:#00BFFF">拆卸服务</div>
                          <!-- <div style="font-size:12px;padding:8px 0">材质：榉木；长：50cm*<br>高：160cm</div> -->
                      </el-col>
                    </el-row>
              </el-col>
              <el-col :span="2"><div>￥ 50.00</div></el-col>
              <el-col :span="2"><div style="margin-top:3px">1</div></el-col>
              <el-col :span="3"><div>￥ 10.00</div></el-col>
              <el-col :span="3"><div>待支付首期款</div></el-col>
              <el-col :span="3"><a href="/#">采购连接</a></el-col>
              <el-col :span="3"><div>.</div></el-col>
              <el-col :span="2">
                  <div style="font-size:16px;color:#00BFFF">查看采购单<br></div>
                  <!-- <div style="font-size:16px;color:#00BFFF">更换采购单</div> -->
              </el-col>
            </el-row>
        </el-card>
        <el-card class="box-card12">
            <el-row>
              <el-col :span="24"><div style="font-size:18px;font-weight:800">已取消采购单</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="24"><div style="font-size:14px;color:#333">采购单单号:123456789 <span  style="font-size:14px;font-weight:800">已取消</span></div></el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                  <el-row>
                      <el-col :span="7"><img src="../assets/bookshelf.jpg"></el-col>
                      <el-col :span="17">
                          <div style="font-size:16px;color:#00BFFF">日系书柜<br></div>
                          <div style="font-size:12px;padding:8px 0"><br>长：0.9m，层数：3层</div>
                      </el-col>
                    </el-row>
              </el-col>
              <el-col :span="2"><div>￥ 70.00</div></el-col>
              <el-col :span="2"><div style="margin-top:3px">2</div></el-col>
              <el-col :span="3"><div>￥ 70.00</div></el-col>
              <el-col :span="3"><div style="margin-top:40px">已取消</div></el-col>
              <el-col :span="3" style="margin-top:40px"><a href="/#">采购连接</a></el-col>
              <el-col :span="3"><div style="margin-top:40px">售后</div></el-col>
              <el-col :span="2" style="margin-top:30px">
                  <div style="font-size:16px;color:#00BFFF;margin-top:9px">查看采购单<br></div>
                  <!-- <div style="font-size:16px;color:#00BFFF">更换采购单</div> -->
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                 <div>书柜安装</div>
              </el-col>
              <el-col :span="2"><div>￥ 0/次</div></el-col>
              <el-col :span="2"><div style="margin-top:3px">1</div></el-col>
              <el-col :span="3"><div>￥ 0</div></el-col>
            </el-row>
        </el-card>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->

  </el-container>
</el-container>
</template>

<script>
export default {
  data () {
    return {
      activities: [{
        timestamp: '2018-04-03 20:46',
        content: '[深圳市]快件已到达【广东深圳上合公司】扫描员是【谭琳琳】',
        color: '#0bbd87'
      }, {
        content: ''
        //   timestamp: '2018-04-03 20:46'
      }]
    }
  }
}

</script>

<style lang="less" scoped>
  li{
      list-style:none;
      margin-left: 0;
    //   padding-left: 0;
  }
  .home_container{
    height: 100%;
  }
  .el-header{
    background-color:#fff;
    padding-left: 0;
    // display: flex;
  }
  .header_info{
    //   display: flex;
      position: relative;
  }
  .header_info img{
      position: absolute;
      left: 1100px;
      border-radius: 50%;
    //   margin-left: 10px;
  }
  .header_info .header_name{
      position: absolute;
      left: 1180px;
      text-align: center;
      line-height: 50px;
      font-weight: 700;
  }
  .header_info .header_home {
      float: left;
      width: 200px;
      height: 100%;
      background-color: #373D41;
      text-align: center;
      line-height: 60px;
      color: #fff;
      font-weight: 900;
  }
  .el-aside {
    float: left;
    // background-color: #D3DCE6;
    color: #fff;
    background-color:#333744;
    .el-menu {
      border-right:none;
    }
    // text-align: center;
    // line-height: 200px;
  }

  .el-main {
    position: relative;
    float: left;
    width: 100%;
    display: block;
    background-color: #ccc;
    color: #000;
    // text-align: center;
    // line-height: 200px
  }
  .el-main .breadcrumb {
      position: absolute;
      left: 0;
      top: 0;
      font-size:12px;
    //   font-weight:900;
      color: #ccc;
    //   background-color: #ccc;
      margin: 10px 0px 15px 20px;
  }
//   .breadcrumb-divide{
//       padding:0 10px;
//   }
  .order-name{
      position: absolute;
      top: 40px;
      left: 20px;
      font-weight:1000;
    //   background-color: #ccc;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .luna-shipping{
      float: left;
      padding-left: 50px;
      padding-right: 300px;
  }
  .shipping-words{
      font-size: 22px;
      font-weight: 900;
      margin-top:0;
      margin-bottom: 5px;
  }
  .shipping-time{
      margin: 0;
      font-size: 12px;
  }

  .box-card1 {
    position: absolute;
    top: 80px;
    left: 20px;
    width: 1110px;
  }
  .shipping-info {
      position: absolute;
      top: 320px;
      width: 1092px;
      padding:10px;
      background-color: #fff;
  }
  .bags-tabs {
      position: absolute;
      top: 374px;
      width: 1110px;
  }
  .box-card2{
      position: absolute;
      top: 647px;
      width: 1110px;
  }
  .box-card3{
      position: absolute;
      top: 826px;
      width: 1110px;
  }
  .box-card4{
      position: absolute;
      top: 903px;
      width: 1110px;
  }
  .box-card5{
      position: absolute;
      top: 1064px;
      width: 1110px;
  }
  .box-card6{
      position: absolute;
      top: 1322px;
      width: 1110px;
  }
  .box-card7{
      position: absolute;
      top: 1566px;
      width: 1110px;
  }
  .box-card8{
      position: absolute;
      top: 1641px;
      width: 1110px;
  }
  .box-card9{
      position: absolute;
      top: 1765px;
      width: 1110px;
  }
  .box-card10{
      position: absolute;
      top: 2101px;
      width: 1110px;
  }
  .box-card11{
      position: absolute;
      top: 2224px;
      width: 1110px;
  }
  .box-card12{
      position: absolute;
      top: 2385px;
      width: 1110px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .shipping-timeline{
      margin-top:10px
  }
  img{
      width: 60px;
      height: 60px;
  }

</style>
