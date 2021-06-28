import Vue from 'vue'
import { Backtop, Icon, Popover, Rate, Message, Slider } from 'element-ui'

Vue.use(Backtop);
Vue.use(Icon);
Vue.use(Popover);
Vue.use(Rate);
Vue.use(Slider);

Vue.prototype.$message = Message;