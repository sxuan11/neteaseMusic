export default [
  {
    path: '/user',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/login',
      },
      {
        name: 'emailLogin',
        path: '/user/login/email',
        component: './User/emailLogin',
      },
      {
        name: 'phoneLogin',
        path: '/user/login/phone',
        component: './User/phoneLogin',
      },
      {
        name: 'checkPhoneLogin',
        path: '/user/login/checkPhoneLogin',
        component: './User/checkPhoneLogin',
      },
      {
        name: 'name',
        path: '/user/login/name',
        component: './User/name',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
