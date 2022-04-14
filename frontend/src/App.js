import './App.css';

import graphql from 'babel-plugin-relay/macro';
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay';

import RelayEnvSetup from './RelayEnvSetup';

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
