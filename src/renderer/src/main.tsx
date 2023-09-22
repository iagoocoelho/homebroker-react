import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#002C63',
          colorBgBase: '#fff'
        }
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
