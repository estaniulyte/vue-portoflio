import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue,
        secondary: colors.blue,
        accent: colors.amber.darken2,
        error: colors.red.accent3,
        appBar: '#1c8087',
        footer: colors.grey.darken1,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});