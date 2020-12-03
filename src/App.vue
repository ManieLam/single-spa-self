<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-sub-menu key="1">
          <span slot="title">
            <a-icon type="user" />
            <span>Vue</span>
          </span>
          <a-menu-item key="1-1">
            <router-link to="/micrApp/vue">Home</router-link>
          </a-menu-item>
          <a-menu-item key="1-2">
            <router-link to="/micrApp/vue/about">
              About
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="2">
          <router-link to="/mainprogram">
            <a-icon type="video-camera" />
            <span>mainprogram-level1</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/mainprogram1">
            <a-icon type="video-camera" />
            <span>mainprogram-level2</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/program1">
            <a-icon type="video-camera" />
            <span>static-program1</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <a-menu-item key="1">
            <router-link to="/">主应用</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <a-tooltip>
              <template slot="title">打开静态资源3040服务的子应用</template>
              <a href="" @click="navigateTo">program1</a>
            </a-tooltip>
          </a-menu-item>
          <a-menu-item key="3">
            主应用数据 {{JSON.stringify(user)}}
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <div>
          <div id="single-vue" class="single-spa-vue">
            <div id="vue"></div>
          </div>
          <router-view :key="$route.path" />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  // import { navigateToUrl } from 'single-spa';
  import store from './store'
  export default {
    data() {
      return {
        collapsed: false,
        navList: [{
          label: 'Vue',
          icon: 'user',
          child: [{
            label: 'home',
            link: '/micrApp/vue'
          }, {
            label: 'about',
            link: '/micrApp/vue/about'
          }]
        }, {
          label: 'mainprogram-level1',
          link: '/mainprogram'
        }, {
          label: 'mainprogram-level2',
          link: '/mainprogram1'
        }]
      };
    },
    computed: {
      user () {
        return store.getGlobalState('user')
      }
    },
    methods: {
      goToChildRoute(e) {
        // 官方指定跳转
        e.preventDefault();
        // navigateToUrl(e);
      },
      navigateTo () {
        window.open('http://localhost:3040/static', '_block') // 有效
      }
    }
  };
</script>
<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
