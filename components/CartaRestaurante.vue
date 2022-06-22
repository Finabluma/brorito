<template>
  <carta-accordion>
    <template slot="header"
      ><h3><slot></slot></h3
    ></template>
    <template slot="body">
      <div v-if="this.platosMars">
        <div v-for="plato in this.mar" :key="plato.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ plato.attributes.Nombre }}</span>
            <span v-if="plato.attributes.Precio"
              >{{ formatPrice(plato.attributes.Precio) }}€</span
            >
            <span v-else><i>s/peso</i></span>
          </div>
        </div>
      </div>
      <div v-else-if="this.platosTierras">
        <div v-for="plato in this.tierra" :key="plato.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ plato.attributes.Nombre }}</span>
            <span v-if="plato.attributes.Precio"
              >{{ formatPrice(plato.attributes.Precio) }}€</span
            >
            <span v-else><i>s/peso</i></span>
          </div>
        </div>
      </div>
      <div v-else-if="this.platosCarpaccios">
        <div v-for="plato in this.carpaccio" :key="plato.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ plato.attributes.Nombre }}</span>
            <span v-if="plato.attributes.Precio"
              >{{ formatPrice(plato.attributes.Precio) }}€</span
            >
            <span v-else><i>s/peso</i></span>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="plato in postre" :key="plato.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ plato.attributes.Nombre }}</span>
            <span v-if="plato.attributes.Precio"
              >{{ formatPrice(plato.attributes.Precio) }}€</span
            >
            <span v-else><i>s/peso</i></span>
          </div>
        </div>
      </div>
    </template>
  </carta-accordion>
</template>

<script>
export default {
  name: "platoscarta",
  props: {
    platosMars: Object,
    platosTierras: Object,
    platosCarpaccios: Object,
    postres: Object,
  },
  methods: {
    formatPrice(num) {
      return parseFloat(num).toFixed(2);
    },
  },
  computed: {
    mar() {
      return this.platosMars.data;
    },
    tierra() {
      return this.platosTierras.data;
    },
    carpaccio() {
      return this.platosCarpaccios.data;
    },
    postre() {
      return this.postres.data;
    },
  },
};
</script>
