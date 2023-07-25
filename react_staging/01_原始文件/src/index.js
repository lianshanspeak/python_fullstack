import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 包裹，检查代码不对的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 用于记录页面性能的，页面性能监测
reportWebVitals();
