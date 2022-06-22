<template>
  <div v-if="!$apollo.loading" id="carta">
    <app-header />
    <main>
      <div class="hero" ref="hero">
        <div class="title" ref="title">
          <h1 class="sr-only">{{ seccion.data.attributes.titulo }}</h1>
          <SVGCarta />
        </div>
        <svg
          viewBox="0 0 1366 74.28"
          class="is-divider"
          preserveAspectRatio="xMidYMin slice"
        >
          <path d="M0 0v74.28h1366V0s-279.5 60-683 60S0 0 0 0Z" />
        </svg>
      </div>
      <!-- END HERO -->
      <div class="relative z-30 bg-gray-300 dark:bg-gray-700">
        <div class="carta">
          <div id="platos">
            <h2>platos</h2>
            <div v-html="seccion.data.attributes.contenido" class="notas"></div>
            <div class="carta-items">
              <carta-restaurante :platosMars="platosMars"
                >Del Mar</carta-restaurante
              >
              <carta-restaurante :platosTierras="platosTierras"
                >De la tierra</carta-restaurante
              >
              <carta-restaurante :platosCarpaccios="platosCarpaccios"
                >Carpaccios</carta-restaurante
              >
              <carta-restaurante :postres="postres">Postres</carta-restaurante>
            </div>
          </div>
          <div id="bebidas">
            <h2>vinos & cavas</h2>
            <div class="carta-items">
              <carta-vinos-cavas :vinosTintos="vinosTintos"
                >Tintos</carta-vinos-cavas
              >
              <carta-vinos-cavas :vinosBlancos="vinosBlancos"
                >Blancos</carta-vinos-cavas
              >
              <carta-vinos-cavas :vinosRosados="vinosRosados"
                >Rosados</carta-vinos-cavas
              >
              <carta-vinos-cavas :cavas="cavas">Cavas</carta-vinos-cavas>
            </div>
          </div>
        </div>
        <!--END CARTA-->
        <app-aside layout="green">
          <template slot="header">
            <h2 class="sr-only">Y mientras esperas ...</h2>
          </template>
          <prensa-teaser
            :prensas="prensas"
            title="Prensa"
            subtitle="así vemos las cosas"
            layout="aside"
          />
          <template slot="footer">
            <app-button
              to="prensa"
              title="Articulos de Prensa"
              variant="primary"
              size="small"
              >Más articulos</app-button
            >
          </template>
        </app-aside>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import {
  PlatosMar,
  PlatosTierra,
  Carpaccios,
  Postres,
  VinosBlancos,
  VinosRosados,
  VinosTintos,
  Cavas,
} from '~/graphql/queries/CartaRestaurante'
import { PrensaQuery } from '~/graphql/queries/prensa'
import Seccion from '~/graphql/queries/Seccion'

import AppHeader from '~/components/AppHeader.vue'
import SVGCarta from '~/components/SVGCarta.vue'
import PrensaTeaser from '~/components/PrensaTeaser.vue'
import AppAside from '~/components/AppAside.vue'

export default {
  components: { PrensaTeaser, AppHeader, AppAside, SVGCarta },
  name: 'lacarta',
  apollo: {
    $loadingKey: 'loading',
    platosMars: {
      prefetch: true,
      query: PlatosMar,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    platosTierras: {
      prefetch: true,
      query: PlatosTierra,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    platosCarpaccios: {
      prefetch: true,
      query: Carpaccios,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    postres: {
      prefetch: true,
      query: Postres,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    vinosTintos: {
      prefetch: true,
      query: VinosTintos,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    vinosBlancos: {
      prefetch: true,
      query: VinosBlancos,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    vinosRosados: {
      prefetch: true,
      query: VinosRosados,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    cavas: {
      prefetch: true,
      query: Cavas,
      variables() {
        return { sort: 'Precio:desc' }
      },
    },
    seccion: {
      prefetch: true,
      query: Seccion,
      variables() {
        return { id: 2 }
      },
    },
    prensas: {
      query: PrensaQuery,
      variables() {
        return { pagination: { limit: 2 }, sort: 'publishedAt:desc' }
      },
    },
  },
}
</script>

<style lang="postcss">
#carta {
  @apply bg-gray-300 dark:bg-gray-700;
  & .hero {
    @apply relative
    w-screen
    h-[25vh]
    bg-azulejos
    bg-cover
    content-after
    sm:h-[300px]
    md:h-[400px]
    xl:h-[480px];

    &:after {
      @apply absolute
      z-auto
      h-full
      w-full
      backdrop-contrast-75
      bg-gradient-to-b
      from-black/40
      to-slate800
      dark:to-gray-800;
    }

    & .is-divider {
      @apply w-screen
      absolute
      z-20
      -bottom-1
      left-0
      fill-[#d1d5db]
      dark:fill-[#374151];
    }

    & .title {
      @apply absolute
      z-20
      h-full
      w-full
      px-3
      flex
      items-center
      pt-5
      sm:px-10
      md:px-20
      md:pb-0
      lg:px-52
      xl:pb-5
      xl:px-60;
    }
  }

  & .carta {
    @apply w-11/12
    mx-auto
    pt-6
    md:pb-8
    md:w-10/12
    lg:w-8/12
    xl:w-7/12;

    & h2 {
      @apply content-after
        capitalize
        leading-tight
        font-rooney
        text-6xl
        mb-8
        xl:text-8xl;

      &:after {
        lg: ml-0;
      }
    }

    & .notas {
      @apply mb-5
        font-hero
        font-light
        text-paragraph
        leading-7
        md:w-11/12
        lg:w-9/12
        2xl:w-6/12;
    }

    & .carta-items {
      @apply mb-10;
    }
  }
}
</style>
