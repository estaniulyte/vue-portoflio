<template>
  <v-container class="pt-7">
    <v-row class="align-center pb-5">
      <v-col
        cols="10"
        class="pl-10 d-flex align-center"
        style="background-color: #4a4a4a; color: white; text-transform: uppercase; height: 150px; font-size: 200%; letter-spacing: 4px;"
      >
        <b class="pr-2"> Evelina </b> <span style="color: #abe9da"> Staniulytė </span>
      </v-col>
      <v-col
        class="pl-8 pr-0 align-end"
        cols="2"
      >
        <v-img src="@/assets/profile_pic.jpeg" alt="profilePicture" style="width:150px; float: right;" />
      </v-col>
    </v-row>
    <v-row style="background-color: #f0f0f0;">
      <v-col cols="3">
        <div class="titleText">
          Contact
        </div>
        <div>
          e.staniulyte@gmail.com
        </div>
        <div>
          Vilnius, Lithuania
        </div>
        <div>
          Linkedin
        </div>
      </v-col>
      <v-col>
        <div class="titleText">
          Profile
        </div>
        <div>
          About Me
        </div>
      </v-col>
    </v-row>
    <v-row style="background-color: #f0f0f0;">
      <v-col cols="3">
        <div class="titleText">
          Education
        </div>
        <div>
          Decription
        </div>
        <div>
          Description
        </div>
      </v-col>
      <v-col cols="3">
        <div class="titleText">
          Skills
        </div>
        <div>

        </div>
      </v-col>
      <v-col>
        <div class="titleText">
          Software expertise
        </div>
        <div>
          List
        </div>
      </v-col>
    </v-row>
    <v-row style="background-color: #f0f0f0;" class="mb-4">
      <v-col>
        <div class="titleText">
          Work experience
        </div>
        <div>
          Position name
          Description
        </div>
        <div>
          Position name
          Description
        </div>
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
.titleText {
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
}
</style>
