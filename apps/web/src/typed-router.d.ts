
import 'vue-router/auto-routes'

declare module 'vue-router/auto-routes' {
  interface RouteNamedMap {
    home: RouteRecordInfo<'home', '/', Record<never, never>, Record<never, never>>
    about: RouteRecordInfo<'about', '/about', Record<never, never>, Record<never, never>>
  }
}
