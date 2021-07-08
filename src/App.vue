<template>
  <v-app>
    <v-main>
      <app-bar />
      <router-view class="pb-4" />
      <app-footer />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import AppFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    AppBar,
    AppFooter
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body { font-family: 'Roboto', sans-serif; }
</style>
