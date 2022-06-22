<template>
  <div id="post">
    <app-header />
    <main>
      <prensa-header :prensas="prensa" />
      <prensa-main :prensas="prensa" />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
import PrensaHeader from '~/components/PrensaHeader.vue'
import PrensaMain from '~/components/PrensaMain.vue'

import { PrensaSlug } from '~/graphql/queries/prensa'

export default {
  name: 'articulo',
  components: {
    AppHeader,
    AppFooter,
    PrensaHeader,
    PrensaMain,
  },
  async asyncData({ app, params, redirect }) {
    const client = app.apolloProvider.defaultClient
    const slug = params.slug
    const prensa = await client
      .query({
        query: PrensaSlug,
        variables: { slug: slug },
      })
      .then(({ data }) => {
        if (data.prensas.data.length === 0) {
          redirect('/404')
        }
        return data && data.prensas.data
      })
    return { prensa }
  },
}
</script>

<style lang="postcss">
#post {
  @apply bg-gray-300 dark:bg-gray-700
  min-h-screen
  flex
  flex-col;

  & footer {
    @apply mt-auto;
  }

  & section {
    & h2,
    & h3,
    & h4,
    & h5,
    & p,
    & ul {
      @apply mb-3;
    }

    & h2 {
      @apply text-4xl;
    }

    & h3 {
      @apply text-3xl;
    }

    & h4 {
      @apply text-2xl;
    }

    & blockquote p,
    & blockquote cite {
      @apply text-restaurante
      leading-tight;
    }

    & figure.image,
    & figure.image.imaged_resized {
      @apply mx-auto mt-6 mb-4;

      & img {
        @apply shadow;
      }

      & figcaption {
        @apply text-base py-1;
      }
    }

    & article aside h2 {
      @apply text-2xl;
    }

    & > aside .inner .header h2 {
      @apply text-4xl
      md:text-5xl;
    }

    & > aside .related article .content ul {
      @apply mt-1
      mb-0
      xl:mt-0.5;
    }

    & > aside .related article .content h2 {
      @apply text-altheader
      leading-tight
      mb-1
      md:text-2xl
      md:pb-0
      md:mb-0
      lg:text-3xl;
    }
  }
}
</style>
