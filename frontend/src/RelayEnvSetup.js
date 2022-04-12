import createRelaySubscriptionHandler from 'graphql-ruby-client/subscriptions/createRelaySubscriptionHandler';
import { createConsumer } from '@rails/actioncable';


const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')


function fetchQuery(
  operation,
  variables,
) {
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  }).catch(e => {
    console.log('bad');
    console.log(e);
  })
}

const cable = createConsumer('http://localhost:3000/cable');
const subscriptionHandler = createRelaySubscriptionHandler({
  cable,
})

const network = Network.create(fetchQuery, subscriptionHandler)

const source = new RecordSource()
const store = new Store(source)

export default new Environment({
  network,
  store,
})
