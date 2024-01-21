import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

export let client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:4000/graphql",
    credentials: 'same-origin',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    fetchOptions: {
      cache: "no-cache",
      mode: 'cors',
    },
  }),
  cache: new InMemoryCache({ addTypename: false })
})
