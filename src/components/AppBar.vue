<template>
    <v-app-bar
        elevation="1"
        color="appBar"
    >
        <v-spacer />
        <v-btn text color="white" href="/">
            Main
        </v-btn>
        <v-btn text color="white" href="/experience">
            experience at unity
        </v-btn>
        <v-btn text color="white" href="/cv">
            cv
        </v-btn>
        <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
        <v-btn text color="white" v-bind="attrs"
          v-on="on">
            hobbies
        </v-btn>
        </template>
      <v-list>
        <v-list-item>
            <v-btn text href="/hobbies/photography">Photography</v-btn>
        </v-list-item>
        <v-list-item>
            <v-btn text href="/hobbies/illustrations"> Illustrations</v-btn>
        </v-list-item>
    </v-list>
        </v-menu>
        <v-btn text color="white" href="/projects">
            side projects
        </v-btn>
    </v-app-bar>
</template>

<script>

export default {
  name: 'AppBar',
  data: function() {
  }
}
</script>
