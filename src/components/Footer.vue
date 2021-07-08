<template>
    <v-footer class="pa-0">
        <v-card
            flat
            tile
            color="footer"
            class="white--text text-center"
            width="100%"
        >
            <v-divider />
            <v-card-text class="white--text" >
                © {{ new Date().getFullYear() }} Evelina Staniulytė
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    }),
}
</script>
