
const routes = [
  { path: '/signup', name: 'signup', component: () => import('pages/SignUp.vue') },
  { path: '/signin', name: 'signin', component: () => import('pages/SignIn.vue') },
  { path: '/signout', name: 'signout', component: () => import('pages/SignOut.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
