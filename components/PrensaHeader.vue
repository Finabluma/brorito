<template>
  <div class="hero-post" ref="hero">
    <div class="inner-hero" ref="inner">
      <div class="info-hero">
        <h1 itemprop="headline" ref="headline">
          {{ prensas[0].attributes.titulo }}
        </h1>
        <div class="meta-info">
          <ul ref="meta">
            <li>
              <span
                itemprop="author"
                itemscope
                itemtype="http://schema.org/Person"
              >
                <span itemprop="name">La Volta</span>
              </span>
            </li>
            <li>
              <time
                datetime="item.created"
                itemprop="dateCreated pubdate datePublished"
              >
                {{
                  moment(prensas[0].attributes.publishedAt).format('D MMM YY')
                }}
              </time>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nuxt-picture
      provider="cloudinary"
      v-if="prensas[0].attributes.imagen.data"
      :src="
        prensas[0].attributes.imagen.data.attributes.provider_metadata.public_id
      "
      :alt="prensas[0].attributes.imagen.data.attributes.alternativeText"
      fit="inside"
      :modifiers="modifiers"
      loading="lazy"
      ref="picture"
    />
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
var moment = require('moment')
export default {
  props: {
    prensas: Array,
  },
  data: () => ({
    moment: moment,
    heroScroll: gsap.timeline({ paused: true }),
    modifiers: {
      zoom: 0.75,
      gravity: 'southEast',
      effect: 'blur:20',
      color: 'white',
    },
  }),
  methods: {
    hero() {
      const { hero, inner, headline, meta } = this.$refs

      const tl = this.heroScroll

      tl.to(headline, {
        yPercent: '+=80',
        autoAlpha: 0,
      }).to(
        meta,
        {
          y: '-=30',
          autoAlpha: 0,
        },
        '-=0.6'
      )

      ScrollTrigger.create({
        trigger: hero,
        animation: tl,
        start: 'top top',
        pin: inner,
        pinSpacing: false,
        scrub: 1,
      })
    },
  },
  mounted() {
    this.hero()
  },
}
</script>

<style lang="postcss" scoped>
.hero-post {
  @apply relative
  w-screen
  h-[32vh]
  content-before
  overflow-hidden
  sm:h-[45vh]
  md:h-[25vh]
  lg:h-[33vh]
  xl:h-[32vh];

  &:before {
    @apply absolute
    w-full
    h-full
    z-10
    top-0
    bg-gradient-to-b
  from-black/40
  to-gray-800/90
    md:backdrop-blur-[1px]
    dark:to-gray-800;
  }

  & picture {
    @apply absolute
      inset-0;
  }

  & .inner-hero {
    @apply absolute
    w-screen
    bottom-2
    left-0
    z-10
    flex
    justify-center
    items-center
    sm:py-2
    md:py-3
    lg:pb-4;

    & .info-hero {
      @apply w-11/12
      mx-auto
      flex
      flex-col
      items-start
      justify-center
      md:w-10/12
      lg:w-8/12
      xl:w-7/12
      2xl:w-6/12;

      & h1 {
        @apply font-hero
        font-light
        text-3xl
        text-white/90
        content-after
        sm:mb-1
        sm:text-4xl
        md:text-4xl
        xl:text-4xl
        dark:text-gray-300;

        &:after {
          @apply bg-white/90 dark:bg-gray-300;
        }
      }

      & .meta-info {
        @apply text-white/90
        py-2
        sm:py-1
        lg:pt-2
        dark:text-gray-300;

        & ul {
          @apply flex
          text-xs
          font-hero;

          & li {
            @apply flex items-center;
          }

          & li:first-child {
            @apply content-after;

            &:after {
              @apply bg-white/75 dark:bg-gray-300;
            }
          }
        }
      }
    }
  }
}
</style>
