import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

// 告诉vue使用vueRouter
Vue.use(Router);
// 通过注入路由，我们在任何组件中通过this.$router访问路由器(this.$router.push('/'))，通过this.$roue访问路由(this.$route.query.id)

// 当路由来的时候，去routes中去查找，去找到对应的内容
const router = new Router({
    // vue-router默认是hash模式：使用url的hash来模拟一个完整的url，于是url改变时，页面不会重新加载
    // history模式：利用history.pushState API来完成url跳转而无需重新加载页面
    mode: 'history',
    routes
});

// to：即将要进入的目标；from：当前导航正要离开的路由；next：一定要调用该方法来resolve这个钩子。
// router.beforeEach((to, from, next) => {
//     // todo
// });

/**
 * 完成的导航出发
 * 导航被触发。
 * 在失活的组件里调用离开守卫。
 * 调用全局的 beforeEach 守卫。
 * 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
 * 在路由配置里调用 beforeEnter。
 * 解析异步路由组件。
 * 在被激活的组件里调用 beforeRouteEnter。
 * 调用全局的 beforeResolve 守卫 (2.5+)。
 * 导航被确认。
 * 调用全局的 afterEach 钩子。
 * 触发 DOM 更新。
 * 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
 */

export default router;
