import React from 'react'
import { Breadcrumb, Layout } from 'antd'
import Header from './components/Header/Header'
import ModalInformation from './components/Modal/ModalInformation'

const { Content, Footer } = Layout

const App: React.FC = () => {
  return (
    <Layout className="container">
      <Header />

      <div style={{ height: '500px' }}></div>

      <ModalInformation />

      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div>Content</div>
      </Content>
      <Footer>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App
