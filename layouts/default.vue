<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  mounted() {
    // this.$vuetifyが使用できるようになる
    console.log(this.$vuetify)
  }
}
</script>
