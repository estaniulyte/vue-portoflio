<template>
  <v-container
    class="align-center"
  >
    Side Projects:
    - Cosmolligraphy
    - UX / UI courses
    <balsamique-section />
    <iframe
      style="border: 1px solid rgba(0, 0, 0, 0.1);"
      width="800"
      height="450"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzXdd9PEUEppKdTkXsaHdQd%2FUntitled%3Fnode-id%3D0%253A1"
      allowfullscreen
    />
    Prototype preparation for user testing:
    <a
      href="https://evelinastaniulyte722314.invisionapp.com/public/prototype/sks5o8fvp008gc601y2pdggyl/3cfe6a04"
      target="_blank"
    >
      Invision Link
    </a>
  </v-container>
</template>

<script>
import BalsamiqueSection from '@/components/BalsamiqueSection';

export default {
  name: 'SideProjects',
  components: {
    BalsamiqueSection,
  },
  data: () => ({
    projects: [
      {
        name: "Project Rpository",
        
      }
    ]
  }),
  
}
</script>
