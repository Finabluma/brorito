<template>
  <prensa-teaser :prensas="prensas" />
</template>

<script>
import PrensaTeaser from '~/components/PrensaTeaser.vue'
import PrensaQuery from '~/graphql/queries/prensa'
export default {
  components: { PrensaTeaser },
  name: 'IndexPage',
  apollo: {
    $loadingKey: 'loading',
    prensas: {
      query: PrensaQuery,
      variables() {
        return { pagination: { limit: 2 }, sort: 'publishedAt:desc' }
      },
    },
  },
}
</script>
