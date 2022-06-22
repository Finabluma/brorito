<template>
  <div v-if="!$apollo.loading" id="contacta">
    <app-header />
    <main>
      <div class="contact_content">
        <app-seccion :seccion="seccion" />
        <div class="mapa">
          <map-box-light />
        </div>
      </div>
      <app-aside layout="green">
        <h2 class="sr-only">Y mientras esperas ...</h2>
        <prensa-teaser
          :prensas="prensas"
          title="Prensa"
          subtitle="así vemos las cosas"
          layout="aside"
        >
        </prensa-teaser>
        <app-button
          to="prensa"
          title="Articulos de Prensa"
          variant="primary"
          size="small"
          >Más articulos</app-button
        >
      </app-aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppSeccion from '~/components/AppSeccion.vue'
import MapBoxLight from '~/components/MapBoxLight.vue'
import AppButton from '~/components/AppButton.vue'
import AppAside from '~/components/AppAside.vue'
import PrensaTeaser from '~/components/PrensaTeaser.vue'

import Seccion from '~/graphql/queries/Seccion'
import { PrensaQuery } from '~/graphql/queries/prensa'

export default {
  name: 'contacta',
  components: {
    AppHeader,
    AppFooter,
    AppSeccion,
    MapBoxLight,
    AppButton,
    AppAside,
    PrensaTeaser,
  },
  apollo: {
    $loadingKey: 'loading',
    seccion: {
      prefetch: true,
      query: Seccion,
      variables() {
        return { id: 3 }
      },
    },
    prensas: {
      query: PrensaQuery,
      variables() {
        return { pagination: { limit: 2 }, sort: 'publishedAt:desc' }
      },
    },
  },
  head() {
    return {
      title: 'Contacta',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css',
        },
      ],
    }
  },
}
</script>
<style lang="postcss">
#contacta {
  @apply dark:bg-gray-700;
  & main {
    & .contact_content {
      @apply relative
      z-10
      pt-[10vh]
      sm:pt-[15vh]
      md:pt-[11vh]
      xl:pt-[11vh];

      & .mapa {
        @apply w-[95vw]
        h-[70vh]
        mx-auto
        shadow-md
        sm:w-[98vw]
        sm:h-[80vh]
        md:h-[70vh]
        md:w-[95vw]
        xl:w-[85vw];
      }

      & .inner_content {
        @apply absolute
        z-10
        w-10/12
        flex
        flex-col
        left-4
        bottom-5
        p-3
        sm:left-6
        sm:bg-white/20
        sm:w-auto
        md:left-10
        md:bg-transparent
        xl:left-36
        xl:bottom-10
        2xl:left-40;

        & h1 {
          @apply font-dejanire
          text-6xl
          text-slate800
          capitalize
          content-after
          mb-5
          xl:text-8xl;

          &:after {
            @apply bg-slate800;
          }
        }

        & div {
          @apply pl-2 xl:pl-3;
          & p {
            @apply font-hero font-light text-slate800;
          }

          & a {
            @apply text-slate800;
          }
        }
      }
    }
  }
}
#contacta #map .mapboxgl-ctrl-bottom-left {
  display: none !important;
}
</style>
