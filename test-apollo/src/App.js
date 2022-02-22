import React, { Component } from 'react'
import {Query} from '@apollo/client/react/components'
import { gql } from 'graphql-tag';

// const basicQuery = gql`
//   {
//     launchesPast(limit: 10) {
//       mission_name
//     }
//   }`

const scandiWebQuery = gql`
  query {
    categories {
      name
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <div>
        <Query query={scandiWebQuery}>
          {
            ({loading, error, data}) => {
              if (loading) return <p>"Loading..."</p>
              if (error) return <p>'Error... ${error.message}'</p>
              // if (data) return console.log(data)

              // return(
              //   <ul>
              //     {data.launchesPast.map((launch) => {
              //       return <li>{launch.mission_name}</li>
              //     })}
              //   </ul>
              // )

              return(
                  <ul>
                    {data.categories.map((category) => {
                      return <li>{category.name}</li>
                    })}
                  </ul>
                )
            }
          }
        </Query>
        
      </div>
    )
  }
}
