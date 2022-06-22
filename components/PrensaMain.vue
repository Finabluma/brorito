<template>
  <section>
    <h2 class="sr-only">{{ prensas[0].attributes.titulo }}</h2>
    <div class="enlaces">
      <nav id="breadcrumb" aria-label="Breadcrumb">
        <h2 class="sr-only">Breadcrumbs</h2>
        <div>
          <ol class="breadcrumbs" role="list">
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li><NuxtLink to="/prensa">Prensa</NuxtLink></li>
            <li>
              <i>{{ prensas[0].attributes.titulo }}</i>
            </li>
          </ol>
        </div>
      </nav>
    </div>
    <article>
      <h2 class="sr-only">{{ prensas[0].attributes.titulo }}</h2>
      <div v-html="prensas[0].attributes.contenido" class="body"></div>
      <div v-if="prensas[0].attributes.video" class="video">
        <video-player :src="prensas[0].attributes.video.URL" />
      </div>
      <aside v-if="prensas[0].attributes.etiquetas.data">
        <h2>Etiquetas</h2>
        <div class="tags">
          <div
            v-for="tag in prensas[0].attributes.etiquetas.data"
            :key="tag.id"
          >
            <div>{{ tag.attributes.nombre }}</div>
          </div>
        </div>
      </aside>
      <footer>
        <p>Vuelve a <NuxtLink to="/prensa">Prensa</NuxtLink></p>
      </footer>
    </article>
    <app-aside v-if="prensas[0].attributes.prensarelacionada" layout="green">
      <template slot="header">
        <div class="header">
          <h2>{{ prensas[0].attributes.prensarelacionada.intro }}</h2>
        </div>
      </template>
      <template>
        <div class="related">
          <article
            v-for="related in prensas[0].attributes.prensarelacionada.prensas
              .data"
            :key="related.id"
          >
            <nuxt-link
              :to="{
                name: 'prensa-slug',
                params: { slug: related.attributes.slug },
              }"
            >
              <div class="img">
                <div v-if="related.attributes.imagen.data" class="has-img">
                  <nuxt-picture
                    provider="cloudinary"
                    :src="
                      related.attributes.imagen.data.attributes
                        .provider_metadata.public_id
                    "
                    :alt="
                      related.attributes.imagen.data.attributes.alternativeText
                    "
                    width="100"
                    height="100"
                    fit="thumb"
                    :modifiers="modifiers"
                    loading="lazy"
                  />
                </div>
                <div class="has-not-img" v-else>
                  <SVGMarieta />
                </div>
              </div>
              <div class="content">
                <h2>
                  {{ related.attributes.titulo }}
                </h2>
                <ul>
                  <li>
                    <span> La Volta </span>
                  </li>
                  <li>
                    <time
                      datetime="2020-01-09"
                      itemprop="dateCreated pubdate datePublished"
                    >
                      {{
                        moment(related.attributes.publishedAt).format(
                          'D MMM YY'
                        )
                      }}
                    </time>
                  </li>
                </ul>
              </div>
            </nuxt-link>
          </article>
        </div>
      </template>
      <template slot="footer">
        <app-button
          to="/prensa"
          title="Articulos de Prensa"
          variant="primary"
          size="small"
          >Más articulos</app-button
        >
      </template>
    </app-aside>
  </section>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
import AppAside from '~/components/AppAside.vue'
import AppButton from '~/components/AppButton.vue'

var moment = require('moment')
require('nuxt-video-player/src/assets/css/main.css')
export default {
  props: {
    prensas: Array,
    size: String,
  },
  data: () => ({
    moment: moment,
    modifiers: {
      zoom: 0.75,
      gravity: 'southEast',
      effect: 'colorize:5',
      color: 'white',
      ar: '1:1',
    },
  }),
  components: {
    VideoPlayer,
    AppAside,
    AppButton,
  },
}
</script>

