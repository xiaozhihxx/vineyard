import Home from 'views/Home';
import User from 'views/User';
import UserSearch from 'views/User/Search';
import UserSearchConfig from 'views/User/Search/Config';
import UserManage from 'views/User/Manage';

export default [
    {
        path: '/',
        alias: '/aaa', // 设置别名，在设置重定向时，url上显示的是/aaa，而不是/home；若不设置，url上则是/home
        redirect: '/home' // 重定向
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        // 此处path以'/'开头，代表根路径
        path: '/user', // 可以配置动态路由：/user/:id，其中id是参数
        name: 'User',
        component: User,
        children: [
            {
                path: 'search',
                name: 'User-Search',
                component: UserSearch,
                children: [
                    {
                        path: 'config',
                        name: 'User-Search-Config',
                        component: UserSearchConfig
                    }
                ]
            },
            {
                path: 'manage',
                name: 'User-Manage',
                component: UserManage
            }
        ]
    }
];
