<template>
  <div class="tab-box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="鱼化寨街办" name="first">
        <div>
          <el-row>
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header" class="box-header clearfix">
                  <span>天然气企业</span>
                </div>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="num" label="序号" width="80"></el-table-column>
                  <el-table-column prop="companyName" label="单位名称"></el-table-column>
                  <el-table-column prop="residentNum" label="企业居民用户覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="notresidentNum" label="企业非居民覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header" class="box-header clearfix">
                  <span>液化气企业</span>
                </div>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="num" label="序号" width="80"></el-table-column>
                  <el-table-column prop="companyName" label="单位名称"></el-table-column>
                  <el-table-column prop="residentNum" label="企业居民用户覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="notresidentNum" label="企业非居民覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header" class="box-header clearfix">
                  <span>热力公司</span>
                </div>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="num" label="序号" width="80"></el-table-column>
                  <el-table-column prop="companyName" label="单位名称"></el-table-column>
                  <el-table-column prop="residentNum" label="企业居民用户覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="notresidentNum" label="企业非居民覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header" class="box-header clearfix">
                  <span>加气站</span>
                </div>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="num" label="序号" width="80"></el-table-column>
                  <el-table-column prop="companyName" label="单位名称"></el-table-column>
                  <el-table-column prop="residentNum" label="企业居民用户覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="notresidentNum" label="企业非居民覆盖户数" width="180"></el-table-column>
                  <el-table-column prop="remark" label="备注"></el-table-column>
                </el-table>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="box-header clearfix">
                  <span>工作下发</span>
                </div>
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
                  <li>
                    <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                    <p>2019-10-20</p>
                  </li>
                </ul>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="box-header clearfix">
                  <span>信息上报</span>
                </div>
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
                  <li>
                    <el-link href="##" class="news-list-title" target="_blank">默认链接</el-link>
                    <p>2019-10-20</p>
                  </li>
                </ul>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="东大街道" name="second">
        <div>2</div>
      </el-tab-pane>
      <el-tab-pane label="庞光街道" name="third">
        <div>3</div>
      </el-tab-pane>
      <el-tab-pane label="秦渡街道" name="fourth">
        <div>4</div>
      </el-tab-pane>
      <el-tab-pane label="五星街道" name="five">
        <div>5</div>
      </el-tab-pane>
      <el-tab-pane label="细柳街道" name="six">
        <div>6</div>
      </el-tab-pane>
      <el-tab-pane label="草堂镇" name="seven">
        <div>7</div>
      </el-tab-pane>
      <el-tab-pane label="丈八街办" name="eight">
        <div>8</div>
      </el-tab-pane>
      <el-tab-pane label="灵沼镇" name="nine">
        <div>9</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.tab-box {
  .box-header {
    border: 0;
    span {
      font-size: 16px;
      font-weight: bold;
      color: #333333;
    }
  }
  .el-card__header {
    border: 0;
    padding: 10px 15px;
  }
  .el-card__body {
    padding: 10px 15px;
  }
  .box-card {
    box-shadow: none;
    margin: 10px;
  }
  .el-tabs__nav-scroll {
    padding: 10px;
  }
  .el-tabs__nav-wrap::after {
    display: none;
  }
  .el-tabs__item {
    font-size: 16px;
  }
  .el-tabs__item.is-active {
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  }
  .el-tabs--top .el-tabs__item.is-top:nth-child(2),
  .el-tabs--top .el-tabs__item.is-bottom:nth-child(2) {
    padding-left: 20px;
  }
  .el-tabs__active-bar {
    display: none;
  }
  .el-table {
    color: #333333;
    margin-bottom: 5px;
  }
  .el-table th.is-leaf,
  .el-table td {
    border: 0;
    padding: 3px 0;
  }
  .el-table::before {
    display: none;
  }
  .el-tabs__header {
    margin-bottom: 0;
  }
  .news-list {
    li {
      border-bottom: 1px solid #dfdfdf;
      padding-bottom: 10px;
      padding-right: 80px;
      margin-bottom: 10px;
      position: relative;

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
        position: absolute;
        right: 0;
        top: 2px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          num: "01",
          companyName: "西安草堂天然气有限公司",
          residentNum: 14,
          notresidentNum: 15,
          remark: "无"
        },
        {
          num: "01",
          companyName: "西安草堂天然气有限公司",
          residentNum: 14,
          notresidentNum: 15,
          remark: "无"
        },
        {
          num: "01",
          companyName: "西安草堂天然气有限公司",
          residentNum: 14,
          notresidentNum: 15,
          remark: "无"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>