<style lang="postcss" scoped>
section {
  @apply relative
  z-30
  bg-gray-300
  mx-auto
  dark:bg-gray-700;

  & .enlaces {
    @apply px-0.5 py-3
    w-11/12
    mx-auto
    md:w-10/12
    md:pt-1
    md:pb-3
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12;

    & nav {
      @apply py-3 lg:py-6;

      & ol {
        @apply flex flex-wrap;

        & li {
          @apply font-hero
          lowercase
          leading-7
          flex
          items-center
          content-after;

          &:last-child::after {
            @apply content-none;
          }

          & a {
            @apply content-after;

            &:after {
              @apply block w-full h-0.5 bg-slate800 dark:bg-gray-500;
            }

            &:hover {
              @apply text-opacity-60;

              &:after {
                @apply bg-opacity-60;
              }
            }
          }
        }
      }
    }
  }

  & article {
    @apply mx-auto
    w-11/12
    md:w-10/12
    lg:w-8/12
    xl:w-7/12
    2xl:w-6/12;

    & .body {
      @apply font-dejanire font-light
      leading-normal
      text-[21px]
      lg:text-[24px];
    }

    & .video {
      @apply flex flex-col
      items-center
      justify-center
      py-3
      mt-3;

      & .v-player {
        @apply shadow-slate400 dark:shadow-md;
      }
    }

    & aside {
      @apply my-8;
      & h2 {
        @apply text-xl;
      }

      & .tags {
        @apply flex items-center flex-wrap;

        & div {
          @apply font-hero
          text-base
          lowercase
          leading-7
          px-1
          flex
          items-center
          content-after;

          &:after {
            @apply inline-block
              h-1
              w-1
              rounded-full
              bg-black/75
              mx-2
              dark:bg-gray-300;
          }

          &:last-child::after {
            @apply content-none;
          }
        }
      }
    }

    & footer {
      @apply mb-12;

      & p {
        & a {
          @apply ml-2 inline-block content-after;

          &:after {
            @apply block w-full h-0.5 bg-slate800 dark:bg-gray-500;
          }

          &:hover {
            @apply text-opacity-60;

            &:after {
              @apply bg-opacity-60;
            }
          }
        }
      }
    }
  }

  & > aside {
    & .inner {
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

      & .header,
      & .related {
        @apply w-full
        mx-auto
        sm:w-11/12
        lg:w-10/12
        xl:w-9/12
        2xl:w-7/12;
      }

      & .header {
        @apply w-full
        mx-auto
        sm:w-11/12
        lg:w-full
        mb-5
        px-6
        sm:py-4
        md:py-8
        md:mb-0;

        & h2 {
          @apply font-dejanire
            capitalize
            content-after
            sm:items-start
            lg:text-4xl;

          &:after {
            @apply block
              w-5
              h-1
              mt-1
              ml-0
            bg-slate800
              dark:bg-gray-300
              sm:w-10;
          }
        }
      }

      & .related {
        @apply w-full
        mx-auto
        mb-8
        sm:w-11/12
        sm:mb-10
        md:flex
        md:flex-wrap
        md:justify-start
        lg:w-full;

        & article {
          @apply w-full
          mx-0
          md:w-6/12
          md:mb-2;

          &:nth-child(even) {
            @apply md:pl-2;
          }

          & a {
            @apply flex
            justify-center
            items-center
            md:justify-center
            md:border
            md:border-slate400
            md:p-2
            md:bg-white/50
            lg:justify-start
            dark-hover:opacity-80 transition-opacity
            dark:border-gray-700
          dark:md:bg-gray-800
            dark:md:bg-opacity-30;

            & .img {
              @apply w-20
              h-20
              overflow-hidden
              mr-2
              md:mr-2
              lg:w-24
              lg:h-24
              lg:mr-3;

              & .has-img,
              & .has-not-img {
                @apply w-full
                h-full
                overflow-hidden
                flex
                justify-center
                rounded-full
                border
                p-1
                border-slate300
                bg-slate100;
              }

              & .has-img {
                @apply dark:border-black/40
              dark:bg-black/20;

                & picture {
                  @apply rounded-full overflow-hidden h-full;
                }
              }
              & .has-not-img {
                @apply dark:bg-slate500
              dark:border-slate800/80
                dark:border-[5px];
              }
            }

            & .content {
              @apply w-8/12
              pb-2
              sm:w-10/12
              md:w-3/4
              md:pb-0;

              & h2 {
                @apply font-hero
                font-light
                leading-tight
                text-2xl
                border-b
                border-black/20
                dark:border-white/40
                md:border-b-0;
              }
              & ul {
                @apply text-xs flex
                justify-start;

                & li {
                  @apply border-b-0;

                  &:first-child {
                    @apply content-after flex items-center;
                  }
                }
              }
            }
          }

          &:last-child a .content {
            @apply border-b-0;
          }
        }
      }
    }
  }
}
</style>
