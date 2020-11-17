# vue-single-spa 

**基于vuejs为底座，single-spa 为框架的微前端工程**

## 试验步骤
1. 主应用建立两种对子应用的调用模式，定制主应用基座
   - [x] 主应用为该静态资源在本地开启express服务调用(https://juejin.im/post/6844903520378814471，https://www.expressjs.com.cn/starter/static-files.html)；主应用也可使用子应用代码，子应用在主应用注册，实现调用，使用框架qiankun。当主工程监测到路由变化的时候，将寻找是否有对应的路由匹配到应用。
   - [ ] 两种模式如何共用？express服务与主应用的服务如何互相调用，页面互相嵌套? 不然直接将静态资源用到主应用的服务调用。
   - [ ] 旧项目不同的打包方式，包目录不一致，怎么定制主应用基座
   - [ ] 实践在同一页面同时使用A子应用，B子应用（两种模式）
   - [ ] 主应用基座数据管理，实践A子应用与B子应用数据共享、状态共享（qiankun）
   - [x] 多个子应用互不影响，子应用A加载失败不会影响子应用B的加载
   - [ ] 一键开启所有start服务（npm-run-all）
2. 后续子应用管理、规范开发
   - [ ] 所有子应用的打包后文件，版本共享在同个服务可供拉取（CDN？），方便随意取用。主应用使用子应用注册列表，选用指定版本

# 使用
### 运行主应用
yarn start:vue
yarn start:serve
yarn start:main
> TODO 使用npm-run-all 一键start所有命令

### 运行子应用vue项目
yarn start:vue

### 开启express服务只加载静态资源的子应用包
yarn start:serve
