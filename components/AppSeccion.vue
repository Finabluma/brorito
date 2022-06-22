<template>
  <div :class="{ inner_content: contacta }">
    <h1>{{ seccionData.attributes.titulo }}</h1>
    <div
      :class="{ lead: lead }"
      v-html="seccionData.attributes.contenido"
    ></div>
  </div>
</template>

<script>
export default {
  name: "pagesections",
  props: {
    seccion: Object,
  },
  computed: {
    seccionData() {
      return this.seccion.data;
    },
    lead() {
      return this.$route.name === "reservas";
    },
    contacta() {
      return this.$route.name === "contacta";
    },
  },
};
</script>

<style lang="postcss" scoped>
.lead {
  @apply font-hero
    font-light
    text-paragraph;
}
</style>
