import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/posts.json');
      console.log('response', response);
      const body = await response.json();
      setPosts(body);
    }

    fetchData()
  }, []);

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

export default App;
