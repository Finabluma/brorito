<template>
  <div v-if="!$apollo.loading" id="prensa">
    <app-header />
    <main>
      <h1 class="sr-only">Prensa</h1>
      <prensa-teaser
        :prensas="prensas"
        title="Prensa"
        subtitle="así vemos las cosas"
      />
      <app-aside layout="green">
        <template slot="header">
          <h2 class="sr-only">Y mientras esperas ...</h2>
        </template>
        <p>
          Tanto en nuestra cocina como en nuestra oferta de vinos encontrarás
          una variedad de productos que esperamos sean de tu agrado. Te
          inivitamos a consultar nuestra carta. No dudes en preguntarnos en caso
          de duda. Bienvenid@ :)
        </p>
        <template slot="footer">
          <app-button
            to="carta"
            title="La Carta"
            variant="primary"
            size="small"
          >
            la carta
          </app-button>
        </template>
      </app-aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppAside from '~/components/AppAside.vue'
import AppButton from '~/components/AppButton.vue'
import AppHeader from '~/components/AppHeader.vue'

import { PrensaQuery } from '~/graphql/queries/prensa'

export default {
  name: 'prensa',
  components: { AppHeader, AppAside, AppButton },
  apollo: {
    $loadingKey: 'loading',
    prensas: {
      prefetch: true,
      query: PrensaQuery,
      variables() {
        return { sort: 'publishedAt:desc' }
      },
    },
  },
}
</script>
<style lang="postcss">
#prensa {
  @apply bg-gray-300
  dark:bg-gray-700;

  & aside .inner {
    @apply flex
    flex-col
    justify-center
    items-center;

    &:before {
      @apply mb-10;
    }

    &:after {
      @apply mt-2;
    }

    & h2,
    & p {
      @apply px-2
      mx-auto
      sm:w-10/12
      md:w-10/12
      lg:w-9/12
      xl:w-10/12;
    }
    & h2 {
      @apply text-altheader font-dejanire content-after text-center mb-5;

      &:after {
        @apply block
          w-10
          h-1
          mx-auto
        bg-slate800
          dark:bg-gray-300;
      }
    }

    & p {
      @apply font-hero font-light text-paragraph mb-5 text-center;
    }
  }
}
</style>
