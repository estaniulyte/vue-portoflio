<template>
    <v-container class="pt-7">
      <v-row class="align-center">
        <v-col
          cols="10"
          class="pl-10 d-flex align-center"
          style="background-color: #4a4a4a; color: white; text-transform: uppercase; height: 150px; font-size: 200%; letter-spacing: 4px;"
        >
          <b class="pr-2"> Evelina </b> <span style="color: #abe9da"> Staniulytė </span>
        </v-col>
        <v-col
          class="pl-9"
          cols="2"
        >
          <v-img src="@/assets/profile_pic.jpeg" alt="profilePicture" style="width:150px" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'CV',
}
</script>

<style scoped>

</style>
