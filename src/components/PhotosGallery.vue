<template>
  <v-container>
    <p class="pl-2 font-weight-light text-h5">Some shots from portrait photo sessions</p>
    <p class="pl-2">Camera model: Canon EOS 200D, EF 50mm f/1.8 STM</p>
    <v-row class="d-flex flex-wrap align-center justify-md-start align-self-center col-12">
      <v-col class="col-sm-6 col-lg-4 col-xl-3 col-12 pa-2 ma-0" v-for="(photo, index) in photos" :key="index">
        <photo-card :photo ="photo"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import photos from '@/data/photos.json';
import PhotoCard from '@/components/PhotoCard';

export default {
  name: 'PhotosGallery',
  components: { PhotoCard },
  data: () => ({
    photos,
    dialog: false,
  }),
  methods: {
  },
};
</script>
      