import './App.css';
import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, useLazyLoadQuery, useSubscription } from 'react-relay';

import RelayEnvSetup from './RelayEnvSetup';
import { useState } from 'react';
// import { useMemo } from 'react';

const subscription = graphql`
  subscription AppSubscription {
    postWasAddedOrUpdated {
      id
      title
      body
    }
  }
`;


function App() {
  const [fetchKey, setFetchKey] = useState(0);

  const data = useLazyLoadQuery(
    graphql`
      query AppQuery {
        posts {
          id
          title
        }
      }
    `,
    null,
    { fetchKey, fetchPolicy: 'network' }
  )

  useSubscription(
    {
      onNext() {
        setFetchKey(fetchKey + 1);
      },
      variables: { },
      subscription
    }
  );

  let posts = [];
  if (data?.posts) {
    posts = data.posts;
  }

  return (
    <div className="App">
      <h1> My Posts </h1>

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
