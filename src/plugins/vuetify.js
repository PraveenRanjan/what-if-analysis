import Vue from 'vue';
import 'font-awesome/css/font-awesome.min.css'
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            anchor: '#8c9eff',
          },
        },
      },
      icons: {
        iconfont: 'fa4',
      },
});
