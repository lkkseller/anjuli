import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'
import { getUser } from '@/utils/session'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(to, from, next) => {
  if (to.meta.requireAuth) {
    if (getUser()) {
      document.title = getPageTitle(to.meta.title)
      NProgress.start()
      if (to.path === '/') {
        next({ path: '/' })
        NProgress.done()
      } else {
        next()
      }
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
