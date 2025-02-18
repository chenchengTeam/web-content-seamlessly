// 设置pinia仓库
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
 
const pinia = createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
// 对外暴露：入口文件需要安装仓库
export default pinia