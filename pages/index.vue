<template>
  <div>
    <v-container>
      <v-btn
        v-for="(color, i) in colors"
        :key="`color-${i}`"
        :color="color"
      >
        {{ color }}
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  colors: string[] = [
    'primary',
    'info',
    'success',
    'warning',
    'error',
    'background'
  ]
}

</script>
