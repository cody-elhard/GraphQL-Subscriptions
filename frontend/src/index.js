import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SinglePost from './routes/SinglePost';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvSetup from './RelayEnvSetup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvSetup}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* NOTE: react router v6 does not support regex yet? */}
          <Route path="/posts/:gid" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
