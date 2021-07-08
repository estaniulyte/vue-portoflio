<template>
    <v-container>
        <p class="pl-2 font-weight-light text-h5">Some shots from portrait photo sessions</p>
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
  components: { PhotoCard },
  name: 'PhotosGallery',
  data() {
    return {
      photos,
      dialog: false,
    }
  },
  methods: {
  },
};
</script>
      