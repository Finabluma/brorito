import gql from 'graphql-tag'

const Seccion = gql`
  query Seccion($id:ID){
   seccion(id:$id){
      data{
        id
        attributes{
          slug
          contenido
          titulo
        }
      }
    }
  }
`

export default Seccion
