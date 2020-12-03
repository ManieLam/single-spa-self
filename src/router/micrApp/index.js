import micrAppVue from './vue'
// const prefix = '/micrApp'
const prefix = require('../../../common/index').prefixRouteName

const routers = [].concat(micrAppVue)
routers.map(router => {
  router.path = `/${prefix}${router.path}`
  router.meta = {
    isMicrApp: true
  }
  return router
})
export default routers