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
      <h2>
        VuetifyカスタムCSSのテスト
      </h2>
      <v-card
        v-for="(breakpoint, i) in breakpoints"
        :key="`breakpoint-${i}`"
        :color="breakpoint.color"
        :class="breakpoint.class"
      >
        {{ breakpoint.px }}pxで非表示
      </v-card>
      <v-icon color="red">
        $macOs
      </v-icon>
      <v-icon>
        $vuetify.icons.macOs
      </v-icon>
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

  breakpoints: { class: string, px: number, color: string }[] = [
    { class: 'hidden-ipad-and-down', px: 767, color: 'primary' },
    { class: 'hidden-ipad-and-up', px: 768, color: 'error' },
    { class: 'hidden-mobile-and-down', px: 425, color: 'success' },
    { class: 'hidden-mobile-and-up', px: 426, color: 'warning' }
  ]
}

</script>
