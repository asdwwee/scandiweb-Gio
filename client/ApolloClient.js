const client = new ApolloClient({
  uri: 'http://scandiweb-gio.free.nf/graphql',
  cache: new InMemoryCache(),
}); 