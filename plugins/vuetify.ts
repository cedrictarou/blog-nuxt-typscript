import Vuetify from 'vuetify/lib'
import MacOs from '~/components/Svg/SvgIconMacOs.vue'

export default new Vuetify({
  icons: {
    values: {
      // macOs: ここが呼び出しicon名となる
      macOs: {
        component: MacOs
      }
    }
  }
})