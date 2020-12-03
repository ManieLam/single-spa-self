export default [
  {
    // 子项目history模式下，父项目的模糊匹配。不建议这样做
    // path: '/vue*',
    path: '/vue',
    name: 'vue',
    component: () => import(/* webpackChunkName: "micrApp-vue" */ '@/components/Vue'),
    meta: {
      isMicrApp: true
    }
  },
  {
    // 针对path: '/micrApp/vue/*的匹配，不然会进到404
    path: '/vue/*',
    hidden: true,
    name: 'vue_app',
    component: () => import(/* webpackChunkName: "micrApp-vue" */ '@/components/Vue'),
    meta: {
      isMicrApp: true
    }
  }
]