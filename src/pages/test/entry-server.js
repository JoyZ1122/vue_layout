/**
 * 用于打包服务器直出部分的逻辑
 */
import { createApp } from "./one";
import one from "./one.vue";
export default (context) => {
  return new Promise((resolve, reject) => {
    one.asyncData().then(() => {
      console.log(11);

      setTimeout(() => {
        //模拟拉取接口获取数据
        const { app, store } = createApp();
        // 调用store actions的方法
        store
          .dispatch("getData", "page2")
          .then(() => {
            context.state = store.state; //生成到tpl.html中作为浏览器端全局变量
            resolve(app);
          })
          .catch(reject);
      }, 100);
    });
  });
};
