<template>
    <div class="header">
        <div class="logo">
          <span class="homelogo">
              <img src="/static/img/home/omc_logo1.png" alt="" width="142" height="60" @click="link2Home" style="cursor: pointer">
          </span>
          <span class="headertitle">项目管理系统</span>
        </div>
        <div class="headerlist">
          <!-- <el-dropdown>
            <span class="el-dropdown-link">
              首页
            </span>
          </el-dropdown> -->
          <el-menu
            :default-active="onRoutes"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#363D47"
            text-color="#fff"
            active-text-color="#ffd04b" unique-opened router>
            <template v-for="(item,index) in itemsNav">
      				<template v-if="item.menuList">
      					<el-submenu  :index="item.menuUrl">
      						<template slot="title">
      							<!-- <i class="icon" :class="item.menuImg"></i> -->
      							<span slot="menuName">{{ item.menuName }}</span>
      						</template>
      						<el-menu-item v-show="!subItem.show" v-for="(subItem,i) in item.menuList" :key="i" :index="subItem.menuUrl" >{{ subItem.menuName }}
      						</el-menu-item>
      					</el-submenu>
      				</template>
      				<template v-else>
      					<el-menu-item :index="item.menuUrl">
      						<!-- <i :class="item.menuImg" class="icon"></i> -->
      						<span slot="title">{{ item.menuName }}</span>
      					</el-menu-item>
      				</template>
      			</template>
          </el-menu>

        </div>
        <div class="headerright">
            <!-- <span class="tips">
                <img src="../../../static/img/common/Group.png" alt="" width="14" height="16">
            </span>
            <span>
                <img src="../../../static/img/common/help.png" alt="" width="14" height="16">
            </span> -->
            <el-dropdown trigger="hover" class="userinfo" @command="handleCommand">
                <span class="el-dropdown-link">
                    您好，{{username}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" split-button type="primary">
                    <el-dropdown-item command="user_center">基本信息</el-dropdown-item>
                    <el-dropdown-item command="modify_password">密码修改</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            <span @click="loginout()">
                <img src="../../../static/img/common/exit0.png" alt="" width="16" height="18">
            </span>
        </div>
    </div>
</template>
<script>
//import router from '@/router/index.js'
export default {
    created(){
      // console.log(this.$router)
    },
    data() {
        return {
            name: 'ifdp',
            activeIndex: '2',
            itemsNav: [
      				{
      					menuUrl: 'home',
      					menuName: '首页',
      				},
              {
      					menuUrl: 'workbench',
      					menuName: '工作台',
      				},
              {
      					menuUrl: 'project',
      					menuName: '公海'
      				},
              {
      					menuUrl: '1',
      					menuName: '机会管理'
      				},
              {
      					menuUrl: '1',
      					menuName: '系统管理',
      					menuList: [
                  {
      							menuUrl: 'seat',
      							menuName: '座席管理'
      						},
      						{
      							menuUrl: 'tissue',
      							menuName: '组织架构'
      						},
                  {
                    menuUrl: 'user_group',
      							menuName: '用户组管理'
      						},
      						{
      							menuUrl: 'system_project',
      							menuName: '项目管理'
      						},
                  {
      							menuUrl: 'tissue3',
      							menuName: '系统配置'
      						},
                  {
      							menuUrl: 'power',
                    show:true, // 这个字段主要为了 三级页面做当前项
      							menuName: '权限管理'
      						}
      					]
      				}
            ]
        }
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        },
        onRoutes() {
            //保持左侧菜单激活状态
            let reg = /\//g
			// console.log(this.$route.matched);
            return this.$route.matched[1].path.replace(reg, '');
        }
    },
    methods: {
        loginout() {
            const _this = this;
            this.$confirm('您确认退出登录吗?', '提示', {
                type: 'warning'
            }).then(() => {
                localStorage.removeItem('ms_username');
                localStorage.removeItem('access_token');
                _this.$router.push('/login');
            }).catch(() => {

            });

        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleSelect(key, keyPath) {
            //subMenu menuUrl
            if (keyPath[1]) {
                this.subMenuOldIndex = keyPath[0];
            }
        },
        handleCommand(commmand) {
            const _self = this
            if (commmand === 'user_center') {
                sessionStorage.setItem('user_center', true);
            } else {
                sessionStorage.setItem('user_center', false);
            }
            _self.$router.push(commmand);
        },
        link2Home() {
            this.$router.push('/aggPage')
        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #cccccc;
    background: #363D47;
    overflow: hidden;
    .el-menu-demo{
      background: none;
    }
    .logo{
      float: left;
      span{
        float: left;
      }
    }
    .headerlist{
      margin-left: 60px;
      float: left;
      .el-dropdown-menu__item a{
        color: #606266;
      }
      .el-dropdown{
        padding: 0px 15px;

        cursor: pointer;
        span{
          a{
            color: #fff;
          }
          .el-icon-arrow-down{
            color: #fff;
          }
        }
      }
    }
  .headertitle {
      font-size: 18px;
      font-family: "PingFang SC light";
      padding: 0 10px;
  }
}


.header .headertitle::before {
    display: block;
    content: '';
    width: 1px;
    height: 20px;
    background: #cccccc;
    position: absolute;
    margin-left: -11px;
    margin-top: 20px;
}

.header .headerright {
    float: right;
    margin-right: 20px;
    &>span {
        width: 60px;
        text-align: center;
        &.tips span {
            width: 8px;
            height: 8px;
            background: red;
            border-radius: 50%;
            position: absolute;
        }
    }
}


.header .headerright>span:hover,
.header .headerright .userinfo:hover {
    cursor: pointer;
}

.header .headerright .userinfo {
    padding: 0 20px;
}

.header .headerright .el-icon--right {
    font-size: 10px;
}

.header .headerright .userinfo .useravatar {
    margin-right: 15px;
    position: relative;
    top:10px;
    border-radius: 50%;
}
.userinfo.el-dropdown .el-dropdown-link{
        color: #cccccc;
}

.el-dropdown {
    color: #cccccc;
}

.el-dropdown-menu {
    margin: 0 !important;
}

.el-dropdown-menu__item {
    padding: 0 20px;
}
</style>
