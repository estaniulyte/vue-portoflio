<template>
  <v-card
    class="mx-auto grow"
    height="38vh"
  >
    <v-img
      height="38vh"
      :src="photo.url"
      @click.stop="dialog = true"
    >
      <template v-slot:placeholder>
        <loading-placeholder />
      </template>
    </v-img>
    <v-dialog v-model="dialog" max-width="720">
      <v-card>
        <v-img :src="photo.url" height="auto" max-height="860">
          <template v-slot:placeholder>
            <loading-placeholder />
          </template>
        </v-img>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" color="red darken-1" text>
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import LoadingPlaceholder from '@/components/LoadingPlaceholder'

export default {
  name: 'PhotoCard',

  data: () => ({
    dialog: false,
  }),
  props: {
    photo: {
      type: Object,
      default: null
    }
  },
  components: {
    LoadingPlaceholder,
  }
};
</script>

<style scoped>
.v-card:hover {
  cursor: pointer;
  overflow: hidden;
}

.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.01); }
</style>
