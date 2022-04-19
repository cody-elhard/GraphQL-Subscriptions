import './App.css';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery, useSubscription } from 'react-relay';

import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMemo } from 'react';

const subscription = graphql`
  subscription AppSubscription {
    posts {
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
            <Link to={`/posts/${btoa(post.id)}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
