export default function auth({ next, router }) {
    if (!isLoggedIn()) {
      //return router.push({ name: 'Login' });
      //next({ name: 'Login' })
      console.log('adasdasd')
    }
  
    return next();
}

function isLoggedIn() {
  return localStorage.getItem('loggedIn')
}

// router.beforeEach((to, from, next) => {

//   if (to.matched.some(record => record.meta.requiresAuth)) {
      
//       if (!isLoggedIn()) {
//           next({
//               name: 'Login'
//           })
//       } else {
//           next()
//       }

//   } else if (to.matched.some(record => record.meta.requiresVisitor)) {

//       next({
//           name: 'Dashboard'
//       })

//   } else {
//       next() // make sure to always call next()!
//   }

// })