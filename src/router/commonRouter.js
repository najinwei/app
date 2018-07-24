// 公共路由 kyy
import welPage from '@/views/common/welPage'
let commonRoutes = [
    {
      path: '/welPage',
      name: 'welPage',
      component: welPage
      }
  ]

let pathFunc=function(to, from, next){ 
		if (to.matched.length ===0) {   //如果未匹配到路由
		    from.name ? next({ name:from.name }) : next('/welPage');   //如果上级也未匹配到路由则跳转错误页面，如果上级能匹配到则转上级路由
		} else {
		    next();                                                                            //如果匹配到正确跳转
		}
}

export {commonRoutes,pathFunc};
