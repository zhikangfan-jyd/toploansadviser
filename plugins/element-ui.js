import Vue from 'vue'
import { Backtop, Icon, Popover, Rate, Message } from 'element-ui'

Vue.use(Backtop);
Vue.use(Icon);
Vue.use(Popover);
Vue.use(Rate);

Vue.prototype.$message = Message;