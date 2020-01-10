<template>
  <div class="home-box">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="box-header clearfix">
            <span>企业信息(100家)</span>
          </div>
          <div>
            <ul class="company-msg">
              <li>
                <p>33</p>
                <span>天然气企业1111</span>
              </li>
              <li>
                <p>33</p>
                <span>液化气企业</span>
              </li>
              <li>
                <p>33</p>
                <span>热力公司</span>
              </li>
              <li>
                <p>33</p>
                <span>加气站</span>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="box-header clearfix">
            <span>各区域燃气覆盖对比图</span>
          </div>
          <div>内容</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="box-header clearfix">
            <span>各区域燃气使用排行</span>
          </div>
          <div>内容</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="box-header clearfix">
            <span>工作下发</span>
          </div>
          <div>
            <ul class="news-list">
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="box-header clearfix">
            <span>2019年各区域燃气热力使用曲线</span>
          </div>
          <div>内容</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="box-header clearfix">
            <span>信息公告</span>
          </div>
          <div>
            <ul class="news-list">
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
              <li>
                <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                <p>2019-10-20</p>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
.home-box {
  .box-header {
    border: 0;
    span {
      font-size: 16px;
      font-weight: bold;
      color: #333333;
    }
  }
  .box-card {
    box-shadow: none;
    margin: 10px;
  }
  .company-msg {
    padding: 5px;
    li {
      display: inline-block;
      text-align: center;
      font-size: 14px;
      color: #666666;
      margin-right: 40px;
      p {
        margin-bottom: 5px;
        color: #00be74;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .news-list {
    li {
      border-bottom: 1px solid #dfdfdf;
      padding-bottom: 10px;
      margin-bottom: 10px;
      &:last-child {
        border: 0;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      .news-list-title {
        margin-bottom: 5px;
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
      }
      p {
        color: #999999;
      }
    }
  }

  .el-card__header {
    border: 0;
    padding: 10px 15px;
  }
  .el-card__body {
   padding: 10px 15px;
  }
}
</style>