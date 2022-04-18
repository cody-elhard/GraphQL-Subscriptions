import './App.css';
import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, useLazyLoadQuery, useSubscription } from 'react-relay';

import RelayEnvSetup from './RelayEnvSetup';
import { useState } from 'react';
// import { useMemo } from 'react';

const subscription = graphql`
  subscription AppSubscription {
    postWasAdded {
      id
      title
      body
    }
  }
`;


function App() {
  const [subscriptionPosts, setSubscriptionPosts] = useState([]);

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

  useSubscription(
    {
      onNext: (data) => {
        setSubscriptionPosts([
          ...subscriptionPosts,
          data['postWasAdded']
        ])
      },
      variables: { },
      subscription
    }
  );

  let posts = [];
  if (data?.posts) {
    posts = data.posts;
  }

  posts = [
    ...posts,
    ...subscriptionPosts
  ];

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
