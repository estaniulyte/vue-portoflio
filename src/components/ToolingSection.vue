<template>
  <div>
    <h2>Tooling</h2>
    <v-row class="d-flex flex-wrap align-center justify-md-start align-self-center col-12">
      <v-col class="col-sm-6 col-lg-6 col-xl-6 col-12 pa-2 ma-0" v-for="(project, index) in ToolingData" :key="index">

      </v-col>
    </v-row>
    <v-row dense>
      <v-col class="mb-7 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-12" v-for="(project, index) in ToolingData" :key="index">
        <v-card
          color="#385F73"
          dark
        >
          <v-row class="d-flex flex-no-wrap justify-space-between">
            <v-col class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12 pa-2 px-6 ma-0">
              <v-card-title
                class="text-h5"
                v-text="project.name"
              ></v-card-title>
              <v-card-text class="text--white">
                <div> {{ project.description }} </div>
              </v-card-text>
              <v-card-text class="text--white">
                <div> <b>Role:</b> {{ project.role }} </div>
              </v-card-text>
            </v-col>
            <v-col class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12 pa-2 ma-0 px-6" height="250px" >
              <v-img
                class="ma-3 px-4 rounded-lg"
                aspect-ratio="1.7"
                contain
                :src="project.gif"
              >
                <template v-slot:placeholder>
                  <loading-placeholder />
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToolingData from '@/data/unity_tooling.json';
import LoadingPlaceholder from '@/components/LoadingPlaceholder'

export default {
  name: 'ToolingSection',
  data: () => ({
    ToolingData,
  }),
  components: {
    LoadingPlaceholder
  }
}
</script>