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
export default PrensaQuery
