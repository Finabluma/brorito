<template>
  <div v-if="!$apollo.loading" id="reservas">
    <app-header />
    <main>
      <div class="hero" ref="hero">
        <div class="content">
          <div class="content-inner">
            <app-seccion :seccion="seccion" />
          </div>
          <SVGCallNow />
        </div>
        <SVGUniverse />
      </div>
      <app-aside layout="gray">
        <h2 class="sr-only">Reservas sujetas a condiciones</h2>
        <reservas-condiciones :condicionReserva="condicionReserva" />
        <section>
          <h2>¿Qué comer?</h2>
          <p>
            Abre el apetito echando un vistazo a lo que podemos ofrecer. En
            nuestra cocina encontrarás una gran variedad de productos que
            esperamos sean de tu agrado. Bienvenid@ a nuestro hogar ;)
          </p>
          <app-button to="carta" title="La Carta" variant="primary" size="small"
            >la carta</app-button
          >
        </section>
      </app-aside>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppAside from '~/components/AppAside.vue'
import SVGCallNow from '~/components/SVGCallNow.vue'
import SVGUniverse from '~/components/SVGUniverse.vue'

import Seccion from '~/graphql/queries/Seccion'
import CartaReserva from '~/graphql/queries/CondicionesReserva'

export default {
  name: 'reservas',
  components: {
    AppHeader,
    AppFooter,
    AppAside,
    SVGCallNow,
    SVGUniverse,
  },
  apollo: {
    $loadingKey: 'loading',
    condicionReserva: {
      prefetch: true,
      query: CartaReserva,
    },
    seccion: {
      prefetch: true,
      query: Seccion,
      variables() {
        return { id: 1 }
      },
    },
  },
}
</script>

<style lang="postcss">
#reservas {
  @apply bg-gradient-to-b
    from-white/30
    via-gray-200
    to-gray-300
    dark:bg-none
    dark:bg-gray-700;

  & main {
    & .hero {
      @apply relative
      w-screen
      h-auto
      overflow-x-hidden
      flex
      justify-center
      pb-10
      md:h-full
      lg:min-h-[80vh]
      xl:min-h-[70vh];

      & .content {
        @apply relative
        z-30
        w-10/12
        mt-16
        md:w-10/12
        md:mt-32
        lg:w-9/12
        lg:mt-32
        xl:w-8/12
        2xl:w-7/12;

        & .content-inner {
          @apply max-w-xs
          mb-5
          sm:mb-10
          lg:ml-0;

          & h1 {
            @apply font-dejanire
            text-5xl
            content-after
            mb-5
            lg:text-7xl
            lg:text-left;

            &:after {
              lg: ml-0;
            }
          }
        }
      }
    }

    & section:last-of-type {
      @apply pt-5
      w-11/12
      mx-auto
      flex
      flex-col
      justify-center
      items-center
      sm:w-9/12
      lg:w-8/12
      xl:w-7/12
      2xl:px-10;

      & h2,
      & p {
        @apply px-2;
      }
      & h2 {
        @apply text-altheader font-dejanire content-after mb-5;

        &:after {
          @apply mx-auto;
        }
      }

      & p {
        @apply font-hero font-light text-paragraph mb-5 text-center;
      }
    }
  }
}
</style>
