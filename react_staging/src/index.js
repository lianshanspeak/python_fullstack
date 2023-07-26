// 引入核心库
import React from 'react';
// 引入ReactDOM
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
// 引入App组件
import App from './App';


// 渲染到App页面
// ReactDOM.render(<App/>,document.getElementById('root'))




const container = document.getElementById('root');
const root = createRoot(container);
root.render( <App/> );
