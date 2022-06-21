<template>
  <div>
    <div v-for="prensa in prensaData" :key="prensa.id">
      {{ prensa }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teasers',
  props: {
    prensas: {
      type: Object,
    },
  },
  computed: {
    prensaData() {
      return this.prensas.data
    },
  },
}
</script>

<style lang="postcss" scoped>
</style>
