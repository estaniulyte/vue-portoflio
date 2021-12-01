<template>
  <v-row
    class="fill-height ma-0"
    align="center"
    justify="center"
    color="#B5838D"
  >
    <v-progress-circular
      indeterminate
      color="blue-grey darken-1"
      :size="60"
      :width="7"
    />
  </v-row>
</template>

<script>
export default {
  name: 'LoadingPlaceholder',
  data: () => ({
  }),
}
</script>