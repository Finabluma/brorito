<template>
  <div id="map" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BasedMap",
  data() {
    return {
      map: null,
    };
  },
  methods: {},
  mounted() {
    this.map = new mapboxgl.Map({
      accessToken: process.env.MAPBOX_ACCESS_TOKEN,
      container: "map",
      style: process.env.MAPBOX_STYLE,
      center: [1.378, 41.13],
      zoom: 13,
      maxZoom: 18,
      minZoom: 13,
      attributionControl: false,
    })
      .addControl(new mapboxgl.NavigationControl(), "bottom-right")
      .addControl(new mapboxgl.FullscreenControl(), "top-right");
    this.map.scrollZoom.disable(),
      this.map.dragPan.enable({
        linearity: 0.3,
        maxSpeed: 1400,
        deceleration: 2500,
      });
  },
};
</script>

<style lang="postcss" scoped>
#map {
  @apply relative
  w-full
  h-full
  border-2
  border-white/75
  dark:border-black/25;
}
</style>
