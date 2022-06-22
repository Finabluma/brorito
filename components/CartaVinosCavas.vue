<template>
  <carta-accordion>
    <template slot="header">
      <h3><slot></slot></h3>
    </template>
    <template slot="body">
      <div v-if="this.vinosTintos">
        <div v-for="vino in tintos" :key="vino.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ vino.attributes.Nombre }}</span>
            <span>{{ formatPrice(vino.attributes.Precio) }}€</span>
          </div>
          <div v-if="vino.attributes.DO" class="do">
            <abbr title="Denominación de Origen">D.O.</abbr>
            {{ vino.attributes.DO.data.attributes.Nombre }}
          </div>
          <div v-if="vino.attributes.variedades" class="variedad">
            <div
              v-for="variedad in vino.attributes.variedades.data"
              :key="variedad.id"
            >
              {{ variedad.attributes.Nombre }}
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="this.vinosBlancos">
        <div v-for="vino in blancos" :key="vino.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ vino.attributes.Nombre }}</span>
            <span>{{ formatPrice(vino.attributes.Precio) }}€</span>
          </div>
          <div v-if="vino.attributes.DO" class="do">
            {{ vino.attributes.DO.data.attributes.Nombre }}
          </div>
          <div v-if="vino.attributes.variedades" class="variedad">
            <div
              v-for="variedad in vino.attributes.variedades.data"
              :key="variedad.id"
            >
              {{ variedad.attributes.Nombre }}
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="this.vinosRosados">
        <div v-for="vino in rosados" :key="vino.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ vino.attributes.Nombre }}</span>
            <span>{{ formatPrice(vino.attributes.Precio) }}€</span>
          </div>
          <div v-if="vino.attributes.DO" class="do">
            {{ vino.attributes.DO.data.attributes.Nombre }}
          </div>
          <div v-if="vino.attributes.variedades" class="variedad">
            <div
              v-for="variedad in vino.attributes.variedades.data"
              :key="variedad.id"
            >
              {{ variedad.attributes.Nombre }}
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="this.cavas">
        <div v-for="vino in cava" :key="vino.id" class="menu-item">
          <div class="nombre_precio">
            <span>{{ vino.attributes.Nombre }}</span>
            <span>{{ formatPrice(vino.attributes.Precio) }}€</span>
          </div>
          <div v-if="vino.attributes.DO" class="do">
            {{ vino.attributes.DO.data.attributes.Nombre }}
          </div>
          <div v-if="vino.attributes.variedades" class="variedad">
            <div
              v-for="variedad in vino.attributes.variedades.data"
              :key="variedad.id"
            >
              {{ variedad.attributes.Nombre }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </carta-accordion>
</template>

<script>
export default {
  name: "vinoscarta",
  props: {
    vinosTintos: Object,
    vinosRosados: Object,
    vinosBlancos: Object,
    cavas: Object,
  },
  methods: {
    formatPrice(num) {
      return parseFloat(num).toFixed(2);
    },
  },
  computed: {
    tintos() {
      return this.vinosTintos.data;
    },
    rosados() {
      return this.vinosRosados.data;
    },
    blancos() {
      return this.vinosBlancos.data;
    },
    cava() {
      return this.cavas.data;
    },
  },
};
</script>
