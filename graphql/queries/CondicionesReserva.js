import gql from 'graphql-tag'

const CartaReserva = gql`
  query condiciones{
    condicionReserva{
      data{
        attributes{
          nombre
          ... on CondicionReserva{
            condiciones{
              ... on ComponentReservasCondicion{
                contenido
              }
            }
          }
        }
      }
    }
  }
`
export default CartaReserva;

