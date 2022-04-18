import './App.css';
import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, useLazyLoadQuery, useSubscription } from 'react-relay';

import RelayEnvSetup from './RelayEnvSetup';
import { useState } from 'react';
// import { useMemo } from 'react';

const subscription = graphql`
  subscription AppSubscription {
    postWasAdded {
      title
    }
  }
`;


function App() {
  const [subscriptionStatus, setSubscriptionStatus] = useState('not started')

  const data = useLazyLoadQuery(
    graphql`
      query AppQuery {
        posts {
          id
          title
        }
      }
    `
  )

  // const config = useMemo(() => ({ variables: { }, subscription }), [Math.random()]);

  useSubscription(
    {
      onNext: (data) => {
        console.log('subscription data', data);
        setSubscriptionStatus(data['postWasAdded']['title'])
      },
      variables: { },
      subscription
    }
  );

  console.log(data);

  let posts = [];
  if (data?.posts) {
    posts = data.posts;
  }

  return (
    <div className="App">
      <h1> My Posts 2 </h1>
      <h3>
        {`Subscription Status: ${subscriptionStatus}`}
      </h3>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Wrapper() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvSetup}>
      <App />
    </RelayEnvironmentProvider>
  )
}

export default Wrapper;
