import gql from 'graphql-tag'

const PlatosMar = gql`
  query PlatosMar($sort:[String]){
    platosMars(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
        }
      }
    }
  }
`
const PlatosTierra = gql`
  query PlatosTierra($sort:[String]){
    platosTierras(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
        }
      }
    }
  }
`
const Carpaccios = gql`
  query Carpaccios($sort:[String]){
    platosCarpaccios(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
        }
      }
    }
  }
`
const Postres = gql`
  query Postres($sort:[String]){
    postres(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
        }
      }
    }
  }
`
const VinosBlancos = gql`
  query VinosBlancos($sort:[String]){
    vinosBlancos(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
          DO{
            data{
              attributes{
                Nombre
              }
            }
          }
          variedades{
            data{
              attributes{
                Nombre
              }
            }
          }
        }
      }
    }
  }
`
const VinosTintos = gql`
  query VinosTintos($sort:[String]){
    vinosTintos(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
          DO{
            data{
              attributes{
                Nombre
              }
            }
          }
          variedades{
            data{
              attributes{
                Nombre
              }
            }
          }
        }
      }
    }
  }
`
const VinosRosados = gql`
  query VinosRosados($sort:[String]){
    vinosRosados(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
          DO{
            data{
              attributes{
                Nombre
              }
            }
          }
          variedades{
            data{
              attributes{
                Nombre
              }
            }
          }
        }
      }
    }
  }
`
const Cavas = gql`
  query Cavas($sort:[String]){
    cavas(sort:$sort){
      data{
        attributes{
          Nombre
          Precio
          DO{
            data{
              attributes{
                Nombre
              }
            }
          }
          variedades{
            data{
              attributes{
                Nombre
              }
            }
          }
        }
      }
    }
  }
`

export { PlatosMar, PlatosTierra, Carpaccios, Postres, Cavas, VinosBlancos, VinosTintos, VinosRosados };
