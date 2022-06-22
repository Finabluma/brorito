import gql from 'graphql-tag'

const PrensaQuery = gql`
  query Prensa($sort:[String], $pagination: PaginationArg){
   prensas(sort:$sort, pagination:$pagination){
      data{
        id
        attributes{
          titulo
          slug
          imagen{
            data{
              id
              attributes{
                provider_metadata
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`
const PrensaSlug = gql`
  query Prensa($slug: String){
  prensas(filters:{slug:{eq:$slug}}){
      data{
        id
        attributes{
          titulo
          imagen{
            data{
              id
              attributes{
                provider_metadata
                alternativeText
              }
            }
          }
          contenido
          video{
            URL
            nombre
          }
          etiquetas{
            data{
              id
              attributes{
                nombre
                slug
              }
            }
          }
          prensarelacionada{
            id
            intro
            prensas{
              data{
                id
                attributes{
                  titulo
                  slug
                  imagen{
                    data{
                      id
                      attributes{
                        provider_metadata
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export { PrensaQuery, PrensaSlug }
