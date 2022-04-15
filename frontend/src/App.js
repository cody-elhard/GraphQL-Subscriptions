import './App.css';

import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, useLazyLoadQuery, useSubscription } from 'react-relay';

import RelayEnvSetup from './RelayEnvSetup';
// import { useMemo } from 'react';

const subscription = graphql`
  subscription AppSubscription {
    postWasAdded {
      title
    }
  }
`;


function App() {
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
      onCompleted: () => { console.log('completed subscription'); },
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
