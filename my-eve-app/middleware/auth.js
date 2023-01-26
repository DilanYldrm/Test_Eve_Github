export default function ({app, route, redirect}){
    if (route.path !== '/pages/SignIn') {
      //we are on a protected route
      if(!app.$fire.auth.currentUser) {
        //take them to sign in page
        return redirect('/pages/SignIn')
      }
    } else if (route.path === '/pages/SignIn') {
      if(!app.$fire.auth.currentUser) {
        //leave them on the sign in page
      } else {
        return redirect('/')
      }
    }
  }
  