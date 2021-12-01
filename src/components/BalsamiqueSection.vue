<template>
  <div>
    <p>App lo-fi wireframes created with Basamique</p>
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      delimiter-icon="mdi-minus"
    > 
      <template v-for="(item, index) in BalsamiqueFiles"> 
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1" 
          :key="index"
        > 
          <v-row class="flex-nowrap" style="height:100%"> 
            <template v-for="(n,i) in columns"> 
              <template v-if="(+index + i) < BalsamiqueFiles.length"> 
                <v-col :key="i"> 
                  <v-sheet
                    v-if="(+index + i) < BalsamiqueFiles.length" 
                    height="100%"
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <div class="display-3 my-6">
                        <v-img
                          width="240px"
                          :src="BalsamiqueFiles[+index + i].image"
                          @click.stop="dialog = true"
                        >
                          <template v-slot:placeholder>
                            <loading-placeholder />
                          </template>
                        </v-img>
                      </div>
                    </v-row>
                  </v-sheet>
                </v-col> 
              </template> 
            </template> 
          </v-row> 
        </v-carousel-item> 
      </template> 
    </v-carousel>
  </div>
</template>

<script>
import BalsamiqueFiles from '@/data/balsamique_files.json';
import LoadingPlaceholder from '@/components/LoadingPlaceholder'

export default {
  name: 'BalsamiqueSection',
  data: () => ({
    dialog: false,
    BalsamiqueFiles
   }),
  components: {
    LoadingPlaceholder,
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 4;
      }

      if (this.$vuetify.breakpoint.md) {
        return 3;
      }

      return 1;
    }
  },
};
</script